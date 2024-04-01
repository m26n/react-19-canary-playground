/// <reference types="react/canary" />
import { use } from 'react';

export function UseHook() {
  const person = use(fetchPerson());
  return (
    <div className="flex align-center gap-x-2 after:content-['✔'] after:inline-flex after:items-center">
      <h1 className="text-3xl font-bold">{person.name}</h1>
      <p className="inline-flex items-center">Age: {person.age}</p>
    </div>
  );
}

async function fetchPerson() {
  await wait(500);
  const person = {
    age: 32,
    name: 'Maurice',
  };

  return person;
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
