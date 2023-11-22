function Form() {
  return (
    <>
      <div className="aside">
        <p>test</p>
      </div>
      <div className="container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Insira o seu login"
            aria-label="Insira o seu login"
            aria-describedby="basic-addon2"
          />
          <span
            className="input-group-text"
            id="basic-addon2"
          >
            @example.com
          </span>
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Insira sua senha"
            aria-label="Insira sua senha"
            aria-describedby="basic-addon2"
          />
        </div>
        <button
          className="verified"
          type="submit"
        >
          Confirmar
        </button>
      </div>
    </>
  );
}
export default Form;
