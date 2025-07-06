import { PremiumSummaryCard } from "@/components/PremiumSummaryCard";
import s from "./page.module.scss";
import { Building2, Calendar, Clock, FileText, Users } from "lucide-react";
import { QuickActionItem } from "@/components/QuickActionItem";
import { RecentActivityItem } from "@/components/RecentActivityItem";
import { PatientQuickAccess } from "@/components/PatientQuickAccess";
import { SmallName } from "@/components/SmallName";

export default function Dashboard() {
  return (
    <div className={s.main}>
      <div className={s.banner}>
        <SmallName />

        <p>Aquí tienes un resumen de tu actividad médica</p>
      </div>

      <div className={s.premiumSummaryCards}>
        <PremiumSummaryCard title="Consultorios" icon={<Building2 color="rgb(37 99 235)" />} number="4" />
        <PremiumSummaryCard title="Pacientes" icon={<Users color="rgb(22 163 74)" />} number="127" />
        <PremiumSummaryCard title="Citas esta semana" icon={<Calendar color="rgb(147 51 234)" />} number="23" />
        <PremiumSummaryCard title="Consultas hoy" icon={<Clock color="rgb(234 88 12)" />} number="8" />
      </div>

      <div className={s.grid}>
        <div className={s.container}>
          <h3>Acciones Rápidas</h3>

          <QuickActionItem icon={<Building2 />} text="Gestionar Consultorios" href="/consultorios" />
          <QuickActionItem icon={<Users />} text="Ver Pacientes" href="/pacientes" />
          <QuickActionItem icon={<Calendar />} text="Revisar Calendario" href="/calendario" />
          <QuickActionItem icon={<FileText />} text="Plantillas de Episodios" href="/plantillas" />
        </div>
        <div className={s.container}>
          <h3>Actividad Reciente</h3>

          <RecentActivityItem title="Cita agendada" name="María Rodríguez" hours="2" />
          <RecentActivityItem title="Consulta completada" name="Carlos Mendoza" hours="3" />
          <RecentActivityItem title="Receta generada" name="Ana García" hours="5" />
        </div>
      </div>

      <div className={s.container}>
        <h3>Acceso Rápido a Pacientes</h3>

        <div className={s.grid2}>
          <PatientQuickAccess />
        </div>
      </div>
    </div>
  );
}
