import { useRouter } from "next/router";

export default function CommentPage() {
  const router = useRouter();
  const name = router.query.name;

  return (
    <>
      <h1>여기는 {name}의 프로필 입니다.</h1>
    </>
  );
}
