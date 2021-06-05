import { useState } from "react";

const RefactoredForm = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const objProp = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [objProp]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      setPeople([...people, person]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>

      {people.map((person, index) => {
        return (
          <div key={index}>
            <h1>{person.firstName}</h1>
            <p>{person.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RefactoredForm;
