// library
import { StarIcon } from "@heroicons/react/24/solid";

function NurseryCard() {
    return (
        <>
            <article className="nurseryCard">
                <div className="top">
                    <h3>La crèche des loulous</h3>
                    <p>3.9<StarIcon width={20}/></p>
                </div>
                <div className="bottom"></div>
            </article>
        </>
    );
}

export default NurseryCard;

