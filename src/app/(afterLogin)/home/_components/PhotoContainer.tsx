"use client";

import styles from "./css/photo.module.css";

import React, { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";

import { Photo as IPhoto } from "@/types/Photo";
import { getPhotos } from "../_lib/getPhotos";

import PhotoItem from "./PhotoItem";

export default function PhotoContainer() {
  /**
   * staleTime: fresh → stale로 가는 시간 설정
   * staleTime: Infinity // 항상 fresh 상태
   * staleTime은 gcTime보다 짧아야 한다.
   * gcTime은 staleTime보다 길어야 한다.
   *
   * initialData: 초기 데이터 있는 경우, 초기데이터로 리셋
   * initialData: 초기 데이터 없는 경우, 데이터 새로 fetch
   * */
  const { data: photos } = useQuery<IPhoto[]>({
    queryKey: ["photos"],
    queryFn: getPhotos,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000, // gcTime default 5min
    // initialData: () => [],
  });

  return (
    <>
      <section className={styles.cont}>
        {photos &&
          photos.length > 0 &&
          photos.map((photo: IPhoto) => {
            return (
              <Fragment key={`photo_list_${photo.id}`}>
                <PhotoItem photo={photo} />
              </Fragment>
            );
          })}
      </section>
    </>
  );
}
