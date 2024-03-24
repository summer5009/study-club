"use client";

import styles from "./css/photoDetail.module.css";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Photo as IPhoto } from "@/types/Photo";
import { useRouter } from "next/navigation";

type Props = {
  photo: IPhoto[];
};
export default function Photo({ photo }: Props) {
  console.log("🌱", photo);
  const { push } = useRouter();
  const { title, url, thumbnailUrl } = photo[0];

  const goMain = () => push("/home");

  return (
    <section className={styles.wrap}>
      <ul className={styles.cont}>
        <li>
          <h3>Photo title ➡️ {title}</h3>
        </li>
        <li>
          <div className={styles.imageCont}>
            <Link href={url} target="_blank">
              <Image src={thumbnailUrl} width={500} height={500} alt={`album_${title}`} />
            </Link>
          </div>
        </li>
      </ul>
      <div>
        <button type="button" className={styles.button} onClick={goMain}>
          Home으로 가기
        </button>
      </div>
    </section>
  );
}
