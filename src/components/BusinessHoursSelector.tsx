"use client";

import { Trash2 } from "lucide-react";
import { CustomSelect } from "./CustomSelect";
import s from "./BusinessHoursSelector.module.scss";
import { useState } from "react";

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
  const [value, setValue] = useState({ first: "09:00", second: "17:00" });
  const options = generateTimeSlots();

  return (
    <div className={s.main}>
      <div className={s.pack}>
        <span>De</span>
        <CustomSelect
          placeholder="09:00"
          options={options}
          value={value.first}
          setValue={(newValue: string) =>
            setValue((c) => {
              return { ...c, first: newValue };
            })
          }
        />
      </div>
      <div className={s.pack}>
        <span>a</span>
        <CustomSelect
          placeholder="17:00"
          options={options}
          value={value.second}
          setValue={(newValue: string) =>
            setValue((c) => {
              return { ...c, second: newValue };
            })
          }
        />
      </div>

      {counter > 1 && (
        <button className={s.specialButton} onClick={callback}>
          <Trash2 />
        </button>
      )}
    </div>
  );
};
