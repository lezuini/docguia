"use client";

import { ArrowLeft, Bell, Building2, Calendar, Clock, MapPin, Phone, Save } from "lucide-react";
import { Button } from "./Button";
import s from "./DoctorsOfficeForm.module.scss";
import { BigButton } from "./BigButton";
import { Input } from "./Input";
import { CustomSelect } from "./CustomSelect";
import { Toggle } from "./Toggle";
import { useState } from "react";
import { createConsultorio, editConsultorio } from "@/lib/api";
import toast from "react-hot-toast";

const cities = ["Caracas", "Maracay", "Valencia", "Barquisimeto", "Maracaibo"];
const numbers = ["🇻🇪 +58", "🇺🇸 +1", "🇨🇴 +57"];
const minutes = ["30", "45", "60", "90"];
const anticipation = ["1 semana", "2 semanas", "1 mes", "3 meses"];

interface Props {
  edit?: boolean;
  data?: {
    id: string;
    nombre: string;
    ciudad: string;
    direccion: string;
    indicaciones: string;
    telefono: string;
    prefijo_telefono: string;
    duracion_consulta: string;
    recibir_notificacion: boolean;
    anticipacion_citas: string;
  };
}

const initialFormData = {
  nombre: "",
  ciudad: "",
  direccion: "",
  indicaciones: "",
  telefono: "",
  prefijo_telefono: "",
  duracion_consulta: "",
  recibir_notificacion: true,
  anticipacion_citas: "",
};

export const DoctorsOfficeForm = ({ edit, data }: Props) => {
  const [formData, setFormData] = useState(data ?? initialFormData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (!edit) {
        const res = await createConsultorio(formData);

        if (res.success) {
          toast.success(`Consultorio "${res.consultorio.nombre}" creado exitosamente!`);

          setFormData(initialFormData);
        } else {
          toast.error(res.error);
        }
      } else {
        const res = await editConsultorio(formData);

        if (res.success) {
          toast.success(`Consultorio "${res.consultorio.nombre}" editado exitosamente!`);
        } else {
          toast.error(res.error);
        }
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <form className={s.main} onSubmit={handleSubmit}>
      <div className={s.nav}>
        <Button icon={<ArrowLeft />} text="Volver" href="/consultorios" />
        <BigButton icon={<Save />} text={`${edit ? "Guardar cambios" : "Crear consultorio"}`} callback={() => {}} />
      </div>

      <div className={s.section}>
        <div className={s.top}>
          <Building2 />
          <h2>Nombre del consultorio</h2>
        </div>

        <Input
          label="Nombre del consultorio *"
          placeholder="Ingresa el nombre de tu consultorio"
          value={formData.nombre}
          setValue={(newValue: string) =>
            setFormData((c) => {
              return { ...c, nombre: newValue };
            })
          }
        />
      </div>
      <div className={s.section}>
        <div className={s.top}>
          <MapPin />
          <h2>Ubicación del consultorio</h2>
        </div>

        <span className={s.label}>Ciudad donde se ubica el consultorio *</span>

        <CustomSelect
          placeholder="Selecciona una ciudad"
          options={cities}
          value={formData.ciudad}
          setValue={(newValue: string) =>
            setFormData((c) => {
              return { ...c, ciudad: newValue };
            })
          }
        />

        <Input
          label="Dirección del consultorio *"
          placeholder="Dirección completa del consultorio"
          value={formData.direccion}
          setValue={(newValue: string) =>
            setFormData((c) => {
              return { ...c, direccion: newValue };
            })
          }
        />

        <Input
          label="Indicaciones para llegar"
          placeholder="Detalles que ayuden a los pacientes a encontrar tu consultorio"
          value={formData.indicaciones}
          setValue={(newValue: string) =>
            setFormData((c) => {
              return { ...c, indicaciones: newValue };
            })
          }
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
          <CustomSelect
            placeholder="Prefijo"
            options={numbers}
            value={formData.prefijo_telefono}
            setValue={(newValue: string) =>
              setFormData((c) => {
                return { ...c, prefijo_telefono: newValue };
              })
            }
          />
          <Input
            placeholder="Número de teléfono"
            value={formData.telefono}
            setValue={(newValue: string) =>
              setFormData((c) => {
                return { ...c, telefono: newValue };
              })
            }
          />
        </div>

        <span className={s.helperText}>Los pacientes podrán comunicarse a través de llamada utilizando este número.</span>
      </div>
      <div className={s.section}>
        <div className={s.top}>
          <Clock />
          <h2>Duración de la consulta</h2>
        </div>

        <div className={s.number}>
          <CustomSelect
            placeholder="0"
            options={minutes}
            value={formData.duracion_consulta}
            setValue={(newValue: string) =>
              setFormData((c) => {
                return { ...c, duracion_consulta: newValue };
              })
            }
          />
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

          <Toggle
            active={formData.recibir_notificacion}
            setActive={() =>
              setFormData((c) => {
                return { ...c, recibir_notificacion: !c.recibir_notificacion };
              })
            }
          />
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
          <CustomSelect
            placeholder="Selecciona un periodo máximo"
            options={anticipation}
            value={formData.anticipacion_citas}
            setValue={(newValue: string) =>
              setFormData((c) => {
                return { ...c, anticipacion_citas: newValue };
              })
            }
          />
        </div>
      )}
    </form>
  );
};
