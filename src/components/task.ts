import m, { Vnode } from "mithril";
import "~/styles.css";

const Task: m.Component<{title: string}> = {
  view: (v: Vnode<{title: string}>) => {
    return m("div.task", [
      m("div.title", v.attrs.title),
      m("div.content", v.children),
    ]);
  },
};

export default Task;