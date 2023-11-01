const options = {
  headers: {
    "X-RapidAPI-Key": "c5fbafb69emsh904b0562102575bp13afe9jsn59e938df8dcd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars() {
  const make = "bmw";
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}`,
    options
  );
  return await res.json();
}
