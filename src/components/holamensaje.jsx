import ok from "../img/ok.png";
import denied from "../img/denied.png";

const HolaMensaje = ({ type, messagge }) => {
  return (
    <div className="holamensaje-container">
      {type === "ok" && (
        <img src={ok} alt="ok" className="holamensaje-icon"></img>
      )}
      {type === "denied" && (
        <img src={denied} alt="error" className="holamensaje-icon"></img>
      )}
      <p>{messagge}</p>
    </div>
  );
};

export default HolaMensaje;
