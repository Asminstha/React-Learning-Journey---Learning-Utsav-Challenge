import seriesData from "../api/seriesData.json";
import  {SeriesCard} from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <>
      <ul className="grid grid-three-cols">
        {/* looping  using .map */}
        {seriesData.map((curElem) => (
          // calling SeriesCard component 
         <SeriesCard key={curElem.id} data={curElem} />
        )
        )} 
      </ul>
    </>
  );
};
export default NetflixSeries;
 