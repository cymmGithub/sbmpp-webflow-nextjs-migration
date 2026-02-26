import type { Metadata } from "next";
import { HistoriaContent } from "./HistoriaContent";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Poznaj stuletnią historię spółdzielni mieszkaniowej SBMPP w Lublinie, od 1927 roku do chwili obecnej. Historia budynków, rozwoju i zaangażowania na rzecz mieszkańców.",
};

export default function HistoriaPage() {
  return <HistoriaContent />;
}
