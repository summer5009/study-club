import { revalidateTag, revalidatePath } from "next/cache";

export const getPhotos = async () => {
  // https://jsonplaceholder.typicode.com/photos
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`, {
    next: {
      tags: ["photos"], // react cache아니라 server쪽 cache
    },
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // revalidateTag("photos"); // cache 초기화하기 위해 사용
  // revalidatePath("/home") // home 폴더에 관한 모든 데이터를 새로고침

  return res.json();
};
