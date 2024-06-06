import m from "mithril";

export const People: People = {
  list: [
    { first: "Jane", last: "Doe" },
    { first: "John", last: "Doe" },
    { first: "Jane", last: "Smith" },
  ],
  selected: 0,
  create: (first: string, last: string) => {
    People.list.push({ first, last });
  },
  update: (index: number, first: string, last: string) => {
    People.list[index] = { first, last };
  },
  delete: (index: number) => {
    People.list.splice(index, 1);
  },
  filter: (prefix: string) => {
    People.list.filter((person) => {
      return person.last.startsWith(prefix);
    });
    m.redraw();
  },
};
