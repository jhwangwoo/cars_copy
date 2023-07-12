export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "4355ab39d8msh132630a6b229104p12c8fbjsn4d22687644ee",
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
