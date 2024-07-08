import React from "react";
import { useEffect, useState } from "react";

const Webapi = () => {
  const [data, setData] = useState(null);
  //   console.log(data);
  var nw = data;
console.log()
  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(`https://dummyapi.online/api/movies`);

        let postsData = await response.json();
        // console.log(postsData[0]);
        // console.log(postsData);
        setData(postsData);
      } catch (err) {}
    };

    fetchDataForPosts();
  }, []);

  return (
    <div className="border">
      {data?.map(({ movie, image, id, rating, imdb_url }) => (
        <div key={id}>
          {movie}
          {rating}
        </div>
      ))}
    </div>
  );
};

export default Webapi;
