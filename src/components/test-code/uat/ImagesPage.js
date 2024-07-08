// pages/images.js

import { useEffect, useState } from "react";

const ImagesPage = () => {
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    const fetchImageNames = async () => {
      try {
        const response = await fetch(
          "https://crm.dev.bribooks.com/api/nyaf_images_cloud"
        );
        const data = await response.json();
        const name = data.nyaf_images.jury_award_winners.data;
        console.log("name", name);
        const names = name.map((image) => getImageName(image.url));

        setImageNames(names);
      } catch (error) {
        console.error("Error fetching image names:", error);
      }
    };

    fetchImageNames();
  }, []);

  const getImageName = (url) => {
    // Implement logic to extract the name from the image URL
    // For example, you can split the URL and extract the filename
    return url.split("/").pop().split(".")[0]; // Example extraction logic
  };

  return (
    <div>
      <h1>Image Names</h1>
      <ul>
        {imageNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesPage;
