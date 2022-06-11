import React from 'react';
import Card from './components/Card';
import fetchData from './services/api';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData('joinville').then((response) => {
      console.log(response);
    });
  };

  return (

    <div className="flex flex-col w-full h-screen items-center justify-center">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
        />
        <button
          type="submit"
          className="bg-[#A7C7E7] p-3 rounded-lg ml-3 text-[#fff] font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card />

    </div>
  );
}

export default App;
