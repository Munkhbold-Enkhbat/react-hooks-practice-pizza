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
      .then(setPizzas)
  }, [])

  const handleEdit = (name, value) => {     
    setChosenPizza({
      ...chosenPizza,
      [name]: value
    })
  }  

  const handleCustomize = (foundPizza) => {
    const updatedPizzas = pizzas.map(pizza => {
      return pizza.id === foundPizza.id ? foundPizza : pizza
    })
    setPizzas(updatedPizzas)
    setChosenPizza(foundPizza)
  } 

  return (
    <>
      <Header />
      <PizzaForm handleEdit={handleEdit} pizza={chosenPizza} handleCustomize={handleCustomize}/>
      <PizzaList pizzas={pizzas} setChosenPizza={setChosenPizza}/>
    </>
  );
}

export default App;
