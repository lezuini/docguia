import { useEffect, useState } from "react";
import s from "./DayScheduleCard.module.scss";
import { Toggle } from "./Toggle";
import { Button } from "./Button";
import { Clock, Plus } from "lucide-react";
import { BusinessHoursSelector } from "./BusinessHoursSelector";

interface Props {
  day: string;
  abrev: string;
  startsActive?: boolean;
}

export const DayScheduleCard = ({ day, abrev, startsActive }: Props) => {
  const [active, setActive] = useState(startsActive ?? false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (!active) {
      setCounter(1);
    }
  }, [active]);

  return (
    <div className={s.main}>
      <div className={s.top}>
        <div className={s.left}>
          <Toggle active={active} setActive={setActive} />

          <div className={s.spans}>
            <span>{day}</span>
            <span className="text-sm text-gray-500">{abrev}</span>
          </div>
        </div>

        <div className={s.buttons}>
          <Button
            icon={<Plus />}
            text="Agregar horario"
            callback={() => {
              if (active) {
                setCounter((c) => c + 1);
              }
            }}
          />
        </div>
      </div>

      {active ? (
        <div className={s.container}>
          {Array.from({ length: counter }, (_, i) => i).map((num, i) => {
            return (
              <BusinessHoursSelector
                key={i}
                counter={counter}
                callback={() => {
                  if (counter > 1) {
                    setCounter((c) => c - 1);
                  }
                }}
              />
            );
          })}
        </div>
      ) : (
        <div className={s.notAvailable}>
          <Clock className="text-gray-500 opacity-50" />

          <p>No disponible este día</p>
        </div>
      )}
    </div>
  );
};
