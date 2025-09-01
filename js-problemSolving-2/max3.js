function maxAge(Kabbo, Zebon, Palash) {
  if (Kabbo > Zebon && Kabbo > Palash) {
    console.log("Kabbo Boro");
  } else if (Zebon > Palash && Zebon > Kabbo) {
    console.log("Zebon boro");
  } else {
    console.log("Palash Boro");
  }
}
const res = maxAge(23, 25, 29);
