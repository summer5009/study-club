import PhotoDetailContainer from "../../home/_components/PhotoDetailContainer";

type Props = {
  params: { photoId: string };
};
export default function PhotoDetailPage({ params: { photoId } }: Props) {
  return <PhotoDetailContainer photoId={photoId} />;
}
