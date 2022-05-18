import React from "react";

function PizzaForm({ id, topping, size, vegetarian, setChosenPizza, handleCustomize }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topping,
        size,
        vegetarian
      })
    }).then(res => res.json())
      .then(pizzasData => handleCustomize(pizzasData))

  }

  const handleChange = e => setChosenPizza(prevPizza => {
    return {
      ...prevPizza, [e.target.name]: e.target.value
    }
  })
  const handleCheck = e => setChosenPizza(prevPizza => {
    return {
      ...prevPizza, [e.target.name]: e.target.value === 'Vegetarian' ? true : false
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleChange} value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleCheck}
              checked={vegetarian ? true : false}              
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"              
              onChange={handleCheck}
              checked={vegetarian ? false : true}
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
