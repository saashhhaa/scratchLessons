import { Lesson1 } from "../components/lessonsBase/Lesson1";
import { Lesson2 } from "../components/lessonsBase/Lesson2";
import { Lesson3 } from "../components/lessonsBase/Lesson3";
import { Lesson4 } from "../components/lessonsBase/Lesson4";
import { Lesson5 } from "../components/lessonsBase/Lesson5";
import { Lesson6 } from "../components/lessonsBase/Lesson6";
import { Lesson7 } from "../components/lessonsBase/Lesson7";
import { Navigation } from "../components/Navigation";
import { SideBarBase } from "../components/SideBarBase";
import { useParams } from "react-router-dom";

export const BaseLevelBook = () => {
const { lessonId } = useParams();

  const lessonsMap = {
    lesson1: <Lesson1 />,
    lesson2: <Lesson2 />,
    lesson3: <Lesson3 />,
    lesson4: <Lesson4 />,
    lesson5: <Lesson5 />,
    lesson6: <Lesson6 />,
    lesson7: <Lesson7 />,
  };
  return (
    <div className="flexContainer">
      <Navigation />
      <SideBarBase />
      <div className="lessonContent">{lessonsMap[lessonId] || "Такого урока нет"}</div>
       
    </div>
  );
};
