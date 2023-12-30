import m from "mithril";
import "~/styles.css";
import Task from "./task";

import Timer from "~/models/task4";

const Task4: m.Component = {
  oninit: () => {
    Timer.reset();
  },
  view: () => {
    return m(Task, { title: "Task 4: Timer" }, [
      m("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          gap: ".25rem",
        },
      },[
        m("p", "Elapsed time:"),
        m("div.", {
          style: {
            backgroundColor: "black",
            color: "white",
            padding: "0.25rem",
            borderRadius: "0.25rem",
          },
        }, m("div", {style: {backgroundColor: "black", height: "1rem", width: `${Timer.fraction}%`}})),
      ]),
      m("div", [
        m("input", {
          type: "range",
          min: "0",
          max: "100",
          oninput: (e: InputEvent) => {
            if (e.target instanceof HTMLInputElement)
              Timer.duration = parseFloat(e.target.value);
          },
        }),
      ]),
      m("button", { onclick: Timer.reset }, "Reset"),
    ]);
  },
};

export default Task4;