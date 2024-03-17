"use client";

import styles from "./css/photo.module.css";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { Photo as IPhoto } from "@/types/Photo";
import { getPhotos } from "../_lib/getPhotos";
import Photo from "./Photo";

export default function PhotoContainer() {
  const { data: photos } = useQuery<IPhoto[]>({ queryKey: ["photos"], queryFn: getPhotos });

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
