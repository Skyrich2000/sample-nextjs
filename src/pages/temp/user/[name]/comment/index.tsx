import { useRouter } from "next/router";

export default function CommentPage() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <h1>여기는 {name}가 쓴 댓글목록 입니다.</h1>
    </>
  );
}
