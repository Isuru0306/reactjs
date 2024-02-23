import css from "./style.module.css";
import copyIcon from "../../assets/copy-paste.svg";
export function PasswordGeneratorFooter() {
  return (
    <div className={css.root}>
      <div>Super Password</div>{" "}
      <img className={css.icon} src={copyIcon} alt="Copy Paste" />
    </div>
  );
}
