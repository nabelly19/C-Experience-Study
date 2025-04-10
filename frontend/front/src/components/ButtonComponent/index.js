import React from "react";

import styles from "./style.module.css";

export default function ButtonComponent({
    onClick,
    text,
    variant = "primario", // primario | secundario | sucesso | perigo | custom
    className = "",
  }) {
    return (
      <button
        onClick={onClick}
        className={`${styles.botao} ${styles[variant]} ${className}`}
      >
        {text}
      </button>
    );
  }