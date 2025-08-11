import { useState } from "react";
import { useTimer } from "../../hooks/use-timer";

export default function TimerComponent() {
  const { seconds, isRunning, pause, resume, reset, setTime } = useTimer(
    10,
    () => console.log("Terminado")
  );
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    setTime(timer);
    resume();
  };

  return (
    <div>
      <h1>Tiempo: {seconds}s</h1>
      {isRunning ? (
        <button onClick={pause}>Pausar</button>
      ) : (
        <button onClick={resume}>Reanudar</button>
      )}
      <button onClick={reset}>Reset</button>
      <br />
      <input
        type="number"
        value={timer}
        min={0}
        onChange={(e) => setTimer(Number(e.target.value))}
      />
      <button onClick={startTimer}>Iniciar</button>
    </div>
  );
}
