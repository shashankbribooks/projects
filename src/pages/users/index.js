import React from "react";

const index = (props) => {
  console.log(props.name);
  console.log(props.userData);
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.sub}</p>
      <div>
        {props.userData.map((item) => (
          <div>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      name: " imtaz",
      sub: "atif",
      userData: data,
    },
  };
}
