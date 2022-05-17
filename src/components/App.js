import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [chosenPizza, setChosenPizza] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(res => res.json())
      .then(pizzaData => {
        console.table(pizzaData);
        setPizzas(pizzaData)
      })
  }, [])

  const handleEdit = (id) => {    
    const foundPizza = pizzas.find(pizza => pizza.id === id)
    setChosenPizza(foundPizza)    
  }  

  console.log('chosenPizza:', chosenPizza)

  return (
    <>
      <Header />
      <PizzaForm chosenPizza={chosenPizza} setChosenPizza={setChosenPizza}/>
      <PizzaList pizzas={pizzas} handleEdit={handleEdit}/>
    </>
  );
}

export default App;
