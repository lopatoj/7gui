import m from "mithril";
import "~/styles.css";

import Flight from "~/models/task3";

const Task3: m.Component = {
  view: () => {
    return m("div.task", [
      m("p", "Task 3: Flight Booker"),
      m(
        "div.task",
        [
          m(
            "select",
            {
              onchange: (e: InputEvent) => {
                if (e.target instanceof HTMLSelectElement)
                  Flight.type = e.target.value as "one-way" | "return";
              },
            },
            [
              m("option", { value: "one-way" }, "One-way"),
              m("option", { value: "return" }, "Return"),
            ]
          ),
          m("input", {
            type: "date",
            value: Flight.leave.toISOString().split("T")[0],
            min: Flight.leave.toISOString().split("T")[0],
            onchange: (e: InputEvent) => {
              if (e.target instanceof HTMLInputElement)
                Flight.setLeave(new Date(e.target.value));
            },
          }),
          m("input", {
            type: "date",
            value: Flight.return.toISOString().split("T")[0],
            min: Flight.return.toISOString().split("T")[0],
            disabled: Flight.type === "one-way",
            onchange: (e: InputEvent) => {
              if (e.target instanceof HTMLInputElement)
                Flight.setReturn(new Date(e.target.value));
            },
          }),
          m(
            "button",
            {
              disabled: !Flight.valid,
              onclick: () => {
                alert(
                  "Flight booked for a " +
                    Flight.type +
                    " trip, leaving on " +
                    Flight.leave.toISOString().split("T")[0]
                );
                Flight.valid = false;
              },
            },
            "Book"
          ),
        ]
      ),
      
    ]);
  },
};

export default Task3;
