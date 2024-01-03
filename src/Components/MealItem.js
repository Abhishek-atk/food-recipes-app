import React from "react";
import './style.css';
const Mealitem = (getMeal) => {
    return (
        <>
            <div className="card">
                <img src={getMeal.data.strMealThumb} alt="meal" />
                <div className="info">
                    <h2>{getMeal.data.strMeal}</h2>
                    <p>{getMeal.data.strArea} food</p>
                </div>
                <div className="recipe">
                    <h2>Recipe</h2>
                    <p>{getMeal.data.strInstructions}</p>
                    <img src={getMeal.data.strMealThumb} alt="food"/>
                    <strong style={{margin:"35%"}}>Ingredients</strong>
                    <table className="Ingredients_table">
                        <tr>
                            <th>Ingredients</th>
                            <th>Measure</th>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient1}</td>
                            <td>{getMeal.data.strMeasure1}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient2}</td>
                            <td>{getMeal.data.strMeasure2}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient3}</td>
                            <td>{getMeal.data.strMeasure4}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient5}</td>
                            <td>{getMeal.data.strMeasure5}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient6}</td>
                            <td>{getMeal.data.strMeasure6}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient7}</td>
                            <td>{getMeal.data.strMeasure7}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient8}</td>
                            <td>{getMeal.data.strMeasure8}</td>
                        </tr>

                        <tr>
                            <td>{getMeal.data.strIngredient9}</td>
                            <td>{getMeal.data.strMeasure9}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient10}</td>
                            <td>{getMeal.data.strMeasure10}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient11}</td>
                            <td>{getMeal.data.strMeasure11}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient12}</td>
                            <td>{getMeal.data.strMeasure12}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient13}</td>
                            <td>{getMeal.data.strMeasure13}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient14}</td>
                            <td>{getMeal.data.strMeasure14}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient15}</td>
                            <td>{getMeal.data.strMeasure15}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient16}</td>
                            <td>{getMeal.data.strMeasure16}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient17}</td>
                            <td>{getMeal.data.strMeasure17}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient18}</td>
                            <td>{getMeal.data.strMeasure18}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient19}</td>
                            <td>{getMeal.data.strMeasure19}</td>
                        </tr>
                        <tr>
                            <td>{getMeal.data.strIngredient20}</td>
                            <td>{getMeal.data.strMeasure}</td>
                        </tr>                        

                    </table>
                </div>
            </div>
        </>
    )
}
export default Mealitem;