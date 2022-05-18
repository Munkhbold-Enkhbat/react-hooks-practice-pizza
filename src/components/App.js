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
        setPizzas(pizzaData)
      })
  }, [])

  console.table(pizzas);

  const handleEdit = (id) => {    
    const foundPizza = pizzas.find(pizza => pizza.id === id)
    setChosenPizza(foundPizza)    
  }  

  const handleCustomize = (foundPizza) => {
    const updatedPizzas = pizzas.map(pizza => {
      return pizza.id === foundPizza.id ? foundPizza : pizza
    })
    setPizzas(updatedPizzas)
  } 

  return (
    <>
      <Header />
      <PizzaForm {...chosenPizza} setChosenPizza={setChosenPizza} handleCustomize={handleCustomize}/>
      <PizzaList pizzas={pizzas} handleEdit={handleEdit}/>
    </>
  );
}

export default App;
