import React from "react";
import PostCardHeader from "../../components/PostCardHeader";
import PostCard from "../../components/PostCard";
import { clientConfig } from "../../lib/sanity";

// Query Companies & Positions Data
const postDataQuery = `*[_type == "post"]{
  _id, author, lastUpdatedAt, blogUrl,
  blogDescription, blogTitle, typeOfContent,
  "slug": slug.current
}`;

export default function Posts({ postDetails }) {
  const postDetailsData = postDetails;

  return (
    <>
      <PostCardHeader />

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {postDetailsData.map((postDetail) => (
            <div key={postDetail._id}>
              <PostCard
                tutorial={postDetail.typeOfContent}
                blogTitle={postDetail.blogTitle}
                blogAuthor={postDetail.author}
                blogDescription={postDetail.blogDescription}
                updatedAt={postDetail.lastUpdatedAt}
                link={postDetail.blogUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const postDetails = await clientConfig.fetch(postDataQuery);

  return {
    props: {
      postDetails,
    },
  };
}
