import { useState } from "react";
import HolaMensaje from "./holamensaje";

const HolaForm = () => {
  const [formData, setFormData] = useState({ nombre: "", edad: 0 });
  const [showMessage, setShowMessage] = useState(false);

  const userNameChanged = (e) => {
    console.log(e.currentTarget.value);
    setFormData({ ...formData, nombre: e.currentTarget.value });
    setShowMessage(false);
  };

  const userAgeChanged = (e) => {
    setFormData({
      ...formData,
      edad: Math.abs(parseInt(e.currentTarget.value)),
    });
    setShowMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre.trim() !== "") {
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
          value={formData.nombre}
          onChange={userNameChanged}
        ></input>
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          required
          className="holainput"
          value={formData.edad}
          onChange={userAgeChanged}
        ></input>
        <button type="submit">Entrar</button>
        {showMessage && (
          <HolaMensaje
            type={formData.edad < 18 ? "denied" : "ok"}
            messagge={
              formData.edad < 18
                ? `Hola ${formData.nombre.trim()}, eres muy joven para usar esta aplicación.`
                : `Bienvenido ${formData.nombre.trim()}, gracias por usar nuestra aplicación.`
            }
          />
        )}
      </form>
    </>
  );
};

export default HolaForm;
