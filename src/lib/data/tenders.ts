export interface TenderAttachment {
  title: string;
  previewImage: string;
  downloadUrl: string;
}

export interface Tender {
  id: string;
  title: string;
  description: string[];
  cpvCodes: string;
  deadline: string;
  attachments: TenderAttachment[];
}

export const tenders: Tender[] = [
  {
    id: "fotowoltaika-narutowicza-33",
    title:
      "DOSTARCZENIE I MONTAŻ INSTALACJI FOTOWOLTAICZNEJ O MOCY 19,775 kWp NA DACHU BUDYNKU MIESZKALNEGO POŁOŻONEGO w LUBLINIE PRZY ul. Narutowicza 33",
    description: [
      "Przedmiotem zamówienia jest dostarczenie i montaż instalacji fotowoltaicznej na dachu budynku przy ul. Narutowicza 33 według kodów CPV 09331200-0; 45310000-3 Należy wykonać wszelkie prace wynikające wprost z dokumentacji technicznej, a także wszelkie prace niezbędne do prawidłowego wykonania zamierzenia budowlanego.",
      "Każdy oferent ma prawo zwrócić się do zamawiającego o wyjaśnienie treści dokumentów przetargowych przed upływem terminu składania ofert.",
    ],
    cpvCodes: "09331200-0; 45310000-3",
    deadline: "26.12.2025",
    attachments: [
      {
        title: "SWIZ",
        previewImage: "/images/swiz-fotowoltaika-preview.png",
        downloadUrl: "/documents/SIWZ-fotowoltaika.pdf",
      },
      {
        title: "Wzór oferty",
        previewImage: "/images/wzor-oferty-preview.png",
        downloadUrl: "/documents/wzor-oferty-1.pdf",
      },
      {
        title: "Wzór umowy",
        previewImage: "/images/wzor-umowy-preview.png",
        downloadUrl: "/documents/wzor_umowy.pdf",
      },
    ],
  },
];
