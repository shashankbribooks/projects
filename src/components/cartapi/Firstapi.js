import React, { useEffect, useState } from "react";
const Firstapi = () => {
  const [isbooks, setIsBooks] = useState([]);
  const result = isbooks.books;
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://crm.dev.bribooks.com/api/getBooks",
        {
          method: "POST",
        }
      );
      setIsBooks(await response.json());
    } catch (error) {}
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  const Imgurl =
    "https://youbooks-storage-5fd6173683748-webdev.s3.amazonaws.com/";
  return (
    <div className="">
      {result?.map((book) => (
        <div className="border border-2 mx-2 my-2 px-2">
          <div className="" key={book.id}>
            <h3>Name : {book.name}</h3> <br />
            <h3>Author_name : {book.author_name}</h3> <br />
            {/* {book.slug} <br /> */}
            <span>
              <img src={Imgurl + "public/" + book.cover_image} alt="asdfg" />
              <h2>{book.category}</h2>
            </span>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default Firstapi;
