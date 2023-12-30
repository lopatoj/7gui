import m from "mithril";
import "~/styles.css";

interface CountComponent extends m.Component {
  count: number;
}

const Task1: CountComponent = {
  count: 0,
  view: (v) => {
    return m(
      "div",
      m("p", "Task 1: Count"),
      m(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "row",
            width: "200px",
            gap: ".25rem",
          },
        },
        [
          m("input", {
            type: "text",
            value: v.state.count,
            readonly: true,
            disabled: true,
            style: {
              width: "100%",

            },
          }),
          m(
            "button",
            {
              onclick: () => {
                v.state.count++;
              },
            },
            "Increment"
          ),
        ]
      )
    );
  },
};

export default Task1;
