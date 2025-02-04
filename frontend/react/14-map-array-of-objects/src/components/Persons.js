import Person from './Person';
export default function Persons({ persons }) {
  //   console.log(persons);
  return (
    <div className="cards">
      {persons.map((persons) => {
        return <Person key={persons.id} {...persons} />;
      })}
    </div>
  );
}
