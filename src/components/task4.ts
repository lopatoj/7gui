import m from "mithril";
import "~/styles.css";
import Task from "./task";

import Timer from "~/models/task4";

const Task4: m.Component = {
  oninit: () => {
    Timer.reset();
  },
  view: () => {
    return m(
      Task,
      { title: "Task 4: Timer" },
      m(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            gap: ".5rem",
          },
        },
        [
          m(
            "p",
            {
              style: {
                gridColumn: "1",
              },
            },
            "Elapsed time:"
          ),
          m("progress", {
            max: Timer.duration,
            value: Timer.time,
            style: {
              gridColumn: "2",
              width: "100%",
              margin: "auto",
            },
          }),
          m(
            "p",
            {
              style: {
                gridColumn: "2",
              },
            },
            Timer.time.toFixed(1) + "s"
          ),
          m("p", "Duration: " + Timer.duration + "s"),
          m("input", {
            type: "range",
            min: "1",
            max: "30",
            defaultValue: "10",
            oninput: (e: InputEvent) => {
              if (e.target instanceof HTMLInputElement)
                Timer.duration = parseFloat(e.target.value);
            },
          }),
          m(
            "button",
            {
              onclick: Timer.reset,
              style: {
                gridColumn: "1 / span 2",
              },
            },
            "Reset"
          ),
        ]
      )
    );
  },
};

export default Task4;
