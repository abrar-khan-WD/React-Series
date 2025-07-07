import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      console.log("Fetching products from:", API_URL);
      const data = await response.json();
      console.log("Products fetched successfully:");
      console.log(data);
      setPosts(data);
    } catch (error) {
      toast.error("Failed to fetch products. Please try again later.");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((posts) => (
            <Product key={posts.id} posts={posts} />
          ))}
        </div>
      ) : (
        <div>
          <h1>No Products Found</h1>
          <p>Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
