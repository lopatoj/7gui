import m, { Vnode } from "mithril";
import "~/styles.css";

interface TempVnode extends Vnode {
  state: {
    fah: string;
    cel: string;
  }
}

const Task2: m.Component = {
  view: (v: TempVnode) => {
    return m("div", 
      m("p", "Task 2: Temperature Converter"), m("div", { style: {
      display: "flex",
      flexDirection: "row",
      gap: ".25rem",
    }}, [
      m("input", { 
        type: "text",
        inputMode: "decimal",
        value: v.state.cel,
        oninput: (e: InputEvent) => {
          if(e.target instanceof HTMLInputElement)
            v.state.cel = e.target.value

          if(v.state.cel !== "")
            v.state.fah = (parseFloat(v.state.cel) * (9.0/5.0) + 32) + ""
        }
      }),
      m("p", "Celcius = "),
      m("input", { 
        type: "text", 
        inputMode: "decimal",
        value: v.state.fah,
        oninput: (e: InputEvent) => {
          if(e.target instanceof HTMLInputElement)
            v.state.fah = e.target.value

          if(v.state.fah !== "")
            v.state.cel = ((parseFloat(v.state.fah) - 32) * (5.0/9.0)) + ""
        }
      }),
      m("p", "Fahrenheit"),
    ]));
  },
};

export default Task2;