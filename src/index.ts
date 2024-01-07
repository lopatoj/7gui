import m from "mithril";
import "~/styles.css";

import Task1 from "~/components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import Task4 from "./components/task4";
import Task5 from "./components/task5";

m.mount(document.body, {
  view: () => {
    return m("div.center", [
      m("h1", "7 GUI Tasks"),
      m("p", ["Mithril.js implementation by ", m("a", { href: "https://github.com/lopatoj", target: "_blank" }, "lopatoj"), "."]),
      m(Task1),
      m(Task2),
      m(Task3),
      m(Task4),
      m(Task5),
    ]);
  },
});
