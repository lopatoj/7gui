const Temperatures = {
  cel: "",
  fah: "",
  setFah: (value: string) => {
    const c = parseFloat(value);
    if (isNaN(c)) return;
    Temperatures.cel = value;
    Temperatures.fah = (c * (9.0 / 5.0) + 32).toString();
  },
  setCel: (value: string) => {
    const f = parseFloat(value);
    if (isNaN(f)) return;
    Temperatures.fah = value;
    Temperatures.cel = ((f - 32) * (5.0 / 9.0)).toString();
  },
};

export default Temperatures;
