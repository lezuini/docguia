import { Building2, Calendar, Clock, ExternalLink, MapPin, SquarePen, TrendingUp, Users } from "lucide-react";
import s from "./DoctorsOfficeCard.module.scss";
import { Booking } from "./Booking";
import { Button } from "./Button";

interface Props {
  name: string;
  location: string;
  hours: string;
}

export const DoctorsOfficeCard = ({ name, location, hours }: Props) => {
  return (
    <div className={s.main}>
      <div className={s.top}>
        <div className={s.icon}>
          <Building2 />
        </div>

        <div className={s.text}>
          <h3>{name}</h3>
          <div className={s.location}>
            <MapPin />
            <span>{location}</span>
          </div>
        </div>

        <div className={s.buttons}>
          <Button icon={<SquarePen />} text="Editar consultorio" href={`/consultorios/${1}/editar`} />

          <Button icon={<ExternalLink />} text="Editar disponibilidad" href={`/consultorios/${1}/disponibilidad`} />
        </div>
      </div>

      <div className={s.bottom}>
        <Booking />

        <div className={s.items}>
          <div className={s.item}>
            <Calendar color="rgb(59 130 246)" />

            <div className={s.text}>
              <p>45</p>
              <span>Total reservas</span>
            </div>
          </div>
          <div className={s.item}>
            <TrendingUp color="rgb(34 197 94)" />

            <div className={s.text}>
              <p>12</p>
              <span>Este mes</span>
            </div>
          </div>
          <div className={s.item}>
            <Clock color="rgb(249 115 22)" />

            <div className={s.text}>
              <p>{hours}h</p>
              <span>Disponibles</span>
            </div>
          </div>
          <div className={s.item}>
            <Users color="rgb(168 85 247)" />

            <div className={s.text}>
              <p>8.5</p>
              <span>Promedio/día</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
