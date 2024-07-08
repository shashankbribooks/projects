import { useRouter } from "next/router";
import React from "react";

const index = ({ post }) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <h1> Loading...</h1>;
//   }
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};
export default index;

export const getStaticPaths = async () => {
  //here we are doing complete api data fetching and showing
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //   const data = await res.json();
  //   const paths = data.map((post) => {
  //     return {
  //       params: {
  //         postid: `${post.id}`, //here we get a post id from api ... for our routing..
  //       }, //array of path bn jayga
  //     };
  //   });
  return {
    //static pages bane hai ...
    paths: [
      { params: { postid: "1" } },
      { params: { postid: "2" } },
      { params: { postid: "3" } },
      //   { params: { postid: "4" } },
      //   { params: { postid: "5" } },
    ],
    // here we have limitions only we want to show these 5 postid only ...
    // paths: paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};
