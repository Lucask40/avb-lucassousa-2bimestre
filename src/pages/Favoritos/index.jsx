import { useFavoritos } from "../../context/FavoritosContext";
import ItemCard from "../../components/ItemCard";

const Favoritos = () => {
  const { favoritos } = useFavoritos();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">FAVORITOS</h1>

      {favoritos.length === 0 ? (
        <p className="text-gray-400">Nenhum favorito adicionado ainda.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoritos.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
