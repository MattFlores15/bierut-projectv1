
export interface BierutProject {
    id: string;
    title: string;
    career: string;
    name: string;
    project: string;
    year: number;
    description: string;
    principle: string;
    imageUrl: string;
    caseStudy: {
      imageUrl?: string; // Optional image URL for the case study
      overview: string[];
      [key: string]: any; // Allow arbitrary properties for case study details
    };
  }
  
  export const bierutProjects: BierutProject[] = [
    {
      id: 'vignelli',
      title: 'Vignelli Associates',
      career: 'After graduating from the University of Cincinnati, Michael Bierut joined Massimo Vignelli\'s studio where he refined his approach to typography, grid systems, and clarity in design.',
      name: 'INTERNATIONAL DESIGN CENTER, NY',
      project: 'Corporate Design',
      year: 1984,
      description: 'Working under Vignelli, Bierut contributed to the refinement of IDCNY\'s visual identity, emphasizing bold typography and a strong color system.',
      principle: 'Concept-Driven Design',
      imageUrl: 'assets/images/161271-2331948915.jpeg',
      caseStudy: {
        imageUrl: 'assets/images/Bkg-Vignelli.png',
        overview:[ 'For the International Design Center, New York (IDCNY) in 1987, Michael Bierut faced a unique challenge: combining two vastly different event invitations—one for furniture, one for spacecraft interiors—due to a budget cut.',
        'His solution was a brilliant visual pun: a single drawing that appeared as a table with a vase of flowers right-side up, and a rocket ship when inverted. This experience profoundly taught him that the idea, or "content," is more crucial than the aesthetic "form" in graphic design.']
      }
    },
    {
      id: 'saks',
      title: 'Iconic Identities',
      career: 'After joining Pentagram in 1990, Michael Bierut created some of his most recognized work, establishing himself as a leading voice in American graphic design.',
      name: 'Saks Fifth Avenue',
      project: 'Logo and Identity',
      year: 2007,
      description: 'Bierut\'s elegant typographic solution for Saks Fifth Avenue features a sophisticated, modular approach to the classic department store brand.',
      principle: 'Simplicity',
      imageUrl: 'assets/images/mb_saksfifthavenue_02.png',
      caseStudy: {
        imageUrl: 'assets/images/Bkg-Saks.png',
        overview: ['For Saks Fifth Avenue, Bierut faced the challenge of merging the brand\'s rich heritage with its contemporary fashion.', 
        'He ingeniously deconstructed an existing cursive logo from the 1970s into 64 modular squares. This modular system created a "nearly infinite" array of graphic combinations for packaging, effectively conveying both the store\'s history and its perpetual newness through a sophisticated, systematic approach.']
      }
    },
    {
      id: 'mit',
      title: 'Contemporary Classics',
      career: 'From 2010 onwards, Bierut continued to forge enduring identity systems and influential designs, cementing his status as a master of clarity and adaptive solutions in a rapidly evolving digital landscape.',
      name: 'MIT Media Lab',
      project: 'Brand Identity Redesign',
      year: 2014,
      description: 'For the MIT Media Lab, Bierut developed a systematic identity where a single underlying grid generated a cohesive family of unique logos for over two dozen research groups simultaneously.',
      principle: 'Versatility',
      imageUrl: 'assets/images/mb_mitmedialab_20.png',
      caseStudy: {
        imageUrl: 'assets/images/Bkg-MIT.png',
          overview: ['Bierut tackled the dual challenge of creating a timeless yet flexible identity for the MIT Media Lab. He resolved this by designing a core "ML" monogram based on a precise seven-by-seven grid.', 
            'This same underlying geometric system was then extended to generate unique, cohesive logos for each of the Lab\'s twenty-three diverse research groups, creating an interconnected family of symbols that maintained overall visual coherence while celebrating individual identity.']
      }
    },
    {
      id: 'library',
      title: 'Design with Empathy',
      career: 'In the early 00s, Bierut\'s practice evolved to deeply connect design\'s purpose with social impact, demonstrating its power to inspire and equip individuals for meaningful change.',
      name: 'The Library Initiative',
      project: 'Educational Signage',
      year: 2000,
      description: 'Bierut\'s team designed engaging library graphics, including oversized murals of students, to transform public school libraries in underserved neighborhoods. This project highlighted design\'s role in providing tools for a positive societal impact.',
      principle: 'Clarity',
      imageUrl: 'assets/images/mb-libraryinitiative-01.png',
      caseStudy: {
        imageUrl: 'assets/images/Bkg-L!brary.png',
        overview: ['For this project, Bierut\'s team designed graphics for libraries in underserved New York City public schools. Beyond a logo, the main challenge involved utilizing the vast, empty wall space above children\'s-height shelves.', 
          'His solution was to fill this area with oversized murals featuring portraits of the students themselves, transforming a technical problem into a powerful, inspiring display that served as a constant reminder of the project\'s profound purpose: to empower both librarians and children within their communities.']
      }
    },
    {
      id: 'user',
      title: 'My Homage: Echoing Mastery',
      career: 'This final stage of the timeline journey reflects my personal synthesis of Bierut\'s enduring principles, transforming inspiration into a direct, stylistic tribute to his profound influence on design.',
      name: 'My Logo Redesign',
      project: 'User Tribute',
      year: 2025,
      description: 'Inspired by Bierut\'s mastery of clarity, systematic thinking, and compelling simplicity, I reimagined my own logo. This redesign directly applies his core design principles to create an identity that is both personal and structurally robust.',
      principle: 'Personal Clarity',
      imageUrl: 'assets/images/MBierutLogo-v2.png',
      caseStudy: {
        imageUrl: 'assets/images/Bkg-Matt.png',
        overview: ['Drawing directly from the principles of Michael Bierut\'s impactful career, my personal logo redesign was a focused exercise in applying learned methodologies. Inspired by his systematic approach, I developed a new logo using a 7x7 grid.', 
          'The design prioritizes a simple and clear color palette, reflecting Bierut\'s emphasis on minimalist effectiveness. Concept-driven, the new mark seamlessly merges the globe (my international perspective) with the letters "M" (for Matt) and "F" (for Flores) from my original branding, transforming disparate elements into a single, modern, and cohesive identity, and an homage to Michael Bierut\'s legacy. ']
      }
    }
  ];