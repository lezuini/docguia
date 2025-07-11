import Link from "next/link";
import s from "./Button.module.scss";

interface Props {
  icon: any;
  text: string;
  href?: string;
  callback?: any;
}

export const Button = ({ icon, text, href = "", callback }: Props) => {
  return callback ? (
    <button className={s.main} onClick={callback} type="button">
      {icon}

      <span>{text}</span>
    </button>
  ) : (
    <Link href={href} className={s.main} type="button">
      {icon}

      <span>{text}</span>
    </Link>
  );
};
