"use client";

import { Trash2 } from "lucide-react";
import { CustomSelect } from "./CustomSelect";
import s from "./BusinessHoursSelector.module.scss";

const generateTimeSlots = (): string[] => {
  return Array.from({ length: 48 }, (_, index) => {
    const hours = Math.floor(index / 2)
      .toString()
      .padStart(2, "0");
    const minutes = index % 2 ? "30" : "00";
    return `${hours}:${minutes}`;
  });
};

export const BusinessHoursSelector = ({ counter, callback }: any) => {
  const options = generateTimeSlots();

  return (
    <div className={s.main}>
      <div className={s.pack}>
        <span>De</span>
        <CustomSelect placeholder="09:00" options={options} setValue={() => {}} />
      </div>
      <div className={s.pack}>
        <span>a</span>
        <CustomSelect placeholder="09:00" options={options} setValue={() => {}} />
      </div>

      {counter > 1 && (
        <button className={s.specialButton} onClick={callback}>
          <Trash2 />
        </button>
      )}
    </div>
  );
};
