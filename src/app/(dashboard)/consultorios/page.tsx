import { SummaryCard } from "@/components/SummaryCard";
import { Building2, Calendar, Plus, TrendingUp, Users } from "lucide-react";
import { DoctorsOfficeCard } from "@/components/DoctorsOfficeCard";
import { BigButton } from "@/components/BigButton";

export default function ConsultoriosPage() {
  return (
    <div className="flex flex-col justify-start items-center w-full gap-8 max-w-[1152px] mx-auto">
      <div className="w-full grid grid-cols-4 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <SummaryCard title="Total Reservas" icon={<Calendar />} number="105" helperText="Todas las reservas registradas" />
        <SummaryCard title="Este Mes" icon={<TrendingUp />} number="35" helperText="Reservas en diciembre" />
        <SummaryCard title="Consultorios Activos" icon={<Building2 />} number="3" helperText="De 4 consultorios" />
        <SummaryCard title="Promedio Pacientes" icon={<Users />} number="5.6" helperText="Pacientes por día" />
      </div>

      <div className="w-full flex justify-between items-center gap-4 ">
        <p className="text-gray-600 mb-2">Gestiona tus espacios de atención médica</p>
        <BigButton icon={<Plus />} text="Agregar consultorio" href={"/consultorios/nuevo"} />
      </div>

      <div className="flex flex-col justify-start items-center w-full gap-4">
        <DoctorsOfficeCard name="Consulta Privada Clínica Caracas" location="Calle Simón Bolívar, 25, Caracas" hours="40" />
        <DoctorsOfficeCard name="Consulta Privada Clínica Caracas" location="Calle Simón Bolívar, 25, Caracas" hours="40" />
        <DoctorsOfficeCard name="Consulta Privada Clínica Caracas" location="Calle Simón Bolívar, 25, Caracas" hours="40" />
        <DoctorsOfficeCard name="Consulta Privada Clínica Caracas" location="Calle Simón Bolívar, 25, Caracas" hours="40" />
      </div>
    </div>
  );
}
