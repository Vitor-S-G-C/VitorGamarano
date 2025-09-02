// src/components/AnimatedText.tsx
import React from "react";
import styles from "./AnimatedText.module.css";

const COLORS = ["#F2385A", "#F5A503", "#E9F1DF", "#56D9CD", "#3AA1BF"];

const AnimatedText: React.FC = () => {
  return (
    <svg viewBox="0 0 600 300" className={styles.svg}>
      <defs>
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em">
            Vitor.S.G.C
          </text>
        </symbol>
      </defs>
      {COLORS.map((color, index) => (
        <use
          key={index}
          href="#s-text"
          className={styles.text}
          style={{
            stroke: color,
            animationDelay: `-${(6 / COLORS.length) * (index + 1)}s`,
          }}
        />
      ))}
    </svg>
  );
};

export default AnimatedText;
