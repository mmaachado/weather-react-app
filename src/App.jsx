import React, { useState } from 'react';
import Card from './components/Card';
import fetchData from './services/api';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-[#A7C7E7] p-3 rounded-lg ml-3 text-[#fff] font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
