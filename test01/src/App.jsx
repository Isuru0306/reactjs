import { Car } from "./components/car/Car";
import { Greeting } from "./components/greeting/Greeting";
import "./global.css";

export function App() {
  return (
    <>
      <input type="text" onChange={console.log("on change")} />
    </>
  );
}
