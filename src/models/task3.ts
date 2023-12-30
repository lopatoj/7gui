import { startOfToday } from "date-fns";

const Flight = {
  type: "one-way",
  leave: startOfToday(),
  return: startOfToday(),
  valid: false,

  setLeave: (date: Date) => {
    Flight.leave = date;
    Flight.validate();
  },
  setReturn: (date: Date) => {
    Flight.return = date;
    Flight.validate();
  },

  validate: () => {
    if (Flight.type === "one-way") {
      Flight.valid = Flight.leave >= startOfToday();
    } else {
      Flight.valid =
        Flight.leave >= startOfToday() && Flight.leave <= Flight.return;
    }
  },
};

export default Flight;
