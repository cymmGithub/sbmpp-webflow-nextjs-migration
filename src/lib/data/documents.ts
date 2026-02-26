export type DocumentFormat = "pdf" | "doc" | "odt" | "png";

export interface Document {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  downloadUrl: string;
  format: DocumentFormat;
}

export const documents: Document[] = [
  {
    id: "deklaracja-przystapienia-do-spoldzielni",
    title: "Deklaracja przystąpienia do spółdzielni",
    description: "Wzór formularza deklaracji przystąpienia do Spółdzielni Budowlano-Mieszkaniowej Pracowników Państwowych w Lublinie.",
    previewImage: "/images/dokumenty/Deklaracja-przystapienia-do-Sp-ni-preview.png",
    downloadUrl: "/documents/Deklaracja-przystapienia-do-Sp-ni.doc",
    format: "doc",
  },
  {
    id: "regulamin-plan-remontow",
    title: "Regulamin Plan Remontów",
    description: "Zatwierdzony w 2016 roku regulamin określający procedurę tworzenia planu remontów.",
    previewImage: "/images/dokumenty/REGULAMIN-PLAN-REMONTOW.png",
    downloadUrl: "/documents/REGULAMIN-PLAN-REMONTOW.odt",
    format: "odt",
  },
  {
    id: "regulamin-funduszu-remontowego",
    title: "Regulamin Tworzenia i wydatkowania Funduszu Remontowego zasobów lokalowych",
    description: "Regulamin tworzenia i wydatkowania funduszu remontowego zasobów lokalowych Spółdzielni.",
    previewImage: "/images/dokumenty/tworzenie-reg.png",
    downloadUrl: "/documents/REGUL-FUND-REMONT.odt",
    format: "odt",
  },
  {
    id: "regulamin-monitoringu",
    title: "Regulamin funkcjonowania monitoringu wizyjnego nieruchomości wraz z otoczeniem",
    description: "Regulamin określa zasady funkcjonowania monitoringu wizyjnego w budynkach wraz z otoczeniem.",
    previewImage: "/images/dokumenty/mon-cop.png",
    downloadUrl: "/documents/regulamin-monitoring.doc",
    format: "doc",
  },
  {
    id: "regulamin-kosztow-gosp-zasobami",
    title: "Regulamin kosztów gosp. zasobami",
    description: "Zasady rozliczania kosztów gospodarki zasobami mieszkaniowymi oraz ustalania opłat za używanie lokali.",
    previewImage: "/images/dokumenty/regulaminkosztow-gosp-zasobami-preview.png",
    downloadUrl: "/documents/regulaminkosztow-gosp-zasobami.doc",
    format: "doc",
  },
  {
    id: "regulamin-montazu-klimatyzatorow",
    title: "Regulamin montażu klimatyzatorów",
    description: "Zasady, procedury i warunki techniczne dotyczące montażu klimatyzatorów w budynkach Spółdzielni.",
    previewImage: "/images/dokumenty/regulamin-montazu-klimatyzatorow.png",
    downloadUrl: "/documents/regulamin-montazu-klimatyzatorow.doc",
    format: "doc",
  },
  {
    id: "regulamin-obowiazkow-sbmpp",
    title: "Regulamin obowiązków SBMPP",
    description: "Podział obowiązków Spółdzielni oraz jej członków w zakresie napraw wewnątrz lokali.",
    previewImage: "/images/dokumenty/regulamin-obowiazkow-sbmpp.png",
    downloadUrl: "/documents/regulamin_podzialu_obowiazkow_.doc",
    format: "doc",
  },
  {
    id: "regulamin-organizowania-przetargow",
    title: "Regulamin organizowania przetargów",
    description: "Regulamin organizowania przetargów na roboty budowlane, prace remontowe i usługi.",
    previewImage: "/images/dokumenty/regulamin-organizowania-przetargow-18.05.2020.png",
    downloadUrl: "/documents/regulamin-organizowania-przetargow-18.05.2020.doc",
    format: "doc",
  },
  {
    id: "regulamin-pracy-zarzadu",
    title: "Regulamin pracy Zarządu",
    description: "Zasady działania Zarządu Spółdzielni oraz tryb odbywania posiedzeń i podejmowania uchwał.",
    previewImage: "/images/dokumenty/Regulamin_pracy__Zarzadu_SBMPP_2010-preview.png",
    downloadUrl: "/documents/Regulamin_pracy__Zarzadu_SBMPP_2010.doc",
    format: "doc",
  },
  {
    id: "regulamin-dzialalnosci-reklamowej",
    title: "Regulamin prowadzenia działalności reklamowej związanej z dzierżawą powierzchni",
    description: "Regulamin prowadzenia działalności reklamowej związanej z dzierżawą powierzchni na obiektach budowlanych.",
    previewImage: "/images/dokumenty/reg-wod-cop.png",
    downloadUrl: "/documents/regulamin-reklam.doc",
    format: "doc",
  },
  {
    id: "regulamin-stolarki-okiennej",
    title: "Regulamin wymiany i finansowania stolarki okiennej",
    description: "Zasady gospodarowania środkami z funduszu remontowego w zakresie wymiany stolarki okiennej.",
    previewImage: "/images/dokumenty/reg-stol.png",
    downloadUrl: "/documents/regulamin-stolarki-2010.04.26.doc",
    format: "doc",
  },
  {
    id: "regulamin-zuzycia-wody",
    title: "Regulamin zużycia wody i odprowadzania ścieków w budynkach",
    description: "Zasady rozliczania zużycia wody (zimnej i ciepłej) oraz odprowadzania ścieków.",
    previewImage: "/images/dokumenty/woda-podk-reg.png",
    downloadUrl: "/documents/REGULAMIN-ROZLICZANIA-ZUZYCIA-WODY.doc",
    format: "doc",
  },
  {
    id: "statut-2008",
    title: "Statut 2008",
    description: "Statut Spółdzielni przyjęty w 2008 roku.",
    previewImage: "/images/dokumenty/Statut_ob_09.07.08-preview.png",
    downloadUrl: "/documents/Statut_ob_09.07.08.doc",
    format: "doc",
  },
  {
    id: "statut-2010",
    title: "Statut 2010",
    description: "Statut Spółdzielni przyjęty w 2010 roku.",
    previewImage: "/images/dokumenty/Statut_ob_21.06.10-preview.png",
    downloadUrl: "/documents/Statut_ob_21.06.10.doc",
    format: "doc",
  },
  {
    id: "statut-2013",
    title: "Statut 2013",
    description: "Statut Spółdzielni przyjęty w 2013 roku.",
    previewImage: "/images/dokumenty/Statut_ob_29.04.2013-preview.png",
    downloadUrl: "/documents/Statut_ob_29.04.2013.doc",
    format: "doc",
  },
  {
    id: "statut-2018",
    title: "Statut 2018",
    description: "Statut Spółdzielni przyjęty w 2018 roku.",
    previewImage: "/images/dokumenty/statut-Tekst-jednolity-2018-bez-koloru-preview.png",
    downloadUrl: "/documents/statut-Tekst-jednolity-2018-bez-koloru.pdf",
    format: "pdf",
  },
  {
    id: "uchwala-fotowoltaika",
    title: "Uchwała Rady Nadzorczej montaż instalacji fotowoltaicznej",
    description: "Rada Nadzorcza SBMPP nie zezwala na montaż instalacji fotowoltaicznych na nieruchomościach SBMPP, z wyjątkiem instalacji na potrzeby części wspólnych.",
    previewImage: "/images/dokumenty/foto-pdf.png",
    downloadUrl: "/documents/foto-pdf.png",
    format: "png",
  },
  {
    id: "uchwala-termin-zglaszania-osob",
    title: "Uchwała termin zgłaszania osób",
    description: "Uchwała Zarządu z lipca 2013 roku dotycząca składania oświadczeń o liczbie domowników.",
    previewImage: "/images/dokumenty/Uchwala-Zarzadu-o-terminie-skladania-zmian-oswiadczen-smieciowych-preview.png",
    downloadUrl: "/documents/Uchwala-Zarzadu-o-terminie-skladania-zmian-oswiadczen-smieciowych.doc",
    format: "doc",
  },
];
