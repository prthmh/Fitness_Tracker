import { useDispatch, useSelector } from "react-redux";
import "./page.styles.css";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { useEffect, useState } from "react";
import { addFood, deleteFood, fetchFood } from "../redux/action";

export const Food = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: ""
  });
  const { name, calories, protein, carbohydrates, fat } = formData;

  const handleFoodDelete = (foodId) => {
    dispatch(deleteFood(foodId));
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    dispatch(addFood(formData));
    setFormData({
      name: "",
      calories: "",
      protein: "",
      carbohydrates: "",
      fat: ""
    });
  };

  // useEffect(() => {
  //   dispatch(fetchFood());
  // }, [dispatch]);

  return (
    <div className="page">
      <div>
        <h2>Foods</h2>
        <div className="items_list">
          {foods.map((food) => (
            <div
              key={food._id}
              className="item"
              style={{ backgroundColor: "#fed7aa" }}
            >
              <div className="info">
                <h3>{capitalizeFirstLetter(food.name)}</h3>
                <p>
                  <b>Calories: </b>
                  {food.calories} Calories
                </p>
                <p>
                  <b>Protein: </b>
                  {food.protein} gm
                </p>
                <p>
                  <b>Carbohydrates: </b>
                  {food.carbohydrates} gm
                </p>
                <p>
                  <b>Fat: </b>
                  {food.fat} gm
                </p>
              </div>
              <button
                className="delete_btn"
                onClick={() => handleFoodDelete(food._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="add_item">
        <h2>Add Food</h2>
        <form
          className="entry_form"
          onSubmit={handleAddFood}
          style={{ backgroundColor: "#fed7aa" }}
        >
          <label className="form_label">Name:</label>
          <input
            className="from_input"
            type="text"
            value={name}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                name: e.target.value
              }))
            }
          />
          <label className="form_label">Calories:</label>
          <input
            className="from_input"
            type="number"
            value={calories}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                calories: e.target.value
              }))
            }
          />
          <label className="form_label">Protein(gm):</label>
          <input
            className="from_input"
            type="number"
            value={protein}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                protein: e.target.value
              }))
            }
          />
          <label className="form_label">Carbohydrates(gm):</label>
          <input
            className="from_input"
            type="number"
            value={carbohydrates}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                carbohydrates: e.target.value
              }))
            }
          />
          <label className="form_label">Fat(gm):</label>
          <input
            className="from_input"
            type="number"
            value={fat}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                fat: e.target.value
              }))
            }
          />
          <button className="add_btn" type="submit">
            Add Exercise
          </button>
        </form>
      </div>
    </div>
  );
};
