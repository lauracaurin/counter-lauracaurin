const Buttons = ({ handleDecrement, handleIncrement, handleReset, getButtonClass }) => {
  return (
    <div className="buttons-section-container">
      <button className={getButtonClass("decrement")} onClick={handleDecrement}>
        Decrementar
      </button>
      <button className={getButtonClass("increment")} onClick={handleIncrement}>
        Incrementar
      </button>
      <button className={getButtonClass("reset")} onClick={handleReset}>
        Reiniciar
      </button>
    </div>
  );
};

export default Buttons;