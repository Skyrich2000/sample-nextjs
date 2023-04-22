const IndexPage = () => (
  <div>
    <h1>Environment Variables</h1>
    분석한다 다음 아이디 : {process.env.NEXT_PUBLIC_ANALYTICS_ID}
  </div>
);

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
  const host = process.env.HOST;
  const port = process.env.PORT;

  if (`${host}:${port}` !== "api.42world.kr:8888") {
    throw new Error(
      `Expected HOST and PORT to be "api.42world.kr:8888", but got "${host}:${port}"`
    );
  }

  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`

  return { props: {} };
}

export default IndexPage;
