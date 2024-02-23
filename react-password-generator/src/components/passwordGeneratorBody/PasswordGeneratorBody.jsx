import css from "./style.module.css";
export function PasswordGeneratorBody() {
  return (
    <form className={css.roor}>
      <div className={css.grid_container}>
        <div className={css.grid_item}>
          Size
          <select name="size" id="size" defaultValue={15}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className={css.grid_item}>
          Uppercase
          <input type="checkbox" defaultChecked />
        </div>
        <div className={css.grid_item}>
          Numbers
          <input type="checkbox" defaultChecked />
        </div>
        <div className={css.grid_item}>
          Specials
          <input type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={css.btn_container}>
        <button className={css.btn_generate}>GENERATE</button>
      </div>
    </form>
  );
}
