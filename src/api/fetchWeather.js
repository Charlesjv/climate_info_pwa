import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "6807bb261418f3135490ff71868dd9b7";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: metric,
      APPID: API_KEY,
    },
  });

  return data;
};
