import { DoctorsOfficeForm } from "@/components/DoctorsOfficeForm";
import { redirect } from "next/navigation";

export default async function ConsultoriosIdPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (id !== "nuevo") {
    redirect("/consultorios");
  }

  return <DoctorsOfficeForm />;
}
