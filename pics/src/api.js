import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5Q6va5YCS2E0q9sB_yxgY-kSmNFUaNqJf5BdL6DGLSo",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
