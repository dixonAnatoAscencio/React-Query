import { useQuery } from "@tanstack/react-query";
import "./App.css";

const getCryptoNumber = async (): Promise<number> => {
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
};

function App() {
  //objeto de configuración
  const {
    isLoading,//se usa cuando no hay data y se está cargando la petición 
    isFetching, //se usa cuando se ha ejecutado la petición y se ha obtenido data
    data: number,
    error,
    refetch // si se quiere refrescar la petición
  } = useQuery({
    queryKey: ["randomNumber"], //como se va a identificar esta petición
    queryFn: getCryptoNumber, //función que se va a ejecutar
    
  });

  return (
    <>
      {isFetching ? <h1>Cargando...</h1> : <h1>Random Number: {number}</h1>}

      <div>{JSON.stringify(error)}</div>

      <button
       disabled={isFetching}
       onClick={() => refetch()}
      >
        Nuevo número aleatorio
      </button>
    </>
  );
}

export default App;
