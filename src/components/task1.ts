import m from "mithril";
import "~/styles.css";

import Count from "~/models/task1";

const Task1: m.Component = {
  view: () => {
    return m("div.task", [
      m("p", "Task 1: Count"),
      m("input", { type: "text", value: Count.value, readonly: true }),
      m("button", { onclick: Count.increment }, "Increment"),
    ]);
  },
};

export default Task1;
