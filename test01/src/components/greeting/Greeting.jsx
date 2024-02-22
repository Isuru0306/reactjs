import myStyle from "./style.module.css";

export function Greeting(props) {
  return <p className={`${myStyle.box} box`}>Test Greeting</p>;
}
