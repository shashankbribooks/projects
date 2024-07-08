import { BlogData } from "@/lib/BlogDataFetched";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
  const blog = await BlogData();
  return (
    <>
      {blog.map((item) => (
        <Link href={`/${item.id}`} className="flex gap-3" key={item.id}>
          <p>{item.id}</p>
          <h1>{item.title}</h1>
        </Link>
      ))}
      <div>blog data</div>
    </>
  );
};

export default BlogPage;
