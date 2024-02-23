import { PasswordGeneratorHeader } from "../passwordGeneratorHeader/PasswordGeneratorHeader";
import { PasswordGeneratorBody } from "../passwordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "../passwordGeneratorFooter/PasswordGeneratorFooter";

import css from "./style.module.css";

export function PasswordGeneratorCard() {
  return (
    <div className={css.root}>
      <div className={css.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody />
      </div>
      <PasswordGeneratorFooter />
    </div>
  );
}
