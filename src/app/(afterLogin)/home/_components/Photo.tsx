import React from "react";

import styles from "./css/photo.module.css";

import Image from "next/image";
import Link from "next/link";

import { Photo } from "@/types/Photo";

type Props = {
  photo: Photo;
};
export default function Photo({ photo }: Props) {
  const { albumId, id, title, url, thumbnailUrl } = photo;

  return (
    <ul key={`album_${id}_${albumId}`} className={styles.photo}>
      <Link href={url} target="_blank">
        <Image src={thumbnailUrl} width={150} height={150} alt={`album_${title}`} />
      </Link>
      <li>{title}</li>
    </ul>
  );
}
