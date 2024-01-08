import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'



const Home = () => {

  const API_URL = "https://fakestoreapi.com/products"
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();

      setPosts(data);

    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])


  return (
    <div>
      {
        loading ? <Spinner /> :

          posts.length > 0 ?

            (<div>
              {
                posts.map((post) => (
                  <Product key={post.id} post={post} />
                ))
              }
            </div>) :

            <div>
              <p>No Data Found!!</p>
            </div >

      }
    </div >
  )
}

export default Home