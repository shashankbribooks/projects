import { useEffect, useState } from "react";
import { Nav, NavLink } from "react-bootstrap";

const FetchGetRequest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        console.log(postsData);
        setData(postsData);
      } catch (err) {}
    };

    fetchDataForPosts();
  }, []);

  return (
    <div className="flex">
      <div className=" border border-2 w-52 sm:w-80 flex justify-center items-center">
        {/* {loading && <div className="text-xl font-medium">Loading posts...</div>}     */}

        {data &&
          data.map(({ id, name, email, address, website, phone, company }) => (
            <>
              <div className="border text-center my-3" key={id}>
                {/* <h1>{id}</h1> */}
                <span>
                  <b>Name:</b> {name}
                </span>{" "}
                <br />
                <b>Address:</b>
                <div>
                  <span>City: {address.city}</span>
                </div>
                <span>
                  {/* <small>
                    <div>
                      geo:
                      <ul>
                        <li>lat ({address.geo.lat})</li>
                        <li>lng ({address.geo.lng})</li>
                      </ul>
                    </div>
                  </small> */}
                </span>
                <span>
                  <i> street: {address.street}</i>
                </span>
                <br />
                <b>Company:</b>
                <div> {company.bs}</div>
                <div> {company.catchPhrase}</div>
                <div> {company.name}</div>
                <i>{email}</i> <br />
                <b>{phone}</b> <br />
                {website}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default FetchGetRequest;
