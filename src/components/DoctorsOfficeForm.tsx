"use client";

import { ArrowLeft, Bell, Building2, Calendar, Clock, MapPin, Phone, Save } from "lucide-react";
import { Button } from "./Button";
import s from "./DoctorsOfficeForm.module.scss";
import { BigButton } from "./BigButton";
import { Input } from "./Input";
import { CustomSelect } from "./CustomSelect";
import { Toggle } from "./Toggle";
import { useState } from "react";

const cities = ["Caracas", "Maracay", "Valencia", "Barquisimeto", "Maracaibo"];
const numbers = ["🇻🇪 +58", "🇺🇸 +1", "🇨🇴 +57"];
const minutes = ["30", "45", "60", "90"];
const anticipation = ["1 semana", "2 semanas", "1 mes", "3 meses"];

interface Props {
  edit?: boolean;
}

export const DoctorsOfficeForm = ({ edit }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <div className={s.main}>
      <div className={s.nav}>
        <Button icon={<ArrowLeft />} text="Volver" href="/consultorios" />
        <BigButton icon={<Save />} text={`${edit ? "Guardar cambios" : "Crear consultorio"}`} callback={() => {}} />
      </div>

      <div className={s.section}>
        <div className={s.top}>
          <Building2 />
          <h2>Nombre del consultorio</h2>
        </div>

        <Input label="Nombre del consultorio *" placeholder="Ingresa el nombre de tu consultorio" value="" setValue={() => {}} />
      </div>
      <div className={s.section}>
        <div className={s.top}>
          <MapPin />
          <h2>Ubicación del consultorio</h2>
        </div>

        <span className={s.label}>Ciudad donde se ubica el consultorio *</span>

        <CustomSelect placeholder="Selecciona una ciudad" options={cities} setValue={() => {}} />

        <Input label="Dirección del consultorio *" placeholder="Dirección completa del consultorio" value="" setValue={() => {}} />

        <Input
          label="Indicaciones para llegar"
          placeholder="Detalles que ayuden a los pacientes a encontrar tu consultorio"
          value=""
          setValue={() => {}}
          helperText="Esta información ayudará a los pacientes a encontrar su consulta más fácilmente."
        />
      </div>
      <div className={s.section}>
        <div className={s.top}>
          <Phone />
          <h2>Datos de contacto del consultorio</h2>
        </div>

        <span className={s.label}>Teléfono de contacto del consultorio *</span>

        <div className={s.number}>
          <CustomSelect placeholder="🇻🇪 +58" options={numbers} setValue={() => {}} />
          <Input placeholder="Número de teléfono" value="" setValue={() => {}} />
        </div>

        <span className={s.helperText}>Los pacientes podrán comunicarse a través de llamada utilizando este número.</span>
      </div>
      <div className={s.section}>
        <div className={s.top}>
          <Clock />
          <h2>Duración de la consulta</h2>
        </div>

        <div className={s.number}>
          <CustomSelect placeholder="60" options={minutes} setValue={() => {}} />
          <span className={s.minutes}>minutos</span>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.top}>
          <Bell />
          <h2>Recibir notificación de cita agendada</h2>
        </div>

        <div className={s.bottom}>
          <span className={s.minutes}>Recibir notificación por WhatsApp cuando se agende una cita</span>

          <Toggle active={active} setActive={setActive} />
        </div>
      </div>

      {edit && (
        <div className={s.section}>
          <div className={s.top}>
            <Calendar />
            <h2>Anticipación para agendar citas</h2>
          </div>

          <span className={s.minutes}>Establece el período máximo con el que los pacientes pueden reservar una cita</span>

          <span className={s.label}>Máxima antelación para agendar citas</span>
          <CustomSelect placeholder="1 semana" options={anticipation} setValue={() => {}} />
        </div>
      )}
    </div>
  );
};
