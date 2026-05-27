import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading";

function Posts() {

  useEffect(()=>{
    console.log('Posts Rendered' , posts , isPending);
  })

  const [posts, isPending] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {isPending ? (
       <Loading />
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p>
              <b>{post.id}</b> - {post.title}
            </p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
