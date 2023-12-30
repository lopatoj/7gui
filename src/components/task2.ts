import m from "mithril";
import "~/styles.css";

import Temperatures from "~/models/task2";

const Task2: m.Component = {
  view: () => {
    return m(
      "div.task",
      m("p", "Task 2: Temperature Converter"),
      m(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "row",
            gap: ".25rem",
          },
        },
        [
          m("input", {
            type: "text",
            inputMode: "decimal",
            value: Temperatures.cel,
            oninput: (e: InputEvent) => {
              if (e.target instanceof HTMLInputElement)
                Temperatures.setFah(e.target.value);
            },
          }),
          m("p", "Celcius = "),
          m("input", {
            type: "text",
            inputMode: "decimal",
            value: Temperatures.fah,
            oninput: (e: InputEvent) => {
              if (e.target instanceof HTMLInputElement)
                Temperatures.setCel(e.target.value);
            },
          }),
          m("p", "Fahrenheit"),
        ]
      )
    );
  },
};

export default Task2;
