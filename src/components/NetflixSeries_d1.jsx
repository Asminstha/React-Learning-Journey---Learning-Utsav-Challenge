import seriesData from "../api/seriesData.json"
const NetflixSeries = () => {
  // const name = "Devara";
  // const para =
  //   "lorem lorem loren Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam  impedit dolor adipisci cupiditate nihil consequatur doloribus, impedit dolor adipisci cupiditate nihil consequatur doloribus, laborum ";
  // const gen = () => {
  //   const genre = "Movie";
  //   return genre;
  // };
  // let age = 15;
  // const canWatch = () => {
  //   if (age >= 18) return "You Can Watch";
  //   return "You Can't Watch";
  // };
  return (
    <>
      <ul>
        <li>     
          <div>
        <img src={seriesData[0].img_url} alt="Movie Devara" width="40%" height="40%" />
        <h1>Name : {seriesData[0].name}</h1>  {/* dynamic values using variable  */}
        <h3>Rating : {seriesData[0].rating}</h3>
        <p>Description : {seriesData[0].description}</p>
        {/* calling function gen() */} {/* <p>Genre : {gen()}</p> */}       
        <p>Casting : {seriesData[0].cast}</p>
        <p>Genre : {seriesData[0].genre}</p>
        {/* <button>{canWatch()}</button> */}
        <a href={seriesData[0].watch_url} target="_blank">
          <button>Watch Now </button>
        </a>
        </div> 
        </li>
      </ul>
    </>
  );
};
export default NetflixSeries;
// Named export and import 
// export const Header=()=>{
//     return (
//         <>
//         <h1>Hello Learning Utsav</h1>
//         </>
//     );
// }

//  export const Footer=()=>{
//     return(
//         <>
//         <p>Copyright @ Learning Utsav Asmin Shrestha</p>
//         </>
//     );
//  }