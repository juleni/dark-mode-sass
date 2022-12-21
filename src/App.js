import { useState } from "react";
import "./styles/_main.scss";

function App() {
  const THEME = ["light", "dark"];
  const [theme, setTheme] = useState(THEME[0]);

  function handleSetTheme() {
    console.log("handleSetTheme");
    console.log(theme);
    if (theme === THEME[0]) {
      setTheme(THEME[1]);
    } else setTheme(THEME[0]);
  }
  return (
    <div className={theme}>
      <div className="background flex">
        <h1 className="text">Dark Mode</h1>

        <button className="button" onClick={() => handleSetTheme()}>
          Switch theme to {theme === THEME[0] ? THEME[1] : THEME[0]}
        </button>
      </div>
    </div>
  );
}

export default App;
