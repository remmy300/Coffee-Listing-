// import "./App.css";

import { useEffect } from "react";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import { useState } from "react";

function App() {
  const [coffeeList, setCoffeeList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Fetch coffee data from a backend API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        //Update state with fetched data
        setCoffeeList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //rendor loading or error message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="bg-black min-h-screen h-screen">
      <Hero />

      <div className="absolute left-9 right-9 top-20  p-5 text-center  bg-slate-600 rounded ">
        <h1 className="text-white  text-center text-lg font-bold">
          Our Collection
        </h1>
        <p className=" text-white p-2 text-center">
          Introducing our Coffee collection, selection of unique coffees <br />
          from different roast types and origin, expertly roasted in small{" "}
          <br />
          batches and shipped freshly weekly.
        </p>
        <button className=" p-1 rounded mb-2 mx-auto text-white bg-gray-400">
          All Products
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5 rounded overflow-hidden min-h-screen shadow-slate-500">
          {coffeeList.map((coffee) => (
            <Card
              key={coffee.id}
              image={coffee.image}
              name={coffee.name}
              price={coffee.price}
              rating={coffee.rating}
              votes={coffee.votes}
              popular={coffee.popular}
              available={coffee.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
