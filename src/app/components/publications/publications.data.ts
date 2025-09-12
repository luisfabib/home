export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  doi?: string;
  publicationUrl?: string;
  pdfUrl?: string;
  thumbnail?: string;
  graphicalAbstract?: string;
  keywords: string[];
  type: 'journal' | 'conference' | 'preprint' | 'book-chapter' | 'book' | 'newsletter';
  firstAuthor?: boolean;
}

export const publications: Publication[] = [
    {
      id: 1,
      title: 'DeerLab: a comprehensive software package for analyzing dipolar electron paramagnetic resonance spectroscopy data',
      authors: ['Luis Fábregas Ibáñez', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: 'Magnetic Resonance',
      year: 2020,
      abstract: 'Dipolar electron paramagnetic resonance (EPR) spectroscopy (DEER and other techniques) enables the structural characterization of macromolecular and biological systems by measurement of distance distributions between unpaired electrons on a nanometer scale. The inference of these distributions from the measured signals is challenging due to the ill-posed nature of the inverse problem. Existing analysis tools are scattered over several applications with specialized graphical user interfaces. This renders comparison, reproducibility, and method development difficult. To remedy this situation, we present DeerLab, an open-source software package for analyzing dipolar EPR data that is modular and implements a wide range of methods. We show that DeerLab can perform one-step analysis based on separable non-linear least squares, fit dipolar multi-pathway models to multi-pulse DEER data, run global analysis with non-parametric distributions, and use a bootstrapping approach to fully quantify the uncertainty in the analysis.',
      doi: '10.5194/mr-1-209-2020',
      publicationUrl: 'https://mr.copernicus.org/articles/1/209/2020/',
      graphicalAbstract: 'https://mr.copernicus.org/articles/1/209/2020/mr-1-209-2020-avatar-web.png',
      pdfUrl: 'https://mr.copernicus.org/articles/1/209/2020/mr-1-209-2020.pdf',
      thumbnail: 'images/deerlab-2020_thumbnail.png',
      keywords: ['Scientific Software', 'Magnetic Resonance', 'EPR', 'Data Science', 'Regularization'],
      type: 'journal',
      firstAuthor: true
    },
    {
      id: 2,
      title: 'Benchmark Test and Guidelines for DEER/PELDOR Experiments on Nitroxide-Labeled Biomolecules',
      authors: ['Olav Schiemann', 'Caspar A. Heubach', 'Dinar Abdullin', 'Katrin Ackermann', 'Mykhailo Azarkh', 'Elena G. Bagryanskaya', 'Malte Drescher', 'Burkhard Endeward', 'Jack H. Freed', 'Laura Galazzo', 'Daniella Goldfarb', 'Tobias Hett', 'Laura Esteban Hofer', 'Luis Fábregas Ibáñez', 'Eric J. Hustedt', 'Svetlana Kucher', 'Ilya Kuprov', 'Janet Eleanor Lovett', 'Andreas Meyer', 'Sharon Ruthstein', 'Sunil Saxena', 'Stefan Stoll', 'Christiane R. Timmel', 'Marilena Di Valentin', 'Hassane S. Mchaourab', 'Thomas F. Prisner', 'Bela Ernest Bode', 'Enrica Bordignon', 'Marina Bennati', 'Gunnar Jeschke'],
      journal: 'Journal of the American Chemical Society',
      year: 2021,
      abstract: 'Distance distribution information obtained by pulsed dipolar EPR spectroscopy provides an important contribution to many studies in structural biology. Increasingly, such information is used in integrative structural modeling, where it delivers unique restraints on the width of conformational ensembles. In order to ensure reliability of the structural models and of biological conclusions, we herein define quality standards for sample preparation and characterization, for measurements of distributed dipole–dipole couplings between paramagnetic labels, for conversion of the primary time-domain data into distance distributions, for interpreting these distributions, and for reporting results. These guidelines are substantiated by a multi-laboratory benchmark study and by analysis of data sets with known distance distribution ground truth. The study and the guidelines focus on proteins labeled with nitroxides and on double electron–electron resonance (DEER aka PELDOR) measurements and provide suggestions on how to proceed analogously in other cases.',
      doi: '10.1021/jacs.1c07371',
      publicationUrl: 'https://pubs.acs.org/doi/10.1021/jacs.1c07371',
      graphicalAbstract: 'https://pubs.acs.org/cms/10.1021/jacs.1c07371/asset/images/medium/ja1c07371_0007.gif',
      pdfUrl: 'https://pubs.acs.org/doi/pdf/10.1021/jacs.1c07371?ref=article_openPDF',
      thumbnail: 'images/schiemann-2021_thumbnail.png',
      keywords: ['Magnetic Resonance', 'EPR', 'Guidelines', 'White Paper'],
      type: 'journal'
    },
    {
      id: 3,
      title: 'Transient effects in π-pulse sequences in MAS solid-state NMR',
      authors: ['Johannes Hellwagner', 'Nino Wili', 'Luis Fábregas-Ibáñez', 'Johannes J. Wittmann', 'Beat H. Meier', 'Matthias Ernst'],
      journal: 'Journal of Magnetic Resonance',
      year: 2018,
      abstract: 'Dipolar recoupling techniques that use isolated rotor-synchronized π pulses are commonly used in solid-state NMR spectroscopy to gain insight into the structure of biological molecules. These sequences excel through their simplicity, stability towards radio-frequency (rf) inhomogeneity, and low rf requirements. For a theoretical understanding of such sequences, we present a Floquet treatment based on an interaction-frame transformation including the chemical-shift offset dependence. This approach is applied to the homonuclear dipolar-recoupling sequence Radio-Frequency Driven Recoupling (RFDR) and the heteronuclear recoupling sequence Rotational Echo Double Resonance (REDOR). Based on the Floquet approach, we show the influence of effective fields caused by pulse transients and discuss the advantages of pulse-transient compensation. We demonstrate experimentally that the transfer efficiency for homonuclear recoupling can be doubled in some cases in model compounds as well as in simple peptides if pulse-transient compensation is applied to the π pulses. Additionally, we discuss the influence of various phase cycles on the recoupling efficiency in order to reduce the magnitude of effective fields. Based on the findings from RFDR, we are able to explain why the REDOR sequence does not suffer in the recoupling efficiency despite the presence of effective fields.',
      doi: '10.1016/j.jmr.2017.12.015',
      publicationUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S1090780717303075?via%3Dihub',
      graphicalAbstract: 'https://ars.els-cdn.com/content/image/1-s2.0-S1090780717303075-fx1.jpg',
      thumbnail: 'images/hellwagner-2018_thumbnail.png',
      keywords: ['Magnetic Resonance', 'NMR', 'Radio-Frequency Pulses', 'Spin Dynamics', 'Floquet Theory'],
      type: 'journal'
    },
    {
      id: 4,
      title: 'Two-Dimensional Distance Correlation Maps from Pulsed Triple Electron Resonance (TRIER) on Proteins with Three Paramagnetic Centers',
      authors: ['Stephan Pribitzer', 'Luis Fábregas Ibáñez', 'Christoph Gmeiner', 'Irina Ritsch', 'Daniel Klose', 'Muhammad Sajid', 'Miriam Hülsmann', 'Adelheid Godt', 'Gunnar Jeschke'],
      journal: 'Applied Magnetic Resonance',
      year: 2018,
      abstract: 'Recently, we introduced the pulsed triple electron resonance (TRIER) experiment, which correlates dipolar frequencies of molecules with three electron spins. These correlation patterns contain valuable information: in combination with double electron–electron resonance (DEER) they allow to interpret distance distributions of biological systems that exist in more than one conformation. Together with an improved sequence and new data processing, we were now for the first time able to obtain two-dimensional distance correlation maps of the previously investigated model compounds as well as of spin-labeled proteins. For this we applied two-dimensional approximate Pake transformation to TRIER data. This enabled us to get distance correlation plots from two triple-labeled protein samples that were in good agreement with DEER data and simulations. With such information it should then be possible to assign peaks in DEER distance distributions for macromolecules that can exist in more than one conformation.',
      doi: '10.1007/s00723-018-1051-9',
      publicationUrl: 'https://link.springer.com/article/10.1007/s00723-018-1051-9',
      pdfUrl: 'https://link.springer.com/content/pdf/10.1007/s00723-018-1051-9.pdf',
      thumbnail: 'images/pribitzer-2018_thumbnail.png',
      keywords: ['Electron Paramagnetic Resonance Spectroscopy',
                 'Electron Diffraction',
                 'Magnetic Resonance (NMR, EPR)',
                 'Protein Complex', 'Structural Biology',
                 'Protein Structure'],
      type: 'journal'
    },
    {
      id: 5,
      title: 'NMR and EPR reveal a compaction of the RNA-binding protein FUS upon droplet formation',
      authors: ['Leonidas Emmanouilidis', 'Laura Esteban-Hofer', 'Fred F. Damberger', 'Tebbe de Vries', 'Cristina K. X. Nguyen', 'Luis Fábregas-Ibáñez', 'Simon Mergenthal', 'Enrico Klotzsch', 'Maxim Yulikov', 'Gunnar Jeschke', 'Frédéric H.-T. Allain'],
      journal: 'Nature Chemical Biology',
      year: 2021,
      abstract: 'Many RNA-binding proteins undergo liquid–liquid phase separation, which underlies the formation of membraneless organelles, such as stress granules and P-bodies. Studies of the molecular mechanism of phase separation in vitro are hampered by the coalescence and sedimentation of organelle-sized droplets interacting with glass surfaces. Here, we demonstrate that liquid droplets of fused in sarcoma (FUS)—a protein found in cytoplasmic aggregates of amyotrophic lateral sclerosis and frontotemporal dementia patients—can be stabilized in vitro using an agarose hydrogel that acts as a cytoskeleton mimic. This allows their spectroscopic characterization by liquid-phase NMR and electron paramagnetic resonance spectroscopy. Protein signals from both dispersed and condensed phases can be observed simultaneously, and their respective proportions can be quantified precisely. Furthermore, the agarose hydrogel acts as a cryoprotectant during shock-freezing, which facilitates pulsed electron paramagnetic resonance measurements at cryogenic temperatures. Surprisingly, double electron–electron resonance measurements revealed a compaction of FUS in the condensed phase.',
      doi: '10.1038/s41589-021-00752-3',
      publicationUrl: 'https://www.nature.com/articles/s41589-021-00752-3',
      graphicalAbstract: 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41589-021-00752-3/MediaObjects/41589_2021_752_Figa_HTML.png?as=webp',
      thumbnail: 'images/emmanoullidis-2021_thumbnail.png',
      keywords: ['Nuclear Magnetic Resonance Spectroscopy',
                 'Phase Separation',
                 'Protein Complex', 'Structural Biology',
                 'Protein Structure'],
      type: 'journal'
    },
    {
      id: 6,
      title: 'Neural networks in double electron-electron resonance: a practical guide',
      authors: ['Jake Keeley', 'Tajwar Choudhury', 'Laura Galazzo', 'Enrica Bordignon', 'Akiva Feintuch', 'Daniella Goldfarb', 'Hannah Russell', 'Michael J. Taylor', 'Janet E. Lovett', 'Andrea Eggeling', 'Luis Fábregas Ibáñez', 'Katharina Keller', 'Maxim Yulikov', 'Gunnar Jeschke', 'Ilya Kuprov'],
      journal: 'Journal of Magnetic Resonance',
      year: 2022,
      abstract: 'This is a methodological guide to the use of deep neural networks in the processing of pulsed dipolar spectroscopy (PDS) data encountered in structural biology, organic photovoltaics, photosynthesis research, and other domains featuring long-lived radical pairs and paramagnetic metal ions. PDS uses distance dependence of magnetic dipolar interactions; measuring a single well-defined distance is straightforward, but extracting distance distributions is a hard and mathematically ill-posed problem requiring careful regularisation and background fitting. Neural networks do this exceptionally well, but their “robust black box” reputation hides the complexity of their design and training – particularly when the training dataset is effectively infinite. The objective of this paper is to give insight into training against simulated databases, to discuss network architecture choices, to describe options for handling DEER (double electron-electron resonance) and RIDME (relaxation-induced dipolar modulation enhancement) experiments, and to provide a practical data processing flowchart.',
      doi: '10.1016/j.jmr.2022.107186',
      publicationUrl: 'https://www.sciencedirect.com/science/article/pii/S1090780722000441?via%3Dihub',
      pdfUrl: 'https://pdf.sciencedirectassets.com/272577/1-s2.0-S1090780722X00049/1-s2.0-S1090780722000441/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLWVhc3QtMSJHMEUCIH2Slbk5dAaKYviDdHQ%2FH2k%2FyvDWKwUJB8szjiJI1YsTAiEA%2FSzeRU3PU33zEFEP40UZ7MG84soS4oUF47FVKepEkjIqugUIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDMqkPfHbILEieZvVTSqOBYjsjo4w%2FqMoni9BJhQfXk1DRUG5CtPt1ojkU0LWCgDYt4oP%2BbenXHkpj0Se6Uf9L3tI2Ve6CFiKbNfpR3c%2FFWB5v9XfUiOsl5%2Biq5WJ%2FbX0TDT3U5IPYAumEuH12cT7O58r6vuU01WDqzZj0DV9Z71UKkVK3syoxMgQGRUnMjKA2lyGZQ9nCfAatLr144HexL7sVPxPCF9z3WA16XQhyGwPiu%2FRVQXQyPIEwNAsQ7BKWEMFlJ0ku5gmNtHYEH9YsiL%2Fp6pK2JXXREl%2F1Syjn4OeWQu4KRPYaZb4apc1bQjzX5Iv0FvN5V80LU9cgtRO7jb3342WL%2FXAgFtChEdQEXNogm7lthoH48p0n%2FA20WR1ays9lpLfVHVUaJVLpJ68MTfPeUpdEs7hebnMGd02Gq6KUmYE3a5hKpzAYdLMaksq3taC%2FZMryu%2F%2BcqU4%2Bs2S%2BnRy2VlYnhJ1Dph9WdSvglUn%2FSRocYbEGwrcA9c3i9m9a85KyDqJ%2Fqjgq9waTODoJASA9DJhmIeoFlblCo7Q9Fv73fEmiGEbfIoCPlDkWW3Kc2%2BbVYZFNz9cCRjsitiT3cSUaIFmUaLugxjO05TJTSBe95jO5WRxDXolPvFqER9khQWLx5WTVi0m34DCoWuRNpsBP6TJZ53m%2BV2YttdD1RNEnPcgXB3ismr8kAub%2FwLcLjqZ9H0cWp%2F9kucfKX73mMaofgf8ALVOwibKGTQe8LwotgIfUAxa5yFdgzq0RqMqOMj7Z6f3MwaRH%2F%2Bk6UD3dDyCyQzHLfIHasX1bg57brOq4XN2ZDs66bvTGZQposPCYybTNTWJEma9wHyONJnhp33xyNs4i%2BPz4Xens1o9qkcs6f60O1MyB0i1xmv3MDC2ypLFBjqxAbQg7lQmQIM9pjzTbPQNuEXTs23EXrq3Uz9GHirLKGwZVjZ6xZN0cipIebX3XNsreNXKZTw5e0m9k1oEqRm9QfCgGi%2FgmAkkFXa%2BswuSybHGUcNclkvoCfUcZE2GokhHKizNag5bzT31L4Oufuk8lrwAXLLQhq2udFRrEpvFU35XSeKf0BblAsxIQ8EbSdY8%2F7I1IQi%2BXxeInLV1vJZYsTHADp2wO%2Bp7u0whD4GYVju%2B7w%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250819T170417Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYT4FJIEL2%2F20250819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1682674f2867d76b88bfb3bb80dd4ba1401a1acdd7dcdd6dfffde20c4555ef44&hash=600b1c06d4e7979216d35d828b72315160b65e13f9d74dfe294c4f8f33d54bde&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1090780722000441&tid=spdf-8209517f-d9ca-4ad2-a0ec-5a8a671b40a9&sid=29f9a9629770f645898a1ab27f907cef3cfdgxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=190b5656520655050202&rr=971b3aae2cf4a625&cc=ch',
      graphicalAbstract: 'https://ars.els-cdn.com/content/image/1-s2.0-S1090780722000441-ga1.jpg',
      thumbnail: 'images/keeley-2022_thumbnail.png',
      keywords: ['Neural network','Machine Learning','Scientific Software', 'EPR', 'DEERNet'],
      type: 'journal'
    },
    {
      id: 7,
      title: 'General regularization framework for DEER spectroscopy',
      authors: ['Luis Fábregas Ibáñez', 'Gunnar Jeschke'],
      journal: 'Journal of Magnetic Resonance',
      year: 2019,
      abstract: 'Tikhonov regularization is the standard processing technique for the inversion of double electron-electron resonance (DEER) data to distance distributions without assuming a parametrized model. In other fields it has been surpassed by modern regularization methods. We analyze such alternative regularization methods based on the Tikhonov, total variation (TV) and Huber penalties with and without the use of Bregman iterations. For this, we provide a general mathematical framework and its open-source software implementation. We extend an earlier approach by Edwards and Stoll for the selection of an optimal regularization parameter to all of these penalties and use their big test data set of noisy DEER traces with known ground truth for assessment. The results indicate that regularization methods based on Bregman iterations provide an improvement upon Tikhonov regularization in recognizing features and recovering distribution width at moderate signal-to-noise ratio, provided that noise variance is known. Bregman-iterative methods are robust with respect to the method used in the choice of regularization parameter.',
      doi: '10.1016/j.jmr.2019.01.008',
      publicationUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S1090780719300084',
      graphicalAbstract: 'https://ars.els-cdn.com/content/image/1-s2.0-S1090780719300084-ga1.jpg',
      thumbnail: 'images/fabregas-2019_thumbnail.png',
      keywords: ['Data Science','Regularization','Magnetic Resonance'],
      type: 'journal'
    },
    {
      id: 8,
      title: 'Non-uniform HYSCORE: Measurement, processing and analysis with Hyscorean',
      authors: ['Luis Fábregas-Ibáñez', 'Janne Soetbeer', 'Daniel Klose', 'Matthias Tinzl', 'Donald Hilvert', 'Gunnar Jeschke'],
      journal: 'Journal of Magnetic Resonance',
      year: 2019,
      abstract: 'Non-uniform sampling (NUS) provides a considerable reduction of measurement time especially for multi-dimensional experiments. This comes at the cost of additional signal processing steps to reconstruct the complete signal from the experimental data points. Despite being routinely employed in NMR for many experiments, EPR applications have not benefited from NUS due to the lack of a straightforward implementation to perform NUS in common commercial spectrometers. In this work we present a novel method to perform NUS HYSCORE experiments on commercial Bruker EPR spectrometers, along with a benchmark of modern reconstruction methods, and new processing software tools for NUS HYSCORE signals. All of this comes in the form of a free-software package: Hyscorean. Experimental NUS spectra are measured and processed with this package using different reconstruction methods and compared to their uniform sampled counterparts, thereby showcasing the method’s potential for EPR spectroscopy.',
      doi: '10.1016/j.jmr.2019.106576',
      publicationUrl: 'https://www.sciencedirect.com/science/article/pii/S1090780719302150',
      graphicalAbstract: 'https://ars.els-cdn.com/content/image/1-s2.0-S1090780719302150-ga1.jpg',
      thumbnail: 'images/fabregas-2019-nus_thumbnail.png',
      keywords: ['Data Science','Regularization', 'Signal Reconstruction', 'Non-uniform Sampling', 'Magnetic Resonance'],
      type: 'journal'
    },
    {
      id: 9,
      title: 'Optimal background treatment in dipolar spectroscopy',
      authors: ['Luis Fábregas-Ibáñez', 'Gunnar Jeschke'],
      journal: 'Physical Chemistry Chemical Physics',
      year: 2020,
      abstract: 'Treatment of the background in dipolar EPR spectroscopy signals is a critical processing step for the recovery of the underlying distance distributions. Here we present new mathematical considerations that show pitfalls of background subtraction and division. In order to overcome these problems we propose an improved background treatment approach. We show, empirically, that this new method outperforms the established ones and analyze the established practice of post-correction signal truncation, as well as the influence of moderate background-fit errors, on accuracy of distance distributions.',
      doi: '10.1039/C9CP06111H',
      publicationUrl: 'https://www.sciencedirect.com/science/article/pii/S1090780719302150',
      pdfUrl: 'https://pubs.rsc.org/en/content/articlepdf/2020/cp/c9cp06111h',
      graphicalAbstract: 'https://pubs.rsc.org/en/Image/Get?imageInfo.ImageType=GA&imageInfo.ImageIdentifier.ManuscriptID=C9CP06111H&imageInfo.ImageIdentifier.Year=2020',
      thumbnail: 'images/fabregas-2020-background_thumbnail.png',
      keywords: ['Data Science','Regularization', 'Magnetic Resonance'],
      type: 'journal'
    },
    {
      id: 10,
      title: 'Dipolar pathways in dipolar EPR spectroscopy',
      authors: ['Luis Fábregas-Ibáñez', 'Maxx H. Tessmer', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: 'Physical Chemistry Chemical Physics',
      year: 2022,
      abstract: 'Dipolar electron paramagnetic resonance (EPR) experiments such as double electron–electron resonance (DEER) measure distributions of nanometer-scale distances between unpaired electrons, which provide valuable information for structural characterization of proteins and other macromolecular systems. To determine these distributions from the experimental signal, it is critical to employ an accurate model of the signal. For dilute samples of doubly spin-labeled molecules, the signal is a product of an intramolecular and an intermolecular contribution. We present a general model based on dipolar pathways valid for dipolar EPR experiments with spin-1/2 labels. Our results show that the intramolecular contribution consists of a sum and the intermolecular contribution consists of a product over individual dipolar pathway contributions. We examine several commonly used dipolar EPR experiments in terms of dipolar pathways and show experimental results confirming the theoretical predictions. This multi-pathway model makes it possible to analyze a wide range of dipolar EPR experiments within a single theoretical framework.',
      doi: '10.1039/D1CP03305K',
      publicationUrl: 'https://pubs.rsc.org/en/content/articlelanding/2022/cp/d1cp03305k',
      graphicalAbstract: 'https://pubs.rsc.org/en/Image/Get?imageInfo.ImageType=GA&imageInfo.ImageIdentifier.ManuscriptID=D1CP03305K&imageInfo.ImageIdentifier.Year=2022',
      thumbnail: 'images/fabregas-2022-pathways_thumbnail.png',
      keywords: ['Quantum Mechanics', 'Spin Dynamics', 'Theoretical Chemistry', 'Magnetic Resonance'],
      type: 'journal'
    },
    {
      id: 11,
      title: 'Compactness regularization in the analysis of dipolar EPR spectroscopy data',
      authors: ['Luis Fábregas-Ibáñez', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: 'Journal of Magnetic Resonance',
      year: 2022,
      abstract: 'Dipolar electron paramagnetic resonance (EPR) experiments, such as double electron–electron resonance (DEER), measure distributions of nanometer-scale distances between paramagnetic centers, which are valuable for structural characterization of proteins and other macromolecular systems. One challenge in the least-squares fitting analysis of dipolar EPR data is the separation of the inter-molecular contribution (background) and the intra-molecular contribution. For noisy experimental traces of insufficient length, this separation is not unique, leading to identifiability problems for the background model parameters and the long-distance region of the intra-molecular distance distribution. Here, we introduce a regularization approach that mitigates this by including an additional penalty term in the objective function that is proportional to the variance of the distance distribution and thereby penalizes non-compact distributions. We examine the reliability of this approach statistically on a large set of synthetic data and illustrate it with an experimental example. The results show that the introduction of compactness can improve identifiability.',
      doi: '10.1016/j.jmr.2022.107218',
      publicationUrl: 'https://www.sciencedirect.com/science/article/pii/S1090780722000763?via%3Dihub',
      pdfUrl: 'https://pdf.sciencedirectassets.com/272577/1-s2.0-S1090780722X00050/1-s2.0-S1090780722000763/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLWVhc3QtMSJGMEQCIG5qwNqewc37vAfyw1t4PJSLwQU%2B6GNVoaCAwZT8snQyAiBZdx4vg29UwCAzAhnayVlKCCvbhNRIXV7EHTM0obNHZSq8BQjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDA1OTAwMzU0Njg2NSIMryBvavIyin%2BZ4hkZKpAFX3KeNSwfJxVN91rYfvAZAh5D%2BEtlmkOEKEyUuH8XEYYp5HLJuMWWv3ytL2H4G%2BZIJYdtt11APS1i286nwV6TzYAl4lNbqMYGjUQIGoPUho3B3wtufVMbc%2FxBOoVwtZNB4ZaYvS3Q%2Bm9%2F0BQ9YO%2BgI%2BjcaQ8jEjZvePFYqRORnhWf2rBOwwLmkjyXJqXwCt3d%2BKyfYObveQwiKLCLQzcOesaX73cOY4AhHMICPxqCBNgmyQXipZE4sbqcS2ecGMTQYxJLbeCv1dAAxToOaMx3Q9NMZ%2B8Ggb0ye1JVKByOpbdWkNP3Wt90Xi4ZF0tTp2G9Z2hOpOn%2Bq2xaApGtYepSJ2eWfuGdAJp7B4KxsNSnBviZFL7vt8hO88VavpZC83FgkRDlo0bmQhA82FFRsqa1og%2BnmyJ0LiVS52aucKOctkDxfD5AC3x%2BUpmXuXsxAfNKhcJlrfdS0VMEh6wPpYfIa7Pq5dfE16X%2Bu56OY%2BarQ1YuIw0ovQIrhUH9eBszYQqmQ4lkVZcpL0AgWESPX2kIyAKT0kvRxK5mF%2BdCUuMnXiMuI6QasVecJ7mMH%2B8iFajwYlkHI2DuhRIlxQFZoyQRRIbV8aNkni3wAA6QVBoA1YWRPzbmuQ4U%2B9d0EZwHYZydodHBbacU%2Fz%2FyS7aHAS1%2FL9N02bRa8dnmF%2FBLALjSLguBkgYzN8AtiidYyNNeVYLXpK5ArRzjQhkzQYlBruWWDecbB9n2KmyRpFalCng2vG7HK3com3JrgR3bK3oVScsmBY8gMN2FrA8aq50exKQaMTQWepP%2B%2F5TPMlBhe5PP4DbPi4qc4iTHGzPRjq6VRzf8hpVFpNJq2AgUaqRq%2BW4yTw8QMdatyEgAomcQixAM8sUwj9OSxQY6sgESiG5%2B1J6pUoWJK4e%2BagJziUzNGnKIXqo5Zk7OHHKe5w2qYzIiIHBbwJu42ZWRRVNHI0CcJy4pZjUReCBUMB9Gmldnh9p8lcnn51rZgiwil9CkagBThtRL3HS0wCgGpmVuMEis%2F4k3oqcWc7umNQIoK50lc8MnZ96LxsB7aJUGvuoaq9gmhX%2FmQslaDIQ8OXhx23yi8m8RjEiVW2uhVseoVsHOZBkrLtTrmDkMLQUbydQ0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250819T172848Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY6G5IXIBQ%2F20250819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=733dbdaef8ad02913b55955756acb4abb9d5f311cee21895a210b93afc8ca9e3&hash=d3338b17d7977b56972af267937f092cd7651d120a982c3cd3882f6585e23a33&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1090780722000763&tid=spdf-e93ac9a2-f0ab-4c91-b9f6-24782ffacc10&sid=29f9a9629770f645898a1ab27f907cef3cfdgxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=190b5656520653015a5f&rr=971b5e98dad8bc4a&cc=ch',
      graphicalAbstract: 'https://ars.els-cdn.com/content/image/1-s2.0-S1090780722000763-ga1.jpg',
      thumbnail: 'images/fabregas-2022-compactness_thumbnail.png',
      keywords: ['Data Science', 'Regularization', 'Magnetic Resonance'],
      type: 'journal'
    },
    {
      id: 12,
      title: 'Dipolar pathways in multi-spin and multi-dimensional dipolar EPR spectroscopy',
      authors: ['Luis Fábregas-Ibáñez', 'Valerie Mertens', 'Irina Ritsch', 'Tona von Hagens', 'Stefan Stoll', 'Gunnar Jeschke'],
      journal: 'Physical Chemistry Chemical Physics',
      year: 2022,
      abstract: 'Dipolar electron paramagnetic resonance (EPR) experiments, such as double electron–electron resonance (DEER), measure distributions of nanometer-scale distances between unpaired electrons, which provide valuable information for structural characterization of proteins and other macromolecular systems. We present an extension to our previously published general model based on dipolar pathways valid for multi-dimensional dipolar EPR experiments with more than two spin-1/2 labels. We examine the 4-pulse DEER and TRIER experiments in terms of dipolar pathways and show experimental results confirming the theoretical predictions. This extension to the dipolar pathways model allows the analysis of previously challenging datasets and the extraction of multivariate distance distributions.',
      doi: '10.1039/D2CP03048A',
      publicationUrl: 'https://pubs.rsc.org/en/content/articlelanding/2022/cp/d2cp03048a',
      pdfUrl: 'https://pubs.rsc.org/en/content/articlepdf/2022/cp/d2cp03048a',
      graphicalAbstract: 'https://pubs.rsc.org/en/Image/Get?imageInfo.ImageType=GA&imageInfo.ImageIdentifier.ManuscriptID=D2CP03048A&imageInfo.ImageIdentifier.Year=2022',
      thumbnail: 'images/fabregas-2022-multi_thumbnail.png',
      keywords: ['Quantum Mechanics', 'Spin Dynamics', 'Theoretical Chemistry', 'Magnetic Resonance'],
      type: 'journal'
    },
    {
      id: 13,
      title: 'Anatomy of a dipolar EPR signal',
      authors: ['Luis Fábregas-Ibáñez', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: '22nd International Society of Magnetic Resonance Conference',
      year: 2021,
      abstract: `
      Dipolar electron paramagnetic resonance (EPR) experiments such as double electron-electron resonance (DEER) measure signals, from which we can extract distributions of nanometer-scale distances between unpaired electrons. These provide valuable information for structural characterization of proteins and other macromolecular systems. 

To determine these distributions from the experimental signal, it is critical to employ an accurate model of the signal. For dilute samples of doubly spin-labeled molecules, the signal is a product of an intramolecular and an intermolecular contribution. We present a general model based on dipolar pathways valid for DEER experiments with spin-1/2 labels. Our results show that the intramolecular contribution consists of a sum and the intermolecular contribution consists of a product over individual dipolar pathway contributions. 

We examine the commonly used 4-pulse DEER experiment in terms of dipolar pathways and show experimental results confirming the theoretical predictions. This new model makes it possible to analyze a wide range of dipolar EPR experiments within a single theoretical framework.`,
      thumbnail: 'images/ismar-2021-thumbnail.png',
      keywords: ['Quantum Mechanics', 'Spin Dynamics', 'Theoretical Chemistry', 'Magnetic Resonance'],
      type: 'conference'
    },
    {
      id: 14,
      title: 'DeerLab and new aspects in dipolar EPR spectroscopy analysis',
      authors: ['Luis Fábregas-Ibáñez', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: '54th Royal Society Of Chemistry ESR Meeting',
      year: 2021,
      abstract: `
      The analysis of experimental data obtained from dipolar EPR spectroscopy techniques (DEER, RIDME, etc.) requires both accurate theoretical models of the underlying physics and robust numerical methods to estimate those model parameters that fit the experimental data. 
DeerLab is a free, open-source software package for Python for data analysis of dipolar EPR spectroscopy [1]. It provides tools to implement arbitrary data analysis workflows, adapting to most needs. The program comes in the form of a scriptable toolbox accessible for all programming skills, enabling simple, flexible, and reproducible workflows. 
We illustrate some of the new theoretical and methodological advancements included in DeerLab. These include: 
    • One-step analysis: fitting all model parameters (including non-parametric distance distributions) without the need for background correction or any pre-processing modifications of the signals.
    • Uncertainty analysis: accurate and robust estimation of the uncertainty in results based on bootstrapping methods to calculate confidence intervals for any desired quantity.
    • General global analysis: fitting any type and number of models to an arbitrary number of signals.
    • Multi-pathway models: fully describing experiments such as 4-pulse, 5-pulse, or 7-pulse DEER with dipolar pathways or experiments such as RIDME or SIFTER in terms of harmonic pathways.
    • Identifiability analysis: assessing whether the experimental data provide enough information to uniquely determine the best fit for a given model. If not, using new methodology to ensure the identifiability of the solutions.
For more information on features and installation of DeerLab, visit jeschkelab.github.io/DeerLab/index.html.`,
      thumbnail: 'images/rsc-2021-thumbnail.png',
      keywords: ['Scientific Software', 'Spin Dynamics', 'Data Science', 'Magnetic Resonance', 'Poster'],
      type: 'conference'
    },
    {
      id: 15,
      title: 'How do we separate a seemingly inseparable background?',
      authors: ['Luis Fábregas-Ibáñez', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: '54th Royal Society Of Chemistry ESR Meeting',
      year: 2021,
      abstract: `
      Interpretation of dipolar EPR spectroscopy results obtained from techniques such as multi-pulse DEER, RIDME, etc., relies on an accurate analysis of their associated dipolar signals. For this, we require robust estimation of the model parameters, such as the underlying distance distribution, modulation depth, spin concentration, etc. 
A challenging aspect of dipolar EPR spectroscopy data analysis is separating the foreground and background contributions to the signals. This is particularly problematic when the amount (trace length) and quality (noise level) of experimental data are limited. Under these conditions, fits will yield multiple parameter sets (modulation depth, spin concentration, and distance distributions) that fit the experimental data equally well (see example in Figure 1). One common symptom of this is the appearance of false peaks at longer distances in the distance distributions and considerable uncertainty in the fitted parameters.
This phenomenon is known as non-identifiability, a dangerous source of uncertainty, which cannot be fully captured by most standard uncertainty quantification methods and poses a challenge to interpretability and robustness of results if ignored. We discuss the sources of non-identifiability and its diagnosis. We also present multiple strategies to restore identifiability, such as a new penalty, to ensure a unique separation of the background and the foreground in dipolar signals.`,
      keywords: ['Data Science', 'Magnetic Resonance', 'Talk'],
      thumbnail: 'images/rsc-2021-talk-thumbnail.png',
      type: 'conference'
    },
    {
      id: 16,
      title: 'DeerLab - a Python package for analyzing DEER and similar data',
      authors: ['Luis Fábregas-Ibáñez', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: '61st Rocky Mountains Conference on Magnetic Resonance',
      year: 2022,
      abstract: `
      The analysis of experimental data obtained from dipolar EPR spectroscopy techniques (DEER, RIDME, etc.) requires both accurate theoretical models of the underlying physics and robust numerical methods to estimate those model parameters that fit the experimental data. 
DeerLab is a free, open-source software package for Python for data analysis of dipolar EPR spectroscopy [1]. It provides tools to implement arbitrary data analysis workflows, adapting to most needs. The program comes in the form of a scriptable toolbox accessible for all programming skills, enabling simple, flexible, and reproducible workflows. 
We illustrate some of the new theoretical and methodological advancements included in DeerLab. These include: 
    • One-step analysis: fitting all model parameters (including non-parametric distance distributions) without the need for background correction or any pre-processing modifications of the signals.
    • Uncertainty analysis: accurate and robust estimation of the uncertainty in results based on bootstrapping methods to calculate confidence intervals for any desired quantity.
    • General global analysis: fitting any type and number of models to an arbitrary number of signals.
    • Multi-pathway models: fully describing experiments such as 4-pulse, 5-pulse, or 7-pulse DEER with dipolar pathways or experiments such as RIDME or SIFTER in terms of harmonic pathways.
    • Identifiability analysis: assessing whether the experimental data provide enough information to uniquely determine the best fit for a given model. If not, using new methodology to ensure the identifiability of the solutions.
For more information on features and installation of DeerLab, visit jeschkelab.github.io/DeerLab/index.html.`,
      thumbnail: 'images/rmc-2022-thumbnail.png',
      keywords: ['Scientific Software', 'Spin Dynamics', 'Data Science', 'Magnetic Resonance', 'Poster'],
      type: 'conference'
    },
    {
      id: 17,
      title: 'Processing methods for two-dimensional correlated distance distributions from pulsed triple electron resonance (TRIER)',
      authors: ['Luis Fábregas-Ibáñez', 'Stephan Pribitzer', 'Irina Ritsch', 'Christoph Gmeiner', 'M. Sajid', 'M. Hülsmann', 'Adelheid Godt', 'Gunnar Jeschke'],
      journal: '51th Royal Society Of Chemistry ESR Meeting',
      year: 2018,
      abstract: `Recently we introduced the pulsed triple electron resonance (TRIER) experiment [1] as a
complement to double-double electron-electron resonance (DEER): DEER usually provides
distance distributions from doubly-labeled proteins. But if the investigated protein can exist
in more than one conformer, the peaks in the distance distribution can not be
unambiguously assigned. If a third spin label is added, the TRIER sequence allows for
correlating dipolar frequencies that stem from the same molecule, which solves the
assignment problem.
In our first publication [1], spectra did not present an optimal resolution to its application to
proteins. To this aim, we have improved the data processing by means of symmetrization of
the spectrum and a new filter based on the covariance matrix of the spectrum. Additionally,
in order to obtain two-dimensional distance distributions from TRIER data sets, a
two-dimensional approximate Pake transformation as well as a gradient projection
regularization algorithm were implemented. This allowed us to successfully apply the TRIER
sequence to triply-labeled proteins and generate well-resolved spectra and distance
correlation maps (Fig. 1). We expect such maps to facilitate the interpretation of sets of
DEER data and to give more insight into the structure of complex protein systems.`,
      thumbnail: 'images/rsc-2018-thumbnail.png',
      keywords: ['Spin Dynamics', 'Signal Processing', 'Magnetic Resonance', 'Poster'],
      type: 'conference'
    },
    {
      id: 18,
      title: 'Hyscorean: Measurement, processing and analysis software of uniform & non-uniform sampled HYSCORE',
      authors: ['Luis Fábregas Ibáñez', 'Janne Soetbeer', 'Daniel Klose', 'Gunnar Jeschke'],
      journal: '60th Rocky Mountains Conference on Magnetic Resonance',
      year: 2019,
      abstract: `In general in conventional uniformly sampled methods, the potential resolution and sensitivity
gain are strangled by the time required to complete the experiments. Due to constrained
available measurements times, spectroscopists tend to find a balance between digital resolution
and signal-to-noise ratio to match the available time resulting in potentially sub-optimal data.
Non-uniform sampling (NUS) opens the possibility to sample a subset of the original data as a
mean of potentially improving spectral resolution and sensitivity while reducing the
measurement times. NUS was proposed for HYSCORE spectrocsopy and in silico[1]. Otherwise,
due to technical limitations of commercial spectrometers NUS has never been realized
experimentally in the EPR field.
Therefore, exploiting the minimal flexibility offered by the PulseSPEL and ProDeL environments
a new program has been developed which enables non-uniform sampled measurements in
commercial Bruker spectrometers controlled by the XEPR software. Data acquired this way
requires of further processing steps in comparison to uniformly sampled data.
Thus we present Hyscorean (HYSCORE ANalysis): a new free software package for the MATLAB
environment, which includes all necessary files for setting up such measurements as well as a
GUI-based program which enbles the reconstruction and processing of uniform as well as non-
uniform sampled HYSCORE data. The software includes state-of-the-art reconstruction
algorithms, a validation module to estimate the uncertainty introduced by the non-uniform
measurement and a new fitting module powered by EasySpin.
As a proof of concept, NUS HYSCORE spectra of an iron myoglobin-variant [2] have been
measured sampling 15% of the total points and compared to the uniform measurements. The
spectra were acquired in a commercial Bruker spectrometer in 11h in contrast to the 24h
required for the uniform measurement. Processing with Hyscorean yields a spectrum with all
peaks recovered as in the uniform measurement (see Fig. 1).`,
      thumbnail: 'images/rmc-2019-thumbnail.png',
      keywords: ['Scientific Software', 'Spin Dynamics', 'Data Science', 'Magnetic Resonance', 'Poster'],
      type: 'conference'
    },
    {
      id: 19,
      title: 'Hyscorean: Measurement, processing and analysis of (non)-uniform sampled HYSCORE spectra',
      authors: ['Luis Fábregas Ibáñez', 'Janne Soetbeer', 'Daniel Klose', 'Gunnar Jeschke'],
      journal: '52nd Royal Society of Chemistry ESR Meeting',
      year: 2019,
      abstract: `In general in conventional uniformly sampled methods, the potential resolution and sensitivity
gain are strangled by the time required to complete the experiments. Due to constrained
available measurements times, spectroscopists tend to find a balance between digital resolution
and signal-to-noise ratio to match the available time resulting in potentially sub-optimal data.
Non-uniform sampling (NUS) opens the possibility to sample a subset of the original data as a
mean of potentially improving spectral resolution and sensitivity while reducing the
measurement times. NUS was proposed for HYSCORE spectrocsopy and in silico[1]. Otherwise,
due to technical limitations of commercial spectrometers NUS has never been realized
experimentally in the EPR field.
Therefore, exploiting the minimal flexibility offered by the PulseSPEL and ProDeL environments
a new program has been developed which enables non-uniform sampled measurements in
commercial Bruker spectrometers controlled by the XEPR software. Data acquired this way
requires of further processing steps in comparison to uniformly sampled data.
Thus we present Hyscorean (HYSCORE ANalysis): a new free software package for the MATLAB
environment, which includes all necessary files for setting up such measurements as well as a
GUI-based program which enbles the reconstruction and processing of uniform as well as non-
uniform sampled HYSCORE data. The software includes state-of-the-art reconstruction
algorithms, a validation module to estimate the uncertainty introduced by the non-uniform
measurement and a new fitting module powered by EasySpin.
As a proof of concept, NUS HYSCORE spectra of an iron myoglobin-variant [2] have been
measured sampling 15% of the total points and compared to the uniform measurements. The
spectra were acquired in a commercial Bruker spectrometer in 11h in contrast to the 24h
required for the uniform measurement. Processing with Hyscorean yields a spectrum with all
peaks recovered as in the uniform measurement (see Fig. 1).`,
      thumbnail: 'images/rsc-2019-thumbnail.png',
      keywords: ['Scientific Software', 'Spin Dynamics', 'Data Science', 'Magnetic Resonance', 'Poster'],
      type: 'conference'
    },
    {
      id: 20,
      title: 'DeerLab - a Python package for analyzing DEER and similar data',
      authors: ['Luis Fábregas Ibáñez', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: '55th Royal Society of Chemistry ESR Meeting',
      year: 2022,
      abstract: `The analysis of experimental data obtained from dipolar EPR spectroscopy techniques (DEER, RIDME, etc.) requires both accurate theoretical models of the underlying physics and robust numerical methods to estimate those model parameters that fit the experimental data. DeerLab is a free, open-source software package for Python for data analysis of dipolar EPR spectroscopy [1]. It provides tools to implement arbitrary data analysis workflows, adapting to most needs. The program comes in the form of a scriptable toolbox accessible for all programming skills, enabling simple, flexible, and reproducible workflows. With one simple script you will be able to analyze tens or hundreds of datasets automatically.
We illustrate some of the new theoretical and methodological advancements included in DeerLab. These include: 
• Robust and reliable analysis: fitting all model parameters (including non-parametric distance distributions) to a single or multiple signals without the need for background correction or any pre-processing modifications of the signals. All results are accompanied by accurate and robust estimation of the uncertainty in results based on bootstrapping methods to calculate confidence intervals for any desired quantity.
• Multi-pathway models: fully describing experiments such as 4-pulse, 5-pulse, or 7-pulse DEER with dipolar pathways to account for, e.g., the 2+1 contributions in 4-pulse DEER or the secondary contributions of 5-pulse DEER, or experiments such as RIDME or SIFTER in terms of harmonic pathways [2].
• Identifiability analysis: assessing whether the experimental data provide enough information to uniquely determine the best fit for a given model [3].
• Compactness regularization: imposing compactness of the underlying distance distribution allowing the unique and correct determination of the dipolar background and resulting in the absence of long-distance artifacts [3].
For more information on all features, installation, and examples of DeerLab, visit www.jeschkelab.github.io/DeerLab `,
      thumbnail: 'images/rsc-2022-thumbnail.png',
      keywords: ['Scientific Software', 'Spin Dynamics', 'Data Science', 'Magnetic Resonance', 'Poster'],
      type: 'conference'
    },
    {
      id: 21,
      title: 'Paving new paths for dipolar EPR spectroscopy',
      authors: ['Luis Fábregas Ibáñez', 'Gunnar Jeschke', 'Stefan Stoll'],
      journal: '55th Royal Society of Chemistry ESR Meeting',
      year: 2022,
      abstract: `Measuring distributions of nanometer-scale distances between unpaired electrons provides valuable information for the structural characterization of proteins and other macromolecular systems.
To determine such distance distributions from the experimental signal, it is critical to employ an accurate model of the signal. We present a general model based on dipolar pathways valid for dipolar EPR experiments with spin-1/2 labels. Our results show that the intramolecular contribution consists of a sum and the intermolecular contribution consists of a product over individual dipolar pathway contributions. All contributions from the individual pathways encode the same information about the sought distance distribution.
This model provides the foundation of our new software package DeerLab [2]. As a comprehensive Python package for modeling and analyzing dipolar EPR experiments, DeerLab provides the tools to apply the dipolar pathways model to routine or complex analysis workflows reproducible and robustly. Both advancements have enabled the accurate analysis of experiments such as 4-pulse and 5-pulse DEER without modifying or truncating the signal (see Fig. 1). 
DeerLab and its theoretical innovations open many experimental and computational possibilities that might have been challenging or intractable in the past. For example, we recently expanded the theoretical framework to account for multi-spin systems, allowing us to extract multi-dimensional distance distributions from experiments such as 4-pulse DEER or the two-dimensional experiment TRIER. Due to the flexibility of DeerLab, such new developments can be realized easily.`,
      thumbnail: 'images/rsc-2022-talk-thumbnail.png',
      keywords: ['Spin Dynamics', 'Quantum Mechanics', 'Magnetic Resonance', 'Talk'],
      type: 'conference'
    },
    {
      id: 22,
      title: 'DeerLab, new flavor in dipolar EPR data analysis',
      authors: ['Luis Fábregas Ibáñez'],
      journal: 'International EPR Society Newsletter',
      year: 2021,
      abstract: '',
      publicationUrl: 'https://ieprs.org/newsletter/vol-31-1/',
      pdfUrl: 'https://ieprs.org/wp-content/uploads/2021/04/eprnl3101.pdf',
      thumbnail: 'images/newsletter-2021-thumbnail.png',
      keywords: ['Scientific Software', 'Magnetic Resonance'],
      type: 'newsletter'
    },
    {
      id: 23,
      title: 'Quantifying methyl tunneling induced (de)coherence of nitroxides in glassy ortho-terphenyl at low temperatures',
      authors: ['Andrea Eggeling', 'Janne Soetbeer', 'Luis Fábregas-Ibáñez', 'Daniel Klose', 'Gunnar Jeschke'],
      journal: 'Physical Chemistry Chemical Physics',
      year: 2023,
      doi: '10.1039/D3CP01299A',
      abstract: 'The low-temperature Hahn echo decay signal of the pyrroline-based nitroxide H-mNOHex in ortho-terphenyl (OTP) shows two contributions on distinct time scales. Tunneling of the nitroxide\'s methyl groups cause electron spin echo envelope modulation (ESEEM) on a faster time scale compared to the slower matrix-induced decoherence contribution arising from nuclear pair ESEEM. Here we introduce the methyl quantum rotor (MQR) model that describes tunneling ESEEM originating from multiple methyl rotors coupled to the same electron spin. By formulating the MQR model based on a rotation barrier distribution P(V3), we account for the different local environments in a glassy matrix. Using this framework, we determine the methyl groups\' rotation barrier distribution from experimental Hahn echo decay/two-pulse ESEEM data by a non-linear fitting approach. The inferred distributions are in good agreement with density functional theory (DFT) calculations of the methyl groups\' rotation barriers in the low-temperature regime where tunneling constitutes the dominant methyl proton exchange process. In addition to comparing our results with previous decoherence studies performed on the same spin system, we experimentally confirm the characteristic properties of methyl tunneling by demonstrating that P(V3) is magnetic field independent and predominantly temperature independent between 10 and 50 K. This confirms the assignment of the fast Hahn echo decay contribution to methyl tunneling, showcasing how pulsed EPR sequences can coherently probe this quantum phenomenon for commonly employed nitroxide spin-labels.',
      publicationUrl: 'https://pubs.rsc.org/en/content/articlelanding/2023/cp/d3cp01299a',
      pdfUrl: 'https://pubs.rsc.org/en/content/articlepdf/2023/cp/d3cp01299a',
      graphicalAbstract: 'https://pubs.rsc.org/en/Image/Get?imageInfo.ImageType=GA&imageInfo.ImageIdentifier.ManuscriptID=D3CP01299A&imageInfo.ImageIdentifier.Year=2023',
      thumbnail: 'images/eggeling-2023-thumbnail.png',
      keywords: ['Decoherence', 'Quantum Tunneling', 'Magnetic Resonance'],
      type: 'journal'
    },
    {
      id: 24,
      title: 'Regularized dynamical decoupling noise spectroscopy - a decoherence descriptor for radicals in glassy matrices',
      authors: ['Janne Soetbeer', 'Luis Fábregas Ibáñez', 'Zachariah Berkson', 'Yevhen Polyhach', 'Gunnar Jeschke'],
      journal: 'Physical Chemistry Chemical Physics',
      year: 2021,
      doi: '10.1039/D1CP03103A',
      abstract: 'Decoherence arises from a fluctuating spin environment, captured by its noise spectrum S(ω). Dynamical decoupling (DD) with n π pulses extends the dephasing time if the associated filter function attenuates S(ω). Inversely, DD noise spectroscopy (DDNS) reconstructs S(ω) from DD data by approximating the filters pass band by a δ-function. This restricts application to qubit-like spin systems with inherently long dephasing times and/or many applicable pulses. We introduce regularized DDNS to lift this limitation and thereby infer S(ω) from DD traces of paramagnetic centers in glassy o-terphenyl and water–glycerol matrices recorded with n ≤ 5. For nitroxide radicals at low temperatures, we utilize deuteration to identify distinct matrix- and spin center-induced spectral features. The former extends up to a matrix-specific cut-off frequency and characterizes nuclear spin diffusion. We demonstrate that rotational tunneling of intramolecular methyl groups drives the latter process, whereas at elevated temperatures S(ω) reflects the classical methyl group reorientation. Ultimately, S(ω) visualizes and quantifies variations in the electron spins couplings and thus reports on the underlying spin dynamics as a powerful decoherence descriptor.',
      publicationUrl: 'https://pubs.rsc.org/en/content/articlelanding/2021/cp/d1cp03103a',
      pdfUrl: 'https://pubs.rsc.org/en/content/articlepdf/2021/cp/d1cp03103a',
      graphicalAbstract: 'https://pubs.rsc.org/en/Image/Get?imageInfo.ImageType=GA&imageInfo.ImageIdentifier.ManuscriptID=D1CP03103A&imageInfo.ImageIdentifier.Year=2021',
      thumbnail: 'images/soetbeer-2021-thumbnail.png',
      keywords: ['Decoherence', 'Regularization', 'Magnetic Resonance'],
      type: 'journal'
    },
    {
      id: 25,
      title: 'Precision Oncology Program (POP), an observational study using real-world data and imaging mass cytometry to explore decision support for the Molecular Tumor Board: study protocol',
      authors: ['Laura Amanda Boos', 'Christian Doerig', 'Gabriele Gut', 'Nicola Miglino', 'Luis Fábregas Ibáñez', 'Shemra Rizzo', 'Charlotta Schärfe Fruechtenicht', 'Nandini Chitale', 'Charles Lu', 'Martin Zoche', 'Bernd Bodenmiller', 'Stephane Chevrier', 'Alexandra Sophia Eklund', 'Marta Nowak', 'Sepehr Rahmani Khajouei', 'Carmen Galani Berardo', 'Lukasz Kaczmarek', 'Karin Bosshard', 'William Archey', 'Matthias Bodmer', 'Dominik Glinz', 'Eva Camarillo-Retamosa', 'Chiara Louisa Hempel', 'Parisa Rahimzadeh', 'Benedict Gosztonyi', 'Ulrich Richter', 'Lorenz Bankel', 'Andreas Wicki'],
      journal: 'BMJ Open',
      year: 2025,
      doi: '10.1136/bmjopen-2024-096591',
      abstract: 'Precision oncology aims to provide individualised treatment recommendations based on patient-specific characteristics. In this rapidly evolving field with increasing numbers of biomarkers and potential therapeutic targets, there is a growing unmet need for evidence guiding these individualised treatment recommendations. The Precision Oncology Program (POP) harnesses real-world data (RWD) and imaging mass cytometry (IMC) to evaluate the feasibility and utility of integrating different data modalities to inform personalised treatment recommendations. This program uses patient-matched clinicogenomic data and spatial single-cell proteomics analysis to support profiling-driven decision-making for patients with cancer at the Molecular Tumor Board.',
      publicationUrl: 'https://bmjopen.bmj.com/content/15/3/e096591',
      pdfUrl: 'https://bmjopen.bmj.com/content/bmjopen/15/3/e096591.full.pdf',
      thumbnail: 'images/boos-2025-thumbnail.png',
      keywords: ['Clinical Study Protocol', 'Industry Collaboration', 'Real-World Data', 'Oncology'],
      type: 'journal'
    },
    {
      id: 26,
      title: 'Precision Oncology Guided by Genomic Profiling in Breast Cancer: Real-World Data from a Molecular Tumor Board',
      authors: ['Tim Graf', 'Laura A. Boos', 'Tarun Mehra', 'Nicola Miglino', 'Bettina Sobottka', 'Jan H. Rüschoff', 'Luis Fábregas-Ibáñez', 'Martin Zoche', 'Heike Frauchiger-Heuer', 'Isabell Witzel', 'Alexander Ring', 'Andreas Wicki'],
      journal: 'Cancers',
      year: 2025,
      doi: '10.3390/cancers17152435',
      abstract: 'Precision oncology aims to provide individualised treatment recommendations based on patient-specific characteristics. In this rapidly evolving field with increasing numbers of biomarkers and potential therapeutic targets, there is a growing unmet need for evidence guiding these individualised treatment recommendations. The Precision Oncology Program (POP) harnesses real-world data (RWD) and imaging mass cytometry (IMC) to evaluate the feasibility and utility of integrating different data modalities to inform personalised treatment recommendations. This program uses patient-matched clinicogenomic data and spatial single-cell proteomics analysis to support profiling-driven decision-making for patients with cancer at the Molecular Tumor Board.',
      publicationUrl: 'https://www.mdpi.com/2072-6694/17/15/2435',
      thumbnail: 'images/graf-2025-thumbnail.png',
      keywords: ['Precision Oncology', 'Next-gen Sequencing', 'Breast cancer', 'Real-world Data', 'Molecular Tumor Board'],
      type: 'journal'
    },
  ];