import { useState } from "react";
import HolaMensaje from "./holamensaje";

const HolaForm = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const userNameChanged = (e) => {
    console.log(e.currentTarget.value);
    setNombre(e.currentTarget.value);
    setShowMessage(false);
  };

  const userAgeChanged = (e) => {
    setEdad(Math.abs(parseInt(e.currentTarget.value)));
    setShowMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() !== "") {
      setShowMessage(true);
    }
  };

  return (
    <>
      <h1>Hola</h1>
      <form action="" className="holaform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nombre"
          required
          className="holainput"
          value={nombre}
          onChange={userNameChanged}
        ></input>
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          required
          className="holainput"
          value={edad}
          onChange={userAgeChanged}
        ></input>
        <button type="submit">Entrar</button>
        {showMessage && (
          <HolaMensaje
            type={edad < 18 ? "denied" : "ok"}
            messagge={
              edad < 18
                ? `Hola ${nombre.trim()}, eres muy joven para usar esta aplicación.`
                : `Bienvenido ${nombre.trim()}, gracias por usar nuestra aplicación.`
            }
          />
        )}
      </form>
    </>
  );
};

export default HolaForm;
