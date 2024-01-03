import React, { useState } from "react";
import Mealitem from "./MealItem";
import "./style.css";
import { Oval } from "react-loader-spinner";
const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const [loading, setLoading] = useState(false);

  const searchMeal = (evt) => {
    if (evt.key === "Enter") {
      setLoading(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
          setSearch("");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search For Food Recipes</h1>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
            placeholder="eg: pizza,cake, etc.."
          />
        </div>
          <div>
            {loading && (
              <div className="text-center">
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="oval-loading"
                  wrapperStyle={{ display: "inline-block" }}
                  wrapperClass="mx-auto"
                />
              </div>
            )}
          </div>
        <div className="container">
          {Mymeal == null ? (
            <p className="notSearch">No item found</p>
          ) : (
            Mymeal.map((res) => {
              return <Mealitem data={res} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Meal;
