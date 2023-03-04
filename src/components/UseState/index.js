import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  // console.log(useState("light"));
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const darkMode = () => {
    setTheme("dark");
  };

  const lightMode = () => {
    setTheme("light");
  };

  const counterIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const counterDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={lightMode}>Light</button>
      <button onClick={darkMode}>Dark</button>
      <h1>{count}</h1>
      <button onClick={counterIncrement}>Increment</button>
      <button onClick={counterDecrement}>Decrement</button>
    </div>
  );
};

export default UseState;
