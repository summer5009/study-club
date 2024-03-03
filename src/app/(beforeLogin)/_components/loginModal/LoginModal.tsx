"use client";

import React, { useState } from "react";
import styles from "./modal.module.css";
import Link from "next/link";

export default function LoginModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.modal}>
          <Link href="/" className={styles.close}>
            X
          </Link>
          <h4 className={styles.title}>Modal page😊</h4>
        </div>
      </section>
      <section className={styles.dim}></section>
    </>
  );
}
