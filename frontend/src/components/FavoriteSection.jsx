// proptypes
import { PropTypes } from "prop-types";

// styles
import "./styles/FavoriteSection.scss";

// library
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function FavoriteSection({ sectionFavoriteHidden, setSectionFavoriteHidden }) {
  FavoriteSection.propTypes = {
    sectionFavoriteHidden: PropTypes.bool,
    setSectionFavoriteHidden: PropTypes.func,
  };

  const handleSection = () => {
    setSectionFavoriteHidden(!sectionFavoriteHidden);
  };

  return (
    <div
      className={
        sectionFavoriteHidden
          ? "favoriteSectionContainer"
          : "favoriteSectionContainer favoriteSectionNotHidden"
      }
    >
      <button onClick={handleSection}>
        <ChevronLeftIcon width={30} />
      </button>
      <p>Here&apos;s my Favorite Section</p>
    </div>
  );
}

export default FavoriteSection;
