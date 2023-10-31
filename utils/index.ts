export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "c0519d6039msha7fb98572389e6dp1ccdb2jsnf69372388e2e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
