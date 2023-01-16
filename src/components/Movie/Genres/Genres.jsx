import Genre from "./Genre";
const Genres = ({ genres }) => {
  return (
    <>
      {genres.map((genre, idx) => (
        <Genre genre={genre} key={idx} />
      ))}
    </>
  );
};

export default Genres;
