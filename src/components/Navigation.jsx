import { Link, useLocation } from "react-router";
export const Navigation = () => {
  const location = useLocation();

  const currentBook = location.pathname.includes("/baseLevelBook")
    ? "base"
    : location.pathname.includes("/advancedLevelBook")
    ? "advanced"
    : location.pathname.includes("/highLevelBook")
    ? "high"
    : null;
  return (
    <nav>
      <Link to="/">
        <img
          style={{
            width: "150px",
            height: "auto",
            position: "absolute",
            top: "10px",
            left: "30px",
          }}
          src="/src/assets/Logo.png"
          alt=""
        />
      </Link>

      <Link
        className={`navLink ${currentBook === "base" ? "active" : ""}`}
        to="/baseLevelBook/lesson1">
        Базовый уровень
      </Link>

      <Link
        className={`navLink ${currentBook === "advanced" ? "active" : ""}`}
        to="/advancedLevelBook/lesson1">
        Продвинутый уровень
      </Link>

      <Link
        className={`navLink ${currentBook === "high" ? "active" : ""}`}
        to="/highLevelBook/lesson1">
        Высокий уровень
      </Link>

      <img
          style={{
            width: "50px",
            height: "auto",
            position: "fixed",
            bottom: "10px",
            right: "20px",
            zIndex: "100",
            
          }}
          src="/src/assets/LilBro.PNG"
          alt=""
        />
    </nav>
  );
};
