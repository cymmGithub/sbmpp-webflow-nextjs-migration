export interface ContentBlock {
  type: "paragraph" | "heading" | "image";
  text?: string;
  src?: string;
  alt?: string;
}

export interface Announcement {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  bannerImage: string;
  content: ContentBlock[];
  relatedSlugs: string[];
}

export const announcements: Announcement[] = [
  {
    slug: "jubileusz",
    title: "Jubileusz 100-lecia",
    date: "01.01.2026",
    author: "SBMPP",
    description: "100 lat tradycji, bezpieczeństwa i wspólnoty",
    bannerImage: "/images/ogloszenia/jubileusz-100.jpg",
    content: [
      {
        type: "heading",
        text: "Pionierzy lubelskiej spółdzielczości, historia zapisana w murach",
      },
      {
        type: "paragraph",
        text: 'Lata 20. XX wieku były dla odrodzonej Polski czasem wielkich wyzwań. Lublin, jako prężnie rozwijający się ośrodek administracyjny nowego państwa, borykał się z ogromnym "głodem mieszkaniowym". Napływająca do miasta inteligencja oraz kadra urzędnicza potrzebowały godnych warunków do życia, a rynek prywatnych kamienic był drogi i niepewny. W takiej atmosferze narodziła się inicjatywa, która miała na zawsze zmienić krajobraz lubelskiego śródmieścia.',
      },
      {
        type: "image",
        src: "/images/ogloszenia/lublin-lata-20.png",
        alt: "Pocztówka z kolekcji Zbigniewa Lemiecha",
      },
      {
        type: "heading",
        text: "Narodziny idei (1925)",
      },
      {
        type: "paragraph",
        text: "Spółdzielnia Budowlano-Mieszkaniowa Pracowników Państwowych jest najstarszą spółdzielnią mieszkaniową na terenie Lublina. Jej powstanie było wyrazem nowoczesnego myślenia o wspólnocie i samopomocy. 16 czerwca 1925 r. przedstawiciele elity urzędniczej miasta \u2013 urzędnicy Urzędu Wojewódzkiego, Starostwa, Izby Skarbowej, Powiatowego Urzędu Ziemskiego, Okręgowego Urzędu Miejskiego, Dyrekcji Poczty i Telegrafu oraz wielu innych urzędów z Lublina \u2013 spotkali się, by powołać do życia Spółdzielcze Stowarzyszenie Budowlano-Mieszkaniowe Urzędników Państwowych w Lublinie.",
      },
      {
        type: "paragraph",
        text: "Organizacja działała błyskawicznie. Została ona zarejestrowana zaledwie 11 dni później, 27 czerwca 1925 r. pod nr 351/25 w Sądzie Okręgowym w Wydziale Rejestru Handlowego.",
      },
      {
        type: "paragraph",
        text: "Głównym celem Spółdzielczego Stowarzyszenia Urzędników Państwowych było zapewnienie swym członkom dogodnych i stałych mieszkań dla własnego użytku na prawach użytkownika lub własności oraz terenów pod budowę domów. Było to kluczowe dla stabilizacji nowej klasy urzędniczej, która budowała zręby polskiej państwowości.",
      },
      {
        type: "paragraph",
        text: "Na czele organizacji stanęli ludzie cieszący się powszechnym szacunkiem. Pierwszym prezesem zarządu był inż. Adam Kaniowski, sekretarzem dr Wiktor Horodyski, skarbnikiem Lucjan Pełczyński. W skład Rady Nadzorczej Stowarzyszenia wchodzili: Stanisław Mostowski, Bronisław Szwarczyk, Roman Skalski, Stanisław Szramowicz i inni.",
      },
      {
        type: "heading",
        text: "Złota dekada inwestycji (1925-1936)",
      },
      {
        type: "paragraph",
        text: "Dynamika działania zarządu była imponująca. W okresie pierwszych 11 lat działalności Spółdzielnia wybudowała i oddała do użytku swoim członkom trzy okazałe kamienice: przy ul. Narutowicza 71, Solnej 5 i Chopina 8. Każdy z tych budynków to osobny rozdział w historii lubelskiej architektury.",
      },
      {
        type: "paragraph",
        text: "Budowę pierwszego budynku przy ul. Narutowicza 71 rozpoczęto w październiku 1925 r., a zakończono w grudniu 1927 r. Był to czas trudny gospodarczo \u2013 dom budowany był w okresie wysokich cen robocizny i materiałów budowlanych. Mimo to, powstał solidny gmach, który ma cztery piętra i mieścił 17 mieszkań. Całkowity koszt budowy wyniósł 523 691 zł. Kluczem do sukcesu był mecenat państwa: na 76 proc. kosztów budowy została przyznana pożyczka z BGK (Banku Gospodarstwa Krajowego), która była spłacana w ratach.",
      },
      {
        type: "paragraph",
        text: 'Kolejną inwestycją był budynek przy ul. Solnej 5. Prace rozpoczęto we wrześniu 1927 r., a zakończono w marcu 1930 r. Tutaj model finansowania był bardziej zdywersyfikowany. BGK przyznał kredyt na pokrycie 65 proc. kosztów budowy, natomiast członkowie wpłacali wkłady w wysokości 20 proc. ceny kosztorysowej. Ciekawostką jest mechanizm finansowania krzyżowego \u2013 resztę kosztów budowy sfinansowano z pieniędzy nabywców parcel na \u201eDziesiątej\u201d pod Lublinem i w Rudzie Czechowskiej pod Puławami. Dzięki temu ogólny koszt budowy, wynoszący 429 108 zł, został pokryty sprawnie, a budynek stał się ozdobą ulicy.',
      },
      {
        type: "heading",
        text: "Marzenie o domu z ogrodem i letnisku",
      },
      {
        type: "paragraph",
        text: 'Działalność Spółdzielni wykraczała daleko poza wznoszenie kamienic czynszowych. Organizacja wpisała się w popularną wówczas ideę "miast-ogrodów". Zakupiła z majątku państwowego \u201eDziesiąta\u201d (włączonego później do miasta) 116 parcel budowlanych o ogólnej powierzchni 17 ha 2 940 m2 za cenę 65 000 zł. Teren ten podzielono na parcele o powierzchni od 1 300 do 2 000 m2 i przydzielono członkom. Dzięki temu powstała dzielnica willowa, gdzie pobudowano szereg domków jednorodzinnych przy pomocy kredytów z Państwowego Funduszu Budowlanego i z funduszów własnych członków spółdzielni. Dziś Dziesiąta to jedna z najbardziej zielonych dzielnic Lublina.',
      },
      {
        type: "paragraph",
        text: "Zadbano także o wypoczynek. Spółdzielnia kupiła również z państwowego majątku Ruda Czechowska pod Puławami 33 parcele o powierzchni od 1 500 do 2 000 m2 na letniskową kolonię urzędniczą, które przydzielono członkom. Było to odzwierciedlenie stylu życia przedwojennej inteligencji, która ceniła kontakt z naturą. Działki te zostały zabudowane z funduszów własnych zainteresowanych członków. Jak wynika z powyższego, działalność spółdzielni nie ograniczała się tylko do budowy domów mieszkalnych, ale kreowała cały styl życia swoich członków.",
      },
      {
        type: "heading",
        text: "Kryzys i triumf przy ul. Chopina 8",
      },
      {
        type: "paragraph",
        text: "Najbardziej dramatyczne losy wiążą się z trzecią kamienicą. Budowę domu przy ul. Chopina 8 rozpoczęto w maju 1930 r., w samym środku Wielkiego Kryzysu. Skutki załamania gospodarczego były bolesne \u2013 do lipca 1931 r. wybudowano tylko parter z powodu braku środków finansowych. Inwestycja stanęła pod znakiem zapytania.",
      },
      {
        type: "paragraph",
        text: "Jednak determinacja zarządu zwyciężyła. W sierpniu 1932 r. wznowiono budowę, którą zakończono całkowicie w sierpniu 1933 r. Powstał luksusowy, modernistyczny gmach. Ogólny koszt budowy wyniósł 611 600 zł, co czyniło go najdroższą z dotychczasowych inwestycji. Ponownie z pomocą przyszedł BGK, który przyznał kredyt w wysokości 440 000 zł, czyli 72 proc. kosztów budowy. Wzniesiono czteropiętrowy budynek z 25 mieszkaniami, który przez lata był wizytówką nowoczesnego Lublina",
      },
      {
        type: "heading",
        text: "Czasy powojenne i współczesność",
      },
      {
        type: "paragraph",
        text: "Wybuch II wojny światowej i późniejsza zmiana ustroju zahamowały rozwój niezależnej spółdzielczości. Następne budynki budowane były dopiero od 1960 r., już w nowej rzeczywistości PRL, wpisując się w plany gospodarki centralnej. Mimo to, Spółdzielnia zachowała swój elitarny, śródmiejski charakter. Prawie wszystkie budynki Spółdzielni znajdują się w śródmieściu Lublina, co do dziś stanowi o ich unikalnej wartości.",
      },
      {
        type: "image",
        src: "/images/ogloszenia/powojenny-lublin.jpg",
        alt: "Archiwalne zdjęcia powojennego Lublina. Źródło Fotopolska.eu",
      },
      {
        type: "paragraph",
        text: "Przez dekady serce organizacji biło w jednym miejscu. Początkowo spółdzielnia miała swoją siedzibę w historycznym budynku przy ul. Chopina 8. Wraz z nowym milenium nadeszły zmiany \u2013 od 2000 r. biuro Spółdzielni mieści się przy ul. Granicznej 23 w Lublinie.",
      },
      {
        type: "paragraph",
        text: 'W 2000 r. Spółdzielnia obchodziła jubileusz 75-lecia swojej działalności. Był to moment podsumowań i uhonorowania tych, którzy pracowali na rzecz wspólnoty. Z tej okazji odznaczono odznaką \u201eZasłużony Działacz Ruchu Spółdzielczego\u201d 14 członków Spółdzielni. Uznanie przyszło także z góry \u2013 w dniu 30 maja 2000 r. Spółdzielnia nasza została także odznaczona przez Krajową Radę Spółdzielczą odznaką \u201eZasługi dla Spółdzielczości\u201d.',
      },
      {
        type: "paragraph",
        text: "Ostatni budynek oddany był do użytku w 2000 r. Data ta wyznacza koniec ery inwestycyjnej. Od tego czasu Spółdzielnia, z uwagi na brak placów pod budowę w ścisłym śródmieściu Lublina, zajmuje się jedynie administrowaniem wybudowanych do tej pory budynków. Dziś jej rola polega na dbałości o obecne zasoby mieszkaniowe, które stanowią nie tylko majątek członków, ale są też żywym pomnikiem historii lubelskiej architektury i samorządności.",
      },
    ],
    relatedSlugs: ["nowy-rok-2026"],
  },
  {
    slug: "nowy-rok-2026",
    title: "Życzenia Nowy Rok 2026",
    date: "31.12.2025",
    author: "SBMPP",
    description:
      "Drodzy Mieszkańcy, Życzymy, aby te Święta wypełniły Wasze domy spokojem i radością. Niech nadchodzący Nowy Rok 2026 przyniesie wiele zdrowia i pomyślności w rodzinnym gronie.",
    bannerImage: "/images/ogloszenia/zyczenia-2026.jpg",
    content: [
      {
        type: "paragraph",
        text: "Drodzy Mieszkańcy, Życzymy, aby te Święta wypełniły Wasze domy spokojem i radością. Niech nadchodzący Nowy Rok 2026 przyniesie wiele zdrowia i pomyślności w rodzinnym gronie.",
      },
    ],
    relatedSlugs: ["jubileusz"],
  },
];
