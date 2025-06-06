import { useEffect, useState } from "react";
import { useFavoritos } from "../context/FavoritosContext";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { favoritos, toggleFavorito } = useFavoritos();
  const isFavorito = favoritos.some((fav) => fav.id === item.id);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${item.id}/images/random`)
      .then((res) => res.json())
      .then((data) => setImageUrl(data.message));
  }, [item.id]);

  return (
    <div className="border rounded p-4 shadow bg-zinc-900 text-white">
      <h2 className="text-xl font-semibold mb-2">{item.titulo}</h2>
      
      {imageUrl && (
        <img
          src={imageUrl}
          alt={item.titulo}
          className="mb-2 w-full h-48 object-cover rounded"
        />
      )}

      <Link to={`/detalhes/${item.id}`} className="block text-blue-400 underline mb-2">
        Clique para ver mais sobre essa raça
      </Link>

      <button
        className={`mt-2 px-4 py-2 rounded text-white ${
          isFavorito ? "bg-red-500" : "bg-green-600"
        }`}
        onClick={() => toggleFavorito(item)}
      >
        {isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      </button>
    </div>
  );
};

export default ItemCard;
