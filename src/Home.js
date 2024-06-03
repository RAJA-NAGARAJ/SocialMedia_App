import Feed from './Feed';



const Home = ({ posts, fetchError, isLoading }) => {
  
  
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (fetchError) {
    return <p>Error: {fetchError.message}</p>;
  }

  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts available</p>
      )}
    </main>
  );
};


export default Home