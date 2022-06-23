import axios from "axios";

export async function getPlanet({ planetId }) {
  const url = `https://swapi.dev/api/planets/${planetId}`;
  const response = await axios.get(url);
  return response.data;
}
