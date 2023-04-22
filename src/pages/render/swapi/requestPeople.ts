import { Person, requestPerson } from "./requestPerson";

export async function requestPeople(count: number): Promise<Person[]> {
  const people = [];

  for (let i = 1; i <= count; i++) {
    const person = await requestPerson(i);

    people.push(person);
  }

  return people;
}
