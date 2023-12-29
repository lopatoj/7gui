import m from "mithril";
import "~/styles.css";

import Task1 from "~/components/task1";
import Task2 from "./components/task2";

m.mount(document.body, {
  view: () => {
    return m("div.center", [
      m("h1", "7 GUI Tasks"),
      m(Task1),
      m(Task2),
    ]);
  },
});
