import { GetStaticProps } from "next";
import { requestPeople } from "../swapi/requestPeople";
import { Person } from "../swapi/requestPerson";

type Props = {
  people: Person[];
};

export default function PersonPage({ people }: Props) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.name}>
          {person.id} : {person.name}
        </li>
      ))}
    </ul>
  );
}

// This function gets called at build time
export async function getStaticProps(): Promise<
  ReturnType<GetStaticProps<Props>>
> {
  // Call an external API endpoint to get posts
  const people = await requestPeople(10);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      people,
    },
  };
}
