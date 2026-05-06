/* ==============================================================
   Richard Wright — Site Content
   --------------------------------------------------------------
   This file is the single source of truth for everything on the
   page. Edit the arrays below to update milestones, modules,
   public scholarship items, or photos. No HTML changes required.

   Categories used by the timeline filter:
     "position"        Positions
     "publication"     Publications
     "award"           Awards
     "grant"           Grants
     "editorial"       Editorial Leadership
     "administrative"  Administrative Leadership
     "public"          Public Scholarship
   ============================================================== */

window.RW_DATA = {
  /* ------------------------------------------------------------
     TIMELINE — major verified milestones only.
     Keep entries chronological. Use a single year ("1994") or a
     range ("1980-1982"). `sort` is the numeric year used for
     ordering (start year for ranges).
     ------------------------------------------------------------ */
  timeline: [
    {
      year: "1974",
      sort: 1974,
      category: "education",
      title: "B.A., Social Ecology",
      detail:
        "Bachelor of Arts in Social Ecology, University of California, Irvine.",
    },
    {
      year: "1976",
      sort: 1976,
      category: "education",
      title: "M.A., Social Ecology",
      detail:
        "Master of Arts in Social Ecology, University of California, Irvine.",
    },
    {
      year: "1980",
      sort: 1980,
      category: "education",
      title: "Ph.D., Criminology — University of Cambridge",
      detail:
        "Doctorate awarded by the Institute of Criminology, University of Cambridge.",
    },
    {
      year: "1980–1982",
      sort: 1980.1,
      category: "position",
      title: "Research Associate, Institute of Criminology, Cambridge",
      detail:
        "Postdoctoral research at the Institute of Criminology, Cambridge University.",
    },
    {
      year: "1982–1984",
      sort: 1982,
      category: "position",
      title: "Senior Research Associate, Institute of Criminology, Cambridge",
      detail:
        "Promoted to Senior Research Associate at the Institute of Criminology, Cambridge University.",
    },
    {
      year: "1984–1987",
      sort: 1984,
      category: "position",
      title: "Assistant Professor, University of Missouri–St. Louis",
      detail:
        "Department of Criminology and Criminal Justice; concurrently Research Fellow at the Center for Metropolitan Studies.",
    },
    {
      year: "1987–1995",
      sort: 1987,
      category: "position",
      title: "Associate Professor, University of Missouri–St. Louis",
      detail:
        "Department of Criminology and Criminal Justice; continued affiliation as Research Fellow, Center for Metropolitan Studies.",
    },
    {
      year: "1994",
      sort: 1994,
      category: "publication",
      title: "Burglars on the Job (with Scott Decker)",
      detail:
        "Burglars on the Job: Streetlife and Residential Break-Ins, co-authored with Scott Decker. A formative ethnographic study of active residential burglars.",
    },
    {
      year: "1995–2004",
      sort: 1995,
      category: "position",
      title: "Professor, University of Missouri–St. Louis",
      detail:
        "Promoted to Professor in the Department of Criminology and Criminal Justice, University of Missouri–St. Louis.",
    },
    {
      year: "1997",
      sort: 1997,
      category: "publication",
      title: "Armed Robbers in Action (with Scott Decker)",
      detail:
        "Armed Robbers in Action: Stickups and Street Culture, co-authored with Scott Decker.",
    },
    {
      year: "2005",
      sort: 2005,
      category: "award",
      title: "Appointed Curators’ Professor",
      detail:
        "Named Curators’ Professor by the University of Missouri — among the highest honors conferred on faculty in the UM system.",
    },
    {
      year: "2005–2014",
      sort: 2005.1,
      category: "position",
      title: "Curators’ Professor, University of Missouri–St. Louis",
      detail:
        "Held a Curators’ Professorship in the Department of Criminology and Criminal Justice.",
    },
    {
      year: "2008–2012",
      sort: 2008,
      category: "editorial",
      title: "Editor-in-Chief, British Journal of Sociology",
      detail:
        "Served as Editor-in-Chief of the British Journal of Sociology following a year as North-American-based Editor (2007–2008).",
    },
    {
      year: "2009",
      sort: 2009,
      category: "award",
      title: "Elected Fellow, American Society of Criminology",
      detail:
        "Elected a Fellow of the American Society of Criminology — a recognition of sustained, distinguished scholarly contributions to the field.",
    },
    {
      year: "2011",
      sort: 2011,
      category: "award",
      title: "Chancellor’s Award for Excellence in Service",
      detail:
        "University of Missouri–St. Louis Chancellor’s Award for Excellence in Service.",
    },
    {
      year: "2012–2014",
      sort: 2012,
      category: "editorial",
      title: "Editor-in-Chief, Oxford Bibliographies Online (Criminology)",
      detail:
        "Served as Editor-in-Chief of the Criminology module of Oxford Bibliographies Online.",
    },
    {
      year: "2014–2017",
      sort: 2014,
      category: "position",
      title: "Distinguished Professor, Georgia State University",
      detail:
        "Joined the Department of Criminal Justice and Criminology at Georgia State University.",
    },
    {
      year: "2014–2018",
      sort: 2014.1,
      category: "administrative",
      title:
        "Chair, Department of Criminal Justice and Criminology, Georgia State",
      detail:
        "Chaired the Department of Criminal Justice and Criminology at Georgia State University.",
    },
    {
      year: "2015",
      sort: 2015,
      category: "publication",
      title: "Code of the Suburb (with Scott Jacques)",
      detail:
        "Code of the Suburb: Inside the World of Young Middle-Class Drug Dealers, co-authored with Scott Jacques.",
    },
    {
      year: "2016",
      sort: 2016,
      category: "public",
      title: "TEDx Peachtree — The Ripple Effects of a Cashless Society",
      detail:
        "Delivered a TEDx Peachtree talk on the criminological implications of declining cash use.",
    },
    {
      year: "2017",
      sort: 2017,
      category: "award",
      title: "Appointed Regents’ Professor",
      detail:
        "Named Regents’ Professor by the University System of Georgia — the system’s highest professorial distinction.",
    },
    {
      year: "2017–2023",
      sort: 2017.1,
      category: "position",
      title: "Regents’ Professor, Georgia State University",
      detail:
        "Held the Regents’ Professorship in the Department of Criminal Justice and Criminology, Georgia State University.",
    },
  ],

  /* ------------------------------------------------------------
     ACHIEVEMENT MODULES — selective summaries by category.
     Each item supports an optional <strong> via the `lead` field.
     The Articles section is rendered between the Books module and
     the Honors module by app.js — no entry is required here for
     it; just keep "Books" first and "Honors" second below.
     ------------------------------------------------------------ */
  modules: [
    {
      label: "Books",
      title: "Books",
      items: [
        {
          year: "1984",
          sort: 1984,
          authors: "Bennett, T., & Wright, R.",
          title: "Burglars on Burglary: Prevention and the Offender.",
          citation: "Gower.",
          url: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/burglars-burglary-prevention-and-offender",
        },
        {
          year: "1994",
          sort: 1994,
          authors: "Wright, R., & Decker, S.",
          title: "Burglars on the Job: Streetlife and Residential Break-Ins.",
          citation: "Northeastern University Press.",
          url: "https://books.google.com/books/about/Burglars_on_the_Job.html?id=ZOv3b5SEl4YC",
        },
        {
          year: "1997",
          sort: 1997,
          authors: "Wright, R., & Decker, S.",
          title: "Armed Robbers in Action: Stickups and Street Culture.",
          citation: "Northeastern University Press.",
          url: "https://books.google.com/books/about/Armed_Robbers_in_Action.html?id=CZXaAAAAMAAJ",
        },
        {
          year: "2006",
          sort: 2006,
          authors: "Jacobs, B. A., & Wright, R.",
          title: "Street Justice: Retaliation in the Criminal Underworld.",
          citation: "Cambridge University Press.",
          url: "https://www.cambridge.org/core/books/street-justice/A95CBA9DEAFC56E1B5894493B5095B7D",
        },
        {
          year: "2015",
          sort: 2015,
          authors: "Jacques, S., & Wright, R.",
          title: "Code of the Suburb: Inside the World of Young Middle-Class Drug Dealers.",
          citation: "University of Chicago Press.",
          url: "https://press.uchicago.edu/ucp/books/book/chicago/C/bo19986235.html",
        },
      ],
    },
    {
      label: "Honors",
      title: "Honors",
      items: [
        {
          lead: "",
          text: "Chancellor’s Award for Excellence in Research, UM–St. Louis (2004).",
        },
        {
          lead: "",
          text: "Curators’ Professor, University of Missouri (2005).",
        },
        {
          lead: "",
          text: "Fellow, American Society of Criminology (2009).",
        },
        {
          lead: "",
          text: "Chancellor’s Award for Excellence in Service, UM–St. Louis (2011).",
        },
        {
          lead: "",
          text: "Regents’ Professor, University System of Georgia (2017).",
        },
      ],
    },
    {
      label: "Grants",
      title: "Grants",
      items: [
        {
          lead: "U.S. Department of Education",
          text: " — funding for graduate training in criminology.",
        },
        {
          lead: "National Institute of Justice",
          text: " — multiple grants on offender behavior and crime control.",
        },
        {
          lead: "National Consortium on Violence Research",
          text: " — funded studies on street-level violence.",
        },
        {
          lead: "Irish Research Council",
          text: " (2003–2006) — comparative fieldwork on offending.",
        },
        {
          lead: "National Science Foundation",
          text: " (2008–2010) — research on drug market conflict in Amsterdam.",
        },
        {
          lead: "Harry Frank Guggenheim Foundation",
          text: " — multiple awards supporting research on violence.",
        },
      ],
    },
    {
      label: "Editorial Leadership",
      title: "Editorial roles",
      items: [
        {
          lead: "Editor-in-Chief, British Journal of Sociology",
          text: " (2008–2012); North-American-based Editor (2007–2008).",
        },
        {
          lead: "Editor-in-Chief, Oxford Bibliographies Online: Criminology",
          text: " (2012–2014).",
        },
      ],
    },
    {
      label: "Administrative Leadership",
      title: "Departmental leadership",
      items: [
        {
          lead: "Chair, Department of Criminology and Criminal Justice",
          text: ", University of Missouri–St. Louis (1998–2001; 2006–2009).",
        },
        {
          lead: "Chair, Department of Criminal Justice and Criminology",
          text: ", Georgia State University (2014–2018).",
        },
      ],
    },
  ],

  /* ------------------------------------------------------------
     SELECTED ARTICLES — chronological.
     Curated, not exhaustive. Drawn from three flagship criminology
     journals (Criminology; British Journal of Criminology; Journal
     of Research in Crime and Delinquency) plus the cashless-crime
     paper in the Journal of Law and Economics. The related TEDx
     talk is kept as a companion under that paper.
     Each entry: year, authors (string in publication order),
     title, citation (volume/issue/pages), `journalTag` (short
     label shown next to the entry), and a url.
     ------------------------------------------------------------ */
  articles: [
    {
      year: "1992",
      sort: 1992,
      journalTag: "JRCD",
      authors: "Wright, R., Decker, S. H., Redfern, A. K., & Smith, D. L.",
      title:
        "A snowball's chance in hell: Doing fieldwork with active residential burglars.",
      citation: "Journal of Research in Crime and Delinquency, 29(2), 148–161.",
      url: "https://journals.sagepub.com/doi/10.1177/0022427892029002003",
    },
    {
      year: "1993",
      sort: 1993,
      journalTag: "Criminology",
      authors: "Decker, S., Wright, R., & Logie, R.",
      title:
        "Perceptual deterrence among active residential burglars: A research note.",
      citation: "Criminology, 31(1), 135–147.",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1745-9125.1993.tb01125.x",
    },
    {
      year: "1995",
      sort: 1995,
      journalTag: "JRCD",
      authors: "Wright, R., Logie, R. H., & Decker, S. H.",
      title:
        "Criminal expertise and offender decision making: An experimental study of the target selection process in residential burglary.",
      citation: "Journal of Research in Crime and Delinquency, 32(1), 39–53.",
      url: "https://journals.sagepub.com/doi/10.1177/0022427895032001002",
    },
    {
      year: "1998",
      sort: 1998,
      journalTag: "JRCD",
      authors: "Baumer, E., Lauritsen, J. L., Rosenfeld, R., & Wright, R.",
      title:
        "The influence of crack cocaine on robbery, burglary, and homicide rates: A cross-city, longitudinal analysis.",
      citation: "Journal of Research in Crime and Delinquency, 35(3), 316–340.",
      url: "https://journals.sagepub.com/doi/10.1177/0022427898035003004",
    },
    {
      year: "1999",
      sort: 1999,
      journalTag: "Criminology",
      authors: "Jacobs, B. A., & Wright, R.",
      title: "Stick-up, street culture, and offender motivation.",
      citation: "Criminology, 37(1), 149–174.",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1745-9125.1999.tb00482.x",
    },
    {
      year: "2000",
      sort: 2000,
      journalTag: "Criminology",
      authors: "Jacobs, B. A., Topalli, V., & Wright, R.",
      title:
        "Managing retaliation: Drug robbery and informal sanction threats.",
      citation: "Criminology, 38(1), 171–198.",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1745-9125.2000.tb00887.x",
    },
    {
      year: "2002",
      sort: 2002,
      journalTag: "BJC",
      authors: "Topalli, V., Wright, R., & Fornango, R.",
      title:
        "Drug dealers, robbery and retaliation: Vulnerability, deterrence and the contagion of violence.",
      citation: "British Journal of Criminology, 42(2), 337–351.",
      url: "https://academic.oup.com/bjc/article-abstract/42/2/337/310394",
    },
    {
      year: "2003",
      sort: 2003,
      journalTag: "BJC",
      authors: "Rosenfeld, R., Jacobs, B. A., & Wright, R.",
      title: "Snitching and the code of the street.",
      citation: "British Journal of Criminology, 43(2), 291–309.",
      url: "https://academic.oup.com/bjc/article/43/2/291/386681",
    },
    {
      year: "2003",
      sort: 2003.1,
      journalTag: "BJC",
      authors: "Jacobs, B. A., Topalli, V., & Wright, R.",
      title: "Carjacking, streetlife and offender motivation.",
      citation: "British Journal of Criminology, 43(4), 673–688.",
      url: "https://academic.oup.com/bjc/article-abstract/43/4/673/389790",
    },
    {
      year: "2008",
      sort: 2008,
      journalTag: "JRCD",
      authors: "Jacques, S., & Wright, R.",
      title:
        "Intimacy with outlaws: The role of relational distance in recruiting, paying, and interviewing underworld research participants.",
      citation: "Journal of Research in Crime and Delinquency, 45(1), 22–38.",
      url: "https://journals.sagepub.com/doi/10.1177/0022427807309439",
    },
    {
      year: "2011",
      sort: 2011,
      journalTag: "Criminology",
      authors: "Jacques, S., & Wright, R.",
      title: "Informal control and illicit drug trade.",
      citation: "Criminology, 49(3), 729–765.",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1745-9125.2011.00234.x",
    },
    {
      year: "2017",
      sort: 2017,
      journalTag: "Criminology",
      authors: "Dickinson, T., & Wright, R.",
      title:
        "The funny side of drug dealing: Risk, humor, and narrative identity.",
      citation: "Criminology, 55(3), 691–720.",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/1745-9125.12148",
    },
    {
      year: "2017",
      sort: 2017.1,
      journalTag: "J. Law & Econ.",
      authors: "Wright, R., Tekin, E., Topalli, V., & McClellan, C.",
      title:
        "Less cash, less crime: Evidence from the Electronic Benefit Transfer program.",
      citation: "Journal of Law and Economics, 60(2), 361–383.",
      url: "https://www.journals.uchicago.edu/doi/10.1086/693745",
      companion: {
        label: "Related talk",
        year: "2016",
        title: "The Ripple Effects of a Cashless Society",
        venue: "TEDx Peachtree",
        url: "https://www.youtube.com/watch?v=iSKURdhWCss",
      },
    },
  ],

  /* ------------------------------------------------------------
     PHOTOS — placeholder gallery.
     To add real images, set `src` to the file path (e.g.
     "images/portrait-2017.jpg"). When `src` is empty, a neutral
     placeholder card is shown automatically.
     Captions, year, and alt text appear in the lightbox.
     ------------------------------------------------------------ */
  photos: [
    {
      src: "photos/4.jpg",
      caption: "Richard, St. Louis, 2011",
      year: "",
      alt: "Studio portrait of Richard Wright in a gray shirt against a textured backdrop, St. Louis, 2011.",
    },
    {
      src: "photos/1.jpg",
      caption: "Richard at UMSL, St. Louis, 2013",
      year: "",
      alt: "Outdoor portrait of Richard Wright on the UM–St. Louis campus, 2013.",
    },
    {
      src: "photos/2.jpg",
      caption: "Richard with Volkan Topalli and Jeremy Bentham, London, c2007",
      year: "",
      alt: "Richard Wright with Volkan Topalli standing beside the auto-icon of Jeremy Bentham at University College London, c. 2007.",
    },
    {
      src: "photos/3.jpg",
      caption: "Richard with Rick Rosenfeld and Scott Jacques, Amsterdam, c2009",
      year: "",
      alt: "Richard Wright at a restaurant table in Amsterdam with Rick Rosenfeld and Scott Jacques, c. 2009.",
    },
    {
      src: "photos/5.jpg",
      caption: "Richard with Scott Jacques, Atlanta, 2015",
      year: "",
      alt: "Holiday card featuring Richard Wright and Scott Jacques, Atlanta, 2015.",
    },
    {
      src: "photos/6.jpg",
      caption: "Burglars on the Job illustration, c2020",
      year: "",
      alt: "Stylized illustration of three masked cartoon burglars with Richard Wright’s face superimposed on one figure, c. 2020.",
    },
    {
      src: "photos/7.jpg",
      caption: "Richard, Atlanta, c2020",
      year: "",
      alt: "Portrait of Richard Wright outdoors with green foliage in the background, Atlanta, c. 2020.",
    },
  ],
};
