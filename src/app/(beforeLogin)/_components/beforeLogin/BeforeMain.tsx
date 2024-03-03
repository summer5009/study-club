import React from "react";
import styles from "./beforeLogin.module.css";
import Link from "next/link";

export default function BeforeMain() {
  return (
    <section className={styles.container}>
      <Link href="/login">Login</Link>
    </section>
  );
}
