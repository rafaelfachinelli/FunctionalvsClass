import React, { useState } from "react";

export default function SampleFunctionalComponent() {
  const [message, setMessage] = useState("Mensagem padrão");

  const alertMessage = () => {
    setTimeout(() => {
      alert(message);
    }, 3000);
  };

  const handleSwitch = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <h1>Componente Funcional</h1>
      <select onChange={handleSwitch}>
        <option value="Oi! 😄">Oi</option>
        <option value="Tchau! 👋🏼">Tchau</option>
      </select>
      <br />
      <input type="button" value="Alerta" onClick={alertMessage} />
    </>
  );
}
