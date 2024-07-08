import React from "react";
import Link from "next/link";
const index = ({ posts }) => {
  return (
    <div>
      <h1>master posts</h1>
      <br />
      <div>
        {posts.map((item) => (
          <div>
            <h3 key={item.id}>
              <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </h3>
            <hr />
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
