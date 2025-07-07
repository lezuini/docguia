import { DoctorsOfficeForm } from "@/components/DoctorsOfficeForm";
import { getConsultorio } from "@/lib/api";
import { redirect } from "next/navigation";

export default async function EditarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { success, data } = await getConsultorio(id);

  if (!success) {
    redirect("/consultorios");
  }

  return <DoctorsOfficeForm edit data={data} />;
}
