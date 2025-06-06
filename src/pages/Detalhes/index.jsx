import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detalhes = () => {
  const { raca } = useParams();
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
      .then(res => res.json())
      .then(data => setImagem(data.message));
  }, [raca]);

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold mb-4 capitalize">{raca}</h1>
      {imagem && (
        <img
          src={imagem}
          alt={raca}
          className="w-full max-w-lg mx-auto rounded shadow"
        />
      )}
    </div>
  );
};

export default Detalhes;
