import { Component, inject, ChangeDetectionStrategy, ChangeDetectorRef, Injectable, OnInit, ViewEncapsulation, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { PaginatorModule } from 'primeng/paginator';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, map, of, catchError, BehaviorSubject, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { Publication, publications } from './publications.data';

@Injectable({
  providedIn: 'root'
})
export class CitationsService {
  private citationsSubject = new BehaviorSubject<{ [doi: string]: number }>({});
  citations$ = this.citationsSubject.asObservable();
  
  private cache: { [doi: string]: number } = {};
  
  constructor(private http: HttpClient) {}
  
  updateCitation(doi: string, count: number): void {
    this.cache[doi] = count;
    this.citationsSubject.next({ ...this.cache });
  }
  
  getCitation(doi: string): number | undefined {
    return this.cache[doi];
  }
  
  getAllCitations(): { [doi: string]: number } {
    return { ...this.cache };
  }
  
  loadAllCitations(publications: Publication[]): Observable<{ [doi: string]: number }> {
    const publicationsWithDoi = publications.filter(pub => pub.doi);
    
    if (publicationsWithDoi.length === 0) {
      return of({});
    }
    
    const requests = publicationsWithDoi.map(pub => 
      this.http.get<{ count: number }[]>(`https://api.opencitations.net/index/v1/citation-count/${pub.doi}`).pipe(
        map(response => ({
          doi: pub.doi!,
          count: response.length > 0 ? Number(response[0].count) : 0
        })),
        catchError(() => of({ doi: pub.doi!, count: 0 }))
      )
    );
    
    return forkJoin(requests).pipe(
      map(results => {
        const citationsMap: { [doi: string]: number } = {};
        results.forEach(result => {
          citationsMap[result.doi] = result.count;
          this.cache[result.doi] = result.count;
        });
        this.citationsSubject.next({ ...this.cache });
        return citationsMap;
      })
    );
  }
}


  @Pipe({
    name: 'citations',
    pure: true
  })
  export class CitationsCountPipe implements PipeTransform {

    constructor(private citationsService: CitationsService) {}

    transform(publication: Publication): number | undefined {
      if (!publication.doi) {
        return undefined;
      }
      
      // Simply return cached result since we preload all citations
      return this.citationsService.getCitation(publication.doi);
    }
  }



@Component({
  selector: 'app-publications',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    SkeletonModule,
    ToggleSwitchModule,
    ChipModule,
    PaginatorModule,
    AnimateOnScrollModule,
    DialogModule,
    ScrollPanelModule,
    TagModule,
    CitationsCountPipe,
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicationsComponent implements OnInit {
  http = inject(HttpClient);
  citationsService = inject(CitationsService);
  cdr = inject(ChangeDetectorRef);
  
  citationsCached: { [doi: string]: number } = {};

  constructor() {
    // Subscribe to citation updates
    this.citationsService.citations$.subscribe(citations => {
      this.citationsCached = citations;
      this.cdr.markForCheck(); // Trigger change detection for OnPush
    });
  }
  
  ngOnInit(): void {
    // Load all citations on component initialization
    this.citationsService.loadAllCitations(this.publicationsData).subscribe();
  }
  publicationsData: Publication[] = publications
  // Sort publications by year descending
  publications = signal(this.sortedPublications(false))
  filterFirstAuthor = signal(false);
  
  sortedPublications(filter: boolean): Publication[] {
    let data =  this.publicationsData;
    if (filter) {
      data = this.publicationsData.filter(pub => pub.authors[0].includes('Luis'));
    }
    return data.sort((a, b) => b.year - a.year);
  }

  get totalCitations(): number {
    return this.publicationsData
      .filter(pub => pub.doi)
      .reduce((total, pub) => {
        const cached = this.citationsCached[pub.doi!];
        return total + (cached || 0);
      }, 0);
  }

  // Pagination properties
  first: number = 0;
  rows: number = 3;
  totalRecords: number = this.publicationsData.length;
  
  // Dialog properties
  displayAbstractDialog: boolean = false;
  selectedPublication: Publication | null = null;

  get paginatedPublications(): Publication[] {
    const start = this.first;
    const end = this.first + this.rows;
    return this.publications().slice(start, end);
  }

  get uniqueYears(): number {
    const years = new Set(this.publicationsData.map(p => p.year));
    return years.size;
  }

  get journalArticlesCount(): number {
    return this.publicationsData.filter(p => p.type === 'journal').length;
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  openAbstract(publication: Publication) {
    this.selectedPublication = publication;
    this.displayAbstractDialog = true;
  }

  openUrl(url?: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'journal': return 'Journal Article';
      case 'conference': return 'Conference Paper';
      case 'preprint': return 'Preprint';
      case 'book': return 'Book';
      case 'newsletter': return 'Newsletter';
      default: return 'Publication';
    }
  }

  getTypeSeverity(type: string): 'success' | 'info' | 'warning' | 'secondary' {
    switch (type) {
      case 'journal': return 'success';
      case 'conference': return 'info';
      case 'preprint': return 'warning';
      case 'book': return 'secondary';
      case 'newsletter': return 'secondary';
      default: return 'info';
    }
  }

  trackByPublication(index: number, publication: Publication): number {
    return publication.id;
  }
}
