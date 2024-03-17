"use client";

import styles from "./css/photo.module.css";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { Photo as IPhoto } from "@/types/Photo";
import { getPhotos } from "../_lib/getPhotos";
import Photo from "./Photo";

export default function PhotoContainer() {
  /**
   * staleTime: fresh → stale로 가는 시간 설정
   * staleTime: Infinity // 항상 fresh 상태
   * */
  const { data: photos } = useQuery<IPhoto[]>({ queryKey: ["photos"], queryFn: getPhotos, staleTime: 60 * 1000 });

  return (
    <section className={styles.cont}>
      {photos &&
        photos.map((photo: IPhoto) => {
          return (
            <>
              <Photo photo={photo} />
            </>
          );
        })}
    </section>
  );
}
