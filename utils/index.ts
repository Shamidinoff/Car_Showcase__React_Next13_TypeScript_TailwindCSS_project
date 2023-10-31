const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c0519d6039msha7fb98572389e6dp1ccdb2jsnf69372388e2e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "c0519d6039msha7fb98572389e6dp1ccdb2jsnf69372388e2e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();
}
