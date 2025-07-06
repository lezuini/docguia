import Link from "next/link";
import s from "./QuickActionItem.module.scss";

interface Props {
  icon: any;
  text: string;
  href: string;
}

export const QuickActionItem = ({ icon, text, href }: Props) => {
  return (
    <Link href={href} className={s.main}>
      {icon}

      <span>{text}</span>
    </Link>
  );
};
