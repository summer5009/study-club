import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";
import { getPhotos } from "../_lib/getPhotos";
import PhotoContainer from "./PhotoContainer";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["photos"], queryFn: getPhotos });
  const dehydratedState = dehydrate(queryClient);

  // queryClient.getQueryData(["photos"]); // 쿼리 데이터 가져올 때
  // queryClient.setQueryData(["photos"], 데이터); // 쿼리 테이터 수정할 때

  return (
    <main>
      <HydrationBoundary state={dehydratedState}>
        <PhotoContainer />
      </HydrationBoundary>
    </main>
  );
}
