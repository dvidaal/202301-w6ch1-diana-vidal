const Form = (): JSX.Element => {
  return (
    <div className="container-form">
      <input
        className="container-form__form-input"
        placeholder="Create Task"
        aria-label="Field to create a task"
      />

      <button type="submit" aria-label="Create button" className="submit-form">
        Create
      </button>
    </div>
  );
};

export default Form;
