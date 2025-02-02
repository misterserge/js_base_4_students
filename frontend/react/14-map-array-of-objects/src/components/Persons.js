import Person from './Person';
export default function Persons({persons}) {
//   console.log(persons);
  return <div>{persons.map((persons) => {
    return <Person key={persons.id} {...persons} />;
  })}</div>;
}
