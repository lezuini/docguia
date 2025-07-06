"use client";

import Link from "next/link";
import s from "./BigButton.module.scss";

interface Props {
  icon: any;
  text: string;
  href?: string;
  callback?: any;
}

export const BigButton = ({ icon, text, href = "", callback }: Props) => {
  return !callback ? (
    <Link className={s.main} href={href}>
      {icon}

      <span>{text}</span>
    </Link>
  ) : (
    <button onClick={callback} className={s.main}>
      {icon}

      <span>{text}</span>
    </button>
  );
};
