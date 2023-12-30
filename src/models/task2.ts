const Temperatures = {
  cel: "",
  fah: "",
  setFah: (value: string) => {
    Temperatures.cel = value;
    const c = parseFloat(Temperatures.cel);

    if (Temperatures.cel !== "" && !isNaN(c)) 
      Temperatures.fah = parseFloat(Temperatures.cel) * (9.0 / 5.0) + 32 + "";
  },
  setCel: (value: string) => {
    Temperatures.fah = value;
    const f = parseFloat(Temperatures.fah);

    if (Temperatures.fah !== "" && !isNaN(f)) 
      Temperatures.cel = (parseFloat(Temperatures.fah) - 32) * (5.0 / 9.0) + "";
  },
};

export default Temperatures;
