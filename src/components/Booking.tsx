"use client";

import s from "./Booking.module.scss";
import { Toggle } from "./Toggle";
import { useState } from "react";

export const Booking = () => {
  const [active, setActive] = useState(true);

  return (
    <div className={`${s.main} ${active ? s.active : ""}`}>
      <div className={s.dot} />

      <span>Reserva Online {!active ? "No" : ""} Disponible</span>

      <Toggle
        active={active}
        setActive={() => {
          setActive((c) => !c);
        }}
      />
    </div>
  );
};
