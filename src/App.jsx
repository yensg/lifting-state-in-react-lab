import React, { useState } from "react";
import "./App.css";
import IngredientList from "./Components/IngredientList/IngredientList";
import BurgerStack from "./Components/BurgerStack/BurgerStack";

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  // IngredientList Component with addFn
  const [ingredient, setIngredient] = useState(availableIngredients);

  const [stack, setStack] = useState([]);

  //for Component IngredientList
  const addToStack = (selectedIngredient) => {
    setStack((prevState) => {
      return [
        ...prevState,
        ...ingredient.filter((eachIngredient) => {
          return eachIngredient.name === selectedIngredient;
        }),
      ];
    });
  };

  // BurgerStack Component with removeFn
  const removeFromStack = (selectedStack) => {
    console.log(selectedStack);
    setStack((prevState) => [...prevState.toSpliced(selectedStack, 1)]);
  }; // this works better

  // const removeFromStack = (selectedStack) => {
  //   console.log(selectedStack);
  //   setStack((prevState) => [
  //     ...prevState.toSpliced(
  //       prevState.findIndex((eachStack) => {
  //         eachStack.name === selectedStack;
  //       })
  //     ),
  //   ]);
  // };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <div className="container">
        <ul>
          {stack.length === 0 && "No Ingredient!"}
          {stack.map((stack, id) => {
            return (
              <BurgerStack
                removeFromStackFn={removeFromStack}
                name={stack.name}
                color={stack.color}
                id={id}
                key={id}
              />
            );
          })}
        </ul>
        <ul>
          {ingredient.map((ingredient, id) => {
            return (
              <IngredientList
                addToStackFn={addToStack}
                name={ingredient.name}
                color={ingredient.color}
                key={id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default App;
