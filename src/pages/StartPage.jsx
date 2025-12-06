import { Link } from "react-router";

export const StartPage = () => {
  return (
    <div className="container">
      <div className="startPage">
        <div className="sprite"></div>
        <h1>Учебник по Scratch</h1>
        <p>твори, играй, развивайся!</p>
        <Link className="button" to="/baseLevelBook/lesson1">
          <p>Старт</p>
          <img
            style={{ width: " auto", height: "20px" }}
            src="/src/assets/GreenFlag.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
