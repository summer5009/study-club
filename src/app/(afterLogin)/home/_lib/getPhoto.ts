import { Photo } from "@/types/Photo";
import { QueryFunction } from "@tanstack/react-query";

export const getPhoto: QueryFunction<Photo, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [_1, photoId] = queryKey;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${photoId}`, {
    next: {
      tags: ["photos", photoId],
    },
  });

  if (!res.ok) throw new Error("Failed to fetch the detail data of photos");

  return res.json();
};
