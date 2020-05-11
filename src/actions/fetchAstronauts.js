export function fetchAstronauts() {
  return dispatch => {
    dispatch({ type: "START_ADDING_ASTRONAUTS_REQUEST" });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(res=>{
          console.log(res)
          return res
      })
      .then(photos => dispatch({ type: "ADD_ASTRONAUTS", astronauts: photos }));
  };
}
