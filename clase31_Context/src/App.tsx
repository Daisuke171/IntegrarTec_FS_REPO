import "./App.css";
import { useTheme } from "./context/ThemeContext";
import { useDigimonStore } from "./store/digimonStore";
import { useEffect, useState } from "react";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [page, setPage] = useState<"yume" | "digimon">("yume");
  const { digimons, loading, error, fetchDigimons } = useDigimonStore();

  useEffect(() => {
    if (page === "digimon" && digimons.length === 0) {
      fetchDigimons();
    }
  }, [page, fetchDigimons, digimons.length]);

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage("yume");
              }}
            >
              Yume Nikki
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage("digimon");
              }}
            >
              Digimon (Zustand API)
            </a>
          </li>
        </ul>
      </nav>

      <button onClick={toggleTheme} className="theme-toggle">
        Cambiar a {theme === "light" ? "Dark" : "Light"} mode
      </button>

      {page === "yume" && (
        <>
          <h1>Yume nikki</h1>
          <img
            src="https://i.ytimg.com/vi/POmuCCFUQAI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAcQfV_XFDlPywltFHkE9XAE5lIFw"
            alt=""
          />
          <p>
            Yume Nikki (Kikiyama, 2004) is a game about a girl who can’t – or won’t – leave her room. She can only go to bed, to sleep, and to dream. If she has family, friends, a life outside that door, we never see it. It is a game about being alone. I used to think that, anyway. It’s how people normally talk about the game, and I picked up the habit. But I’m not so sure anymore. For one thing, Yume Nikki comes with no mission statement. It’s a “warm-hearted” game, according to one of the only details given by creator Kikiyama. There is no plot to analyse, no explicit narrative to interpret. All we have is the experience of playing it. Ironically, the aspects of Yume Nikki that supposedly make it such a lonely experience are what ultimately force the player to immerse themselves within the game’s fandom. The infinitely looping, empty environments are so difficult to navigate that most every player will have to consult a guide to make it through. The silent NPCs are almost always (including within this essay) referred to by the names given to them by the fans, as are the many, many surreal locations. To understand Yume Nikki - to even have the words to describe it - you have to understand its community.
          </p>
          <a href="https://yumenikki.fandom.com/wiki/Yume_Nikki_Wiki">
            Más info del juego
          </a>
        </>
      )}

      {page === "digimon" && (
        <>
          <h1>Lista de Digimon</h1>
          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}

          <div className="digimon-grid">
            {digimons.slice(0, 20).map((digi) => (
              <div key={digi.name} className="digimon-card">
                <img src={digi.img} alt={digi.name} />
                <h3>{digi.name}</h3>
                <p>Nivel: {digi.level}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
