import { useRandom } from "./hooks/useRandom";


import "./App.css";



function App() {
  //objeto de configuración
 
  const { randomQuery } = useRandom();

  return (
    <>
      {randomQuery.isFetching ? <h1>Cargando...</h1> : <h1>Random Number: {randomQuery.data}</h1>}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(randomQuery.error)}</div>

      <button
       disabled={randomQuery.isFetching}
       onClick={() => randomQuery.refetch()}
      >
        Nuevo número aleatorio
      </button>
    </>
  );
}

export default App;
