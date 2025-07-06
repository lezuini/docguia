"use client";

import s from "./Input.module.scss";

interface Props {
  label?: string;
  value: string;
  placeholder: string;
  setValue: any;
  helperText?: string;
}

export const Input = ({ label, value, placeholder, setValue, helperText }: Props) => {
  return (
    <div className={s.main}>
      <label>
        {label && <span>{label}</span>}

        {!helperText ? (
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        ) : (
          <>
            <textarea
              placeholder={placeholder}
              rows={3}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />

            <p>{helperText}</p>
          </>
        )}
      </label>
    </div>
  );
};
