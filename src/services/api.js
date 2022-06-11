const key = '3139879299f7493ca6012224221106';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
