const Temperatures = {
  cel: "",
  fah: "",
  setFah: (value: string) => {
    Temperatures.cel = value;
    const c = parseFloat(Temperatures.cel);
    if (isNaN(c)) return;
    Temperatures.fah = (c * (9.0 / 5.0) + 32).toString();
  },
  setCel: (value: string) => {
    Temperatures.fah = value;
    const f = parseFloat(Temperatures.fah);
    if (isNaN(f)) return;
    Temperatures.cel = ((f - 32) * (5.0 / 9.0)).toString();
  },
};

export default Temperatures;
