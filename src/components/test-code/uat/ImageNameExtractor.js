import { useEffect, useState } from 'react';

const ImageNameExtractor = () => {
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    const fetchImageAndExtractName = async () => {
      try {
        const imageUrl = './public/EventGallery/NYAF_2023/UserGallery/nyaf_2023/jury_award_winners/Anisha-Mathur.JPG'; // Replace with your actual image URL
        const imageName = extractNameFromImageUrl(imageUrl);
        setImageName(imageName);
       
      } catch (error) {
        console.error('Error fetching image or extracting name:', error);
      }
    };

    fetchImageAndExtractName();
  }, []);

  // const extractNameFromImageUrl = (url) => {
  //   // This is a simplified example, you might need to use a more sophisticated method
  //   const parts = url.split('/');
  //   const imageNameWithExtension = parts[parts.length - 1];
  //   const nameWithoutExtension = imageNameWithExtension.split('.')[0];
  //   return nameWithoutExtension;
  // };

  return (
    <div>
      <h1>Image Name: {imageName}</h1>
      <img src="./public/EventGallery/NYAF_2023/UserGallery/nyaf_2023/jury_award_winners/Anisha-Mathur.JPG" alt="Sample Image" />
    </div>
  );
};

export default ImageNameExtractor;
