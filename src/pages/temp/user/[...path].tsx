import { useRouter } from "next/router";

export default function CommentPage() {
  const router = useRouter();
  const path = router.query.path as string[];

  console.log("RErender!");

  if (!router.isReady) {
    return (
      <>
        <h1>아직 path 가 없소...</h1>
      </>
    );
  }

  return (
    <>
      <h1>없다 페이지 : {path.join(",")} 뒤로 돌아가시오.</h1>
    </>
  );
}
