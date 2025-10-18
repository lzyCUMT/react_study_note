import { useState } from "react";
import searchImages from "./api";
import ImageList from "./Components.js/ImageList";
import SearchBar from "./Components.js/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
