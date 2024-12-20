import { RiArrowRightSLine } from "@remixicon/react";
import { NavLink } from "react-router-dom";
import styles from "./link-card.module.css";

interface LinkCardProps {
  link: string;
  label: string;
  subLabel: string;
}

export default function LinkCard({ link, label, subLabel }: LinkCardProps) {
  return (
    <NavLink to={link} className={styles.character}>
      <div className={styles.characterName}>
        <h4>{label}</h4>
        <p>{subLabel}</p>
      </div>
      <RiArrowRightSLine size={24} color="var(--text-color)" />
    </NavLink>
  );
}
