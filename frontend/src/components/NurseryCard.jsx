import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function NurseryCard({ nursery }) {
  const { name, address, place_max } = nursery;

  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(!favorite);
  }

  return (
    <>
      <article className="nurseryCard">
        <div className="top">
          <button type="button" className="favorite" onClick={handleFavorite}>
            <HeartIcon
              width={30}
              className={favorite ? "isFavorite" : "isNotFavorite"}
            />
          </button>
          <div className="title">
            <h3>{name}</h3>
            <div className="grade">3.9</div>
          </div>
        </div>
        <div className="bottom">
          <div className="nurseryInfo">
            <p>{address}</p>
            <span>{place_max}</span>
          </div>
          <div className="disponibilities">
            <div className="monday">Lun. 15</div>
            <div className="tuesday">Mar. 16</div>
            <div className="wednesday">Mer. 17</div>
            <div className="thursday">Jeu. 18</div>
            <div className="friday">Ven. 19</div>
            <div className="saturday">Sam. 20</div>
          </div>
        </div>
      </article>
    </>
  );
}

export default NurseryCard;
