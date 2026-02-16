import { ReactNode } from "react";
import styles from "./CRTEffect.module.css";

interface CRTEffectProps {
  children?: ReactNode;
}

export default function CRTEffect({ children }: CRTEffectProps) {
  return (
    <div className={`${styles.screen} relative min-h-screen`}>
      {children}
      <div className={styles.overlay} />
    </div>
  );
}
