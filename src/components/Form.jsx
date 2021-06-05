import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //grab first name, email
    //create a person object
    //push person into people array
    if (email && firstName) {
      const person = { firstName: firstName, email: email };

      setPeople([...people, person]);
      setFirstName("");
      setEmail("");
      console.log(people);
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default Form;
