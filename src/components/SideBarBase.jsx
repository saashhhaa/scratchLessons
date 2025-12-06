import { Link, useLocation } from "react-router";

export const SideBarBase = () => {
    const location = useLocation(); 
    const currentLessonId = location.pathname.split("/").pop(); 

    const lessons = [
      { id: "lesson1", title: "Урок 1" },
      { id: "lesson2", title: "Урок 2" },
      { id: "lesson3", title: "Урок 3" },
      { id: "lesson4", title: "Урок 4" },
      { id: "lesson5", title: "Урок 5" },
      { id: "lesson6", title: "Урок 6" },
      { id: "lesson7", title: "Урок 7. Контрольный" },
      // { id: "lesson8", title: "Урок 8" },
      // { id: "lesson9", title: "Урок 9" },
      // { id: "lesson10", title: "Урок 10" },
      // { id: "lesson11", title: "Урок 11" },
      // { id: "lesson12", title: "Урок 12" },
      // { id: "lesson13", title: "Урок 13" },
    ];

    return (
        <div className="sideBar">
            {lessons.map((lesson) => (
                <div
                    className={`sideLesson ${currentLessonId === lesson.id ? "activeLesson" : ""}`}
                    key={lesson.id}
                >
                    <Link className="sideLessonLink" to={`/baseLevelBook/${lesson.id}`}>
                        {lesson.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};
