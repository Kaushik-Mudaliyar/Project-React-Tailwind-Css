import axios from "axios";
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

const fetchPhotos = async (query, page = 1, per_page = 20) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  // console.log(response);

  const data = await response.data.results.map((item) => {
    return {
      id: item.id,
      title: item.alt_description,
      type: "photo",
      thumbnail: item.urls.thumb,
      image: item.urls.full,
      url: item.links.html,
    };
  });
  // console.log(data);
  return data
};
const fetchVideos = async (query, page = 1, per_page = 15) => {
  const response = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: { query, per_page,page },
    headers: { Authorization: PEXELS_KEY },
  });

  
  const data = await response.data.videos.map((item) => {
    return {
      id: item.user.id,
      title: item.user.name,
      thumbnail: item.image,
      type: "video",
      video: item.video_files[0].link,
      url: item.url,  
    };
  });

  // console.log(data);
  return data
};

export { fetchPhotos, fetchVideos };
