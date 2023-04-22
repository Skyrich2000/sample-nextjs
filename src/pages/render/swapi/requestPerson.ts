export async function requestPerson(id: number): Promise<Person> {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const person = await res.json();

  return {
    id,
    name: person.name,
    height: person.height,
    gender: person.gender,
  };
}

export type Person = {
  id: number;
  name: string;
  height: string;
  gender: string;
};
