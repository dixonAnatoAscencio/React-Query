import { useQuery } from "@tanstack/react-query";

const getCryptoNumber = async (): Promise<number> => {
    const resp = await fetch(
      "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
    ).then((resp) => resp.json());
  
    return Number(resp);
  };

export const useRandom = () => {
    
    const randomQuery = useQuery({
        queryKey: ["randomNumber"], //como se va a identificar esta petición
        queryFn: getCryptoNumber, //función que se va a ejecutar
        // retry: 2, //intentar 2 veces,  si es false  no se reintenta
        //refetchOnWindowFocus: false, // no refrescar la petición cuando cambie de pestaña
        // staleTime: 1000* 5 //informa que se debe refrescar la petición cada 5 segundos
        
      });

    return {
        randomQuery

    }
}
