"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { Photo as IPhoto } from "@/types/Photo";
import { getPhoto } from "../_lib/getPhoto";

import Photo from "./Photo";

type Props = {
  photoId: string;
};
export default function PhotoDetail({ photoId }: Props) {
  const { data: photo, error } = useQuery<IPhoto, Object, IPhoto[], [_1: string, _2: string]>({
    queryKey: ["photos", photoId],
    queryFn: getPhoto,
    staleTime: 1 * 60 * 1000, // mins * secs * milliSecs
    gcTime: 2 * 60 * 1000,
  });

  if (!photo) return null;
  return (
    <>
      <Photo photo={photo} />
    </>
  );
}
