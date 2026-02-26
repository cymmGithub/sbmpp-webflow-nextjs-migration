export interface Member {
  name: string;
  role: string;
  details?: string;
}

export const radaNadzorcza: Member[] = [
  { name: "Paweł Cichosz", role: "Przewodniczący" },
  { name: "Jan Miełgieś", role: "Zastępca Przewodniczącego" },
  { name: "Waldemar Szczepanik", role: "Sekretarz" },
  { name: "Anna Michalec", role: "Członek" },
  { name: "Agnieszka Hunek-Gruszka", role: "Członek" },
  { name: "Krzysztof Flis", role: "Członek" },
  { name: "Krzysztof Wójcicki", role: "Członek" },
];

export const komisjaRewizyjna: Member[] = [
  { name: "Krzysztof Flis", role: "Przewodniczący" },
  { name: "Anna Michalec", role: "Członek" },
  { name: "Agnieszka Hunek-Gruszka", role: "Członek" },
];

export const zarzad: Member[] = [
  {
    name: "Agnieszka Pupek",
    role: "Prezes Zarządu",
    details: "licencjonowany zarządca nieruchomościami\nnr licencji 19579",
  },
  {
    name: "Ewa Bobrzyk",
    role: "Członek Zarządu",
    details: "uprawnienia budowlane 32/Lb/97",
  },
  {
    name: "Jacek Sławiński",
    role: "Członek Zarządu",
    details: "licencjonowany zarządca nieruchomościami\nnr licencji 19611",
  },
];
