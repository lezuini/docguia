"use client";

import { ArrowLeft, Clock, Save } from "lucide-react";
import { BigButton } from "./BigButton";
import { Button } from "./Button";
import s from "./DoctorsOfficeHoursForm.module.scss";
import { DayScheduleCard } from "./DayScheduleCard";

export const DoctorsOfficeHoursForm = () => {
  return (
    <div className={s.main}>
      <div className={s.nav}>
        <Button icon={<ArrowLeft />} text="Volver" href="/consultorios" />
        <BigButton icon={<Save />} text="Guardar horarios" callback={() => {}} />
      </div>

      <div className={s.section}>
        <div className={s.header}>
          <div className={s.top}>
            <Clock />
            <h2>Horarios de atención</h2>
          </div>

          <p className="text-gray-600">Define los días y horarios en los que estarás disponible para atender pacientes</p>
        </div>

        <div className={s.content}>
          <DayScheduleCard day="Lunes" abrev="LUN" startsActive />
          <DayScheduleCard day="Martes" abrev="MAR" startsActive />
          <DayScheduleCard day="Miércoles" abrev="MIE" startsActive />
          <DayScheduleCard day="Jueves" abrev="JUE" startsActive />
          <DayScheduleCard day="Viernes" abrev="VIE" startsActive />
          <DayScheduleCard day="Sábado" abrev="SAB" />
          <DayScheduleCard day="Domingo" abrev="DOM" />
        </div>
      </div>
    </div>
  );
};
