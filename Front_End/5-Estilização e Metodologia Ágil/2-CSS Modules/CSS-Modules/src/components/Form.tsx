import sytle from './form.module.css';

function Form() {
  return (
    <div className={ sytle.container }>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
      </div>
      <button className="verified" type="submit">
        Confirmar
      </button>
    </div>
  );
}
export default Form;
