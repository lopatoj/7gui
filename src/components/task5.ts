import m, { Attributes, Vnode } from "mithril";
import "~/styles.css";

import Task from "~/components/task";
import People from "~/models/task5";

interface PeopleComponent<A, S> extends m.Component<A, S> {
  first: string;
  last: string;
}

interface PeopleState {
  first: string;
  last: string;
  filter: string;
}

const Task5: PeopleComponent<Attributes, PeopleState> = {
  first: "",
  last: "",
  view: (v: Vnode<{}, PeopleState>) => {
    return m(Task, { title: "Task 5: CRUD" }, [
      m(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1 auto",
            gap: ".25rem",
          },
        },
        [
          m("div", [
            m("p", "Filter prefix:"),
            m("input", {
              type: "text",
              value: v.state.filter,
            }),
          ]),
          m("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: ".25rem",
          } }, [
            m("p", "First name:"),
            m("input", {
              type: "text",
              value: v.state.first,
              oninput: (e: InputEvent) => {
                if (e.target instanceof HTMLInputElement)
                  v.state.first = e.target.value;
              },
            }),
            m("p", "Last name:"),
            m("input", {
              type: "text",
              value: v.state.last,
              oninput: (e: InputEvent) => {
                if (e.target instanceof HTMLInputElement)
                  v.state.last = e.target.value;
              },
            }),
          ]),
        ]
      ),
      m("div", [
        m(
          "button",
          { onclick: People.create(v.state.first, v.state.last) },
          "Create"
        ),
        m("button", { onclick: People.update() }, "Read"),
      ]),
    ]);
  },
};

export default Task5;
