// Destructuring props to get data object
export const SeriesCard = ({ data }) => {
  const { id,name, img_url, rating, description, cast, genre, watch_url } = data;
  
  return (
    <li className="series-card">
      <h1 className="series-title">Name: {name}</h1>
      <div className="series-image-container">
        <img className="series-image" src={img_url} alt={`Poster of ${name}`} />
      </div>
      <h3 className="series-rating">Rating: {rating}</h3>
      <p className="series-description">Description: {description}</p>
      <p className="series-cast">Casting: {cast}</p>
      <p className="series-genre">Genre: {genre}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <button className="watch-button">Watch Now</button>
      </a>
    </li>
  );
};

export default SeriesCard;
