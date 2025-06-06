import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../../components/ItemCard";

export default function Home() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        const listaFormatada = Object.keys(res.data.message).map((breed) => ({
          id: breed,
          titulo: breed.charAt(0).toUpperCase() + breed.slice(1),
          descricao: "Clique para ver mais ou favoritar essa raça."
        }));
        setBreeds(listaFormatada);
      });
  }, []);
  
  

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🐶 Lista de Raças</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {breeds.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
