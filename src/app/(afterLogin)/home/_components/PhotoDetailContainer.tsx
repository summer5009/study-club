import React from "react";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import { getPhoto } from "../_lib/getPhoto";

import PhotoDetail from "./PhotoDetail";

type Props = {
  photoId: string;
};
export default async function PhotoDetailContainer({ photoId }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["photos", photoId], queryFn: getPhoto });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div>PhotoId ➡️ {photoId}</div>
      <PhotoDetail photoId={photoId} />
    </HydrationBoundary>
  );
}
