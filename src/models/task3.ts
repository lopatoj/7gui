import { startOfToday } from "date-fns";

interface FlightState {
  type: "one-way" | "return";
  leave: Date;
  return: Date;
  valid: boolean;
  
  setLeave: (date: Date) => void;
  setReturn: (date: Date) => void;

  validate: () => void;
}

const Flight: FlightState = {
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
