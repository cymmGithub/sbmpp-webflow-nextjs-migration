export interface TimelineEntry {
  year: string;
  title: string;
  image: string;
  description: string;
}

/**
 * All timeline entries extracted from historia.html.
 *
 * Image paths are derived from the Webflow-hosted origFileName values.
 * Copy the actual images into /public/images/historia/ to serve them locally.
 *
 * The bottom-of-page map image is exported separately as `mapImage`.
 */

export const timeline: TimelineEntry[] = [
  {
    year: "1925",
    title: "Tak to si\u0119 zacz\u0119\u0142o\u2026",
    image: "/images/historia/statut-1.jpg",
    description:
      "Na czele organizacji stan\u0119li ludzie ciesz\u0105cy si\u0119 powszechnym szacunkiem. Pierwszym prezesem zarz\u0105du by\u0142 in\u017C. Adam Kaniowski, sekretarzem dr Wiktor Horodyski, skarbnikiem Lucjan Pe\u0142czy\u0144ski. W sk\u0142ad Rady Nadzorczej Stowarzyszenia wchodzili: Stanis\u0142aw Mostowski, Bronis\u0142aw Szwarczyk, Roman Skalski, Stanis\u0142aw Szramowicz i inni. Skan pierwszej strony oryginalnego Statutu Sp\u00f3\u0142dzielczego Stowarzyszenia Budowlano-Mieszkaniowego Urz\u0119dnik\u00f3w Pa\u0144stwowych w Lublinie z 1925 r. - Dokument pochodzi ze zbior\u00f3w bibliotecznych.",
  },
  {
    year: "1927",
    title: "Narutowicza 71",
    image: "/images/historia/narutowicza-71__2025.jpg",
    description:
      "W czasie II wojny \u015Bwiatowej mieszkania w kamienicy zosta\u0142y doszcz\u0119tnie zniszczone przez po\u017Car. Ogie\u0144 nie naruszy\u0142 jednak konstrukcji budynku, kt\u00f3rego wn\u0119trze poddano w 1950 roku generalnemu remontowi i wkr\u00f3tce potem oddano do u\u017Cytku.",
  },
  {
    year: "1930",
    title: "Solna 5",
    image: "/images/historia/solna-5__2025.jpg",
    description:
      "Budynek przy ul. Solnej 5 rozpocz\u0119to we wrze\u015Bniu 1927 r., a zako\u0144czono w marcu 1930 r. Na budow\u0119 tego domu BGK przyzna\u0142 kredyt na pokrycie 65 proc. koszt\u00f3w budowy. Cz\u0142onkowie wp\u0142acali wk\u0142ady w wysoko\u015Bci 20 proc. ceny kosztorysowej. Reszt\u0119 koszt\u00f3w budowy sfinansowano z pieni\u0119dzy nabywc\u00f3w parcel na \u201EDziesi\u0105tej\u201D pod Lublinem i w Rudzie Czechowskiej pod Pu\u0142awami. Og\u00f3lny koszt budowy wyni\u00f3s\u0142 429.108 z\u0142.",
  },
  {
    year: "1933",
    title: "Chopina 8",
    image: "/images/historia/chopina-8__2025.jpg",
    description:
      "Budow\u0119 domu przy ul. Chopina 8 rozpocz\u0119to w maju 1930 r. i do lipca 1931 r. wybudowano tylko parter z powody braku \u015Brodk\u00f3w finansowych. W sierpniu 1932 r. wznowiono budow\u0119, kt\u00f3r\u0105 zako\u0144czono ca\u0142kowicie w sierpniu 1933 r. Og\u00f3lny koszt budowy wyni\u00f3s\u0142 611.600 z\u0142. BGK przyzna\u0142 kredyt w wysoko\u015Bci 440.000 z\u0142, czyli 72 proc. koszt\u00f3w budowy. Wzniesiono czteropi\u0119trowy budynek z 25. mieszkaniami.",
  },
  {
    year: "1960",
    title: "\u015Arodkowa 9",
    image: "/images/historia/srodkowa-9__2025.jpg",
    description: "",
  },
  {
    year: "1960",
    title: "Narutowicza 44",
    image: "/images/historia/narutowicza-44__2025.jpg",
    description: "",
  },
  {
    year: "1966",
    title: "Solna 4",
    image: "/images/historia/solna-4__2025.jpg",
    description: "",
  },
  {
    year: "1968",
    title: "Narutowicza 43",
    image: "/images/historia/narutowicza-43__2025.jpg",
    description: "",
  },
  {
    year: "1968",
    title: "Sk\u0142odowskiej 38",
    image: "/images/historia/sklodowskiej-38__2025.jpg",
    description: "",
  },
  {
    year: "1969",
    title: "Narutowicza 49",
    image: "/images/historia/narutowicza-49__2025.jpg",
    description: "",
  },
  {
    year: "1969",
    title: "Uniwersytecka 8",
    image: "/images/historia/uniwersytecka-8__2025.jpg",
    description: "",
  },
  {
    year: "1970",
    title: "Narutowicza 38-42",
    image: "/images/historia/narutowicza-38-42__2025.jpg",
    description:
      "Jest to jeden z najbardziej charakterystycznych budynk\u00f3w w zasobach Sp\u00f3\u0142dzielni. Obiekt ten, oznaczony numeracj\u0105 \u0142\u0105czon\u0105, stanowi przyk\u0142ad powojennej architektury uzupe\u0142niaj\u0105cej (plombowej).",
  },
  {
    year: "1972",
    title: "Orla 5",
    image: "/images/historia/orla-5__2025.jpg",
    description: "",
  },
  {
    year: "1976",
    title: "Konopnicka 9",
    image: "/images/historia/konopnicka-9__2025.jpg",
    description: "",
  },
  {
    year: "1976",
    title: "Godebskiego 6",
    image: "/images/historia/godebskiego-6__2025.jpg",
    description: "",
  },
  {
    year: "1983",
    title: "Orla 3",
    image: "/images/historia/orla-3__2025.jpg",
    description: "",
  },
  {
    year: "1986",
    title: "Narutowicza 31",
    image: "/images/historia/narutowicza-31__2025.jpg",
    description: "",
  },
  {
    year: "1987",
    title: "Narutowicza 33",
    image: "/images/historia/narutowicza-33__2025.jpg",
    description:
      "Budynek ten sta\u0142 si\u0119 w ostatnich latach wizyt\u00f3wk\u0105 modernizacyjnych ambicji SBMPP. Po\u0142o\u017Cony w \u015Bcis\u0142ym centrum, podlega presji konserwatorskiej, a mimo to sta\u0142 si\u0119 obiektem inwestycji w Odnawialne \u0179r\u00f3d\u0142a Energii (OZE). W 2024 roku wytypowany do monta\u017Cu instalacji fotowoltaicznej.",
  },
  {
    year: "1993",
    title: "Solna 1",
    image: "/images/historia/solna-1__2025.jpg",
    description: "",
  },
  {
    year: "1995",
    title: "Kalinowszczyzna 66",
    image: "/images/historia/kalinowszczyzna-66__2025.jpg",
    description: "",
  },
  {
    year: "1999",
    title: "Graniczna 17",
    image: "/images/historia/graniczna-17__2025.jpg",
    description: "",
  },
  {
    year: "2000",
    title: "Graniczna 23",
    image: "/images/historia/graniczna-23__2025.jpg",
    description:
      "Budynek przy ul. Granicznej 23 pe\u0142ni podw\u00f3jn\u0105 rol\u0119: jest cz\u0119\u015Bciowo obiektem mieszkalnym, ale przede wszystkim mie\u015Bci siedzib\u0119 Zarz\u0105du Sp\u00f3\u0142dzielni.",
  },
];

/**
 * Sidebar / contextual notes that appear on the left side of certain
 * timeline items in the original HTML. These are NOT per-building but
 * per-year-group editorial commentary.
 */
export const timelineSideNotes: Record<string, string> = {
  "1933":
    "Rozw\u00f3j Sp\u00f3\u0142dzielni zosta\u0142 brutalnie przerwany przez wybuch II wojny \u015Bwiatowej, a nast\u0119pnie przez okres stalinowski, kt\u00f3ry nie sprzyja\u0142 niezale\u017Cnym inicjatywom sp\u00f3\u0142dzielczym.",
  "1960":
    "W nowej rzeczywisto\u015Bci politycznej, Sp\u00f3\u0142dzielnia nie zosta\u0142a znacjonalizowana ani wch\u0142oni\u0119ta przez komunalne zasoby kwaterunkowe w stopniu ca\u0142kowitym, cho\u0107 musia\u0142a funkcjonowa\u0107 w ramach gospodarki nakazowo-rozdzielczej.",
  "1968":
    "Fakt, \u017Ce Sp\u00f3\u0142dzielnia przetrwa\u0142a okres stalinowski i dotrwa\u0142a jako odr\u0119bny byt prawny, stanowi o sile jej struktur organizacyjnych.",
  "1969":
    "Prawie wszystkie budynki Sp\u00f3\u0142dzielni znajduj\u0105 si\u0119 w \u015Br\u00f3dmie\u015Bciu Lublina, co do dzi\u015B stanowi o ich unikalnej warto\u015Bci.",
};

/**
 * Map image shown at the bottom of the historia page.
 * Illustrative map of SBMPP assets across Lublin.
 */
export const mapImage = {
  src: "/images/historia/mapa-zasobow.png",
  alt: "Pogl\u0105dowa mapa rozmieszczenia zasob\u00f3w Sp\u00f3\u0142dzielni na terenie Lublina.",
  originalFileName: "2025-12-06_14-15.png",
  webflowUrl:
    "https://cdn.prod.website-files.com/6918f76bd70154aaa1a2b374/69342cbe3488ae1c3625f000_8f963b5252418f03b4b10f94abf1eb7f_2025-12-06_14-15.png",
};

/**
 * Bottom-of-page editorial text accompanying the map.
 */
export const mapDescription =
  "Zasoby SBMPP wyra\u017Anie koncentruj\u0105 si\u0119 wzd\u0142u\u017C ulicy Prezydenta Gabriela Narutowicza oraz przyleg\u0142ej ulicy Granicznej. Jest to obszar o strategicznym znaczeniu dla urbanistyki Lublina, \u0142\u0105cz\u0105cy Plac Litewski z dzielnicami uniwersyteckimi.";
