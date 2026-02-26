export const officeHours = [
  { day: "Poniedziałek", hours: "8:00 - 18:00" },
  { day: "Wtorek - Czwartek", hours: "7:00 - 15:00" },
  { day: "Piątek", hours: "7:00 - 13:00" },
];

export const contactNumbers = [
  { label: "email", icon: "email" as const, value: "sekretariat@sbmpp.lublin.pl", href: "mailto:sekretariat@sbmpp.lublin.pl" },
  { label: "phone", icon: "phone" as const, value: "+81 532 84 43", href: "tel:+48815328443" },
  { label: "Fax", icon: "fax" as const, value: "+81 534 29 93" },
  { label: "Księgowość", icon: "label" as const, value: "+48 609 333 515", href: "tel:+48609333515" },
  { label: "Administracja", icon: "label" as const, value: "+48 693 699 889", href: "tel:+48693699889" },
];

export const emergencyNumbers = {
  title: "TELEFONY ALARMOWE",
  sections: [
    {
      title: "Pogotowie WOD.-KAN. i Elektryczne",
      hours: [
        { day: "Poniedziałek - Piątek", hours: "15:00 - 7:00" },
        { day: "Dni wolne", hours: "CAŁODOBOWO" },
      ],
      phones: [
        { value: "+81 744 23 45", href: "tel:+48817442345" },
        { value: "+48 600 270 498", href: "tel:+48600270498" },
      ],
    },
    {
      title: "LPEC zgłoszenia nieprawidłowości c.o. i c.w.u",
      phones: [{ value: "+48 327 788 988", href: "tel:+48327788988" }],
    },
    {
      title: null,
      phones: [{ value: "993 - CAŁODOBOWO", href: "tel:993" }],
    },
  ],
};

export const mapCoordinates = {
  lat: 51.2425272,
  lng: 22.5593259,
  zoom: 17,
};
