import { FormEvent } from "react";
import style from "./Form.module.css";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
  };
  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className={style["form-label"]}>
          Name
        </label>
        <input type="text" className={style["form-control"]} id="name" />
      </div>
      <div>
        <label htmlFor="age" className={style["form-label"]}>
          Age
        </label>
        <input type="number" className={style["form-control"]} id="age" />
      </div>
      <button
        type="submit"
        className={`${style["btn"]} ${style["btn-primary"]}`}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
