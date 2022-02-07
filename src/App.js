import { useState } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import AddMovie from "./Component/AddMovie/AddMovie";
import MovieList from "./Component/MovieList/MovieList";
import Navbar from "./Component/Navbar/Navbar";
import { moviesData } from "./Constants/data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [rate, setRate] = useState(0);
  const [text, setText] = useState("");
  const handleAdd=(movie)=>{
    setMovies([...movies,movie])
  }
  const deleteMovie = (id) => {
    console.log(id);
    setMovies(movies.filter((el) => el.id !== id));
  };

  return (
    <div className="App">
      <Navbar setRate={setRate} rate={rate} setText={setText} />
      <MovieList
        movies={movies}
        text={text}
        rate={rate}
        deleteMovie={deleteMovie}
      />
      <AddMovie handleAdd={handleAdd} />
      <Footer />
    </div>
  );
}

export default App;
