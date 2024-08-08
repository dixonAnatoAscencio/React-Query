import { useQuery } from "@tanstack/react-query";


const getCryptoNumber = async (): Promise<number> => {
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new" 
  ).then((resp) => resp.json());

  return Number(resp);
};

export const RandomNumber = () => {
  const {
    data
  } = useQuery({
    queryKey: ["randomNumber"], //como se va a identificar esta petición
    queryFn: getCryptoNumber, //función que se va a ejecutar
    staleTime: 1000* 5 //informa que se debe refrescar la petición cada 5 segundos
    
  });

  return (
    <>
      <h1>Random Number: {data}</h1>
    </>
  );
}
