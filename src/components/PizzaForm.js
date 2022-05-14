import React from "react";

function PizzaForm({ chosenPizza, setChosenPizza }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const createdPizza = {
      topping: chosenPizza.topping,
      size: chosenPizza.size,
      vegetarian: chosenPizza.vegetarian
    }
    console.log("Created pizza:", createdPizza);

  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setChosenPizza({...chosenPizza, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={chosenPizza.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleChange} value={chosenPizza.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" onChange={handleChange} value={chosenPizza.vegetarian}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={chosenPizza.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={chosenPizza.vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
