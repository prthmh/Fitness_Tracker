import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import "./page.styles.css";
import { useEffect, useState } from "react";
import { addGoal, deleteGoal, fetchGoals } from "../redux/action";
import { getDate } from "../utils/getDate";

export const Goal = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCaloriesValue: "",
    status: ""
  });
  const {
    name,
    description,
    targetDate,
    targetCaloriesValue,
    status
  } = formData;

  // useEffect(() => {
  //   dispatch(fetchGoals());
  // }, [dispatch]);
  // console.log(goals);

  const statusType = (status) => {
    switch (status) {
      case "Abandoned":
        return "#FF5733";
      case "Achieved":
        return "#28A745";
      case "In Progress":
        return "#007BFF";
      default:
        return "";
    }
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    dispatch(addGoal(formData));
    setFormData({
      name: "",
      description: "",
      targetDate: "",
      targetCaloriesValue: "",
      status: ""
    });
  };

  const handleGoalDelete = (goalId) => {
    dispatch(deleteGoal(goalId));
  };

  return (
    <div className="page">
      <div>
        <h2>Goals</h2>
        <div className="items_list">
          {goals.map((goal) => (
            <div
              key={goal._id}
              className="item"
              style={{ backgroundColor: "#c7d2fe" }}
            >
              <div className="info">
                <h3>{capitalizeFirstLetter(goal.name)}</h3>
                <p>
                  <b>Description: </b>
                  {goal.description} min
                </p>
                <p>
                  <b>Target Date: </b>
                  {getDate(goal.targetDate)}
                </p>
                <p>
                  <b>Target Calories Value: </b>
                  {goal.targetCaloriesValue}
                </p>
                <p>
                  <b>Status: </b>
                  <span
                    className="goal_status"
                    style={{ backgroundColor: statusType(goal.status) }}
                  >
                    {goal.status}
                  </span>
                </p>
              </div>
              <button
                className="delete_btn"
                onClick={() => handleGoalDelete(goal._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="add_item">
        <h2>Add Goal</h2>
        <form
          className="entry_form"
          onSubmit={handleAddGoal}
          style={{ backgroundColor: "#c7d2fe" }}
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
          <label className="form_label">Description:</label>
          <input
            className="from_input"
            type="text"
            value={description}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                description: e.target.value
              }))
            }
          />
          <label className="form_label">Target Date:</label>
          <input
            className="from_input"
            type="date"
            value={targetDate}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                targetDate: e.target.value
              }))
            }
          />
          <label className="form_label">Target Calories Value:</label>
          <input
            className="from_input"
            type="number"
            value={targetCaloriesValue}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                targetCaloriesValue: e.target.value
              }))
            }
          />
          <label className="form_label">Status: </label>
          <select
            className="from_input"
            value={status}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                status: e.target.value
              }))
            }
          >
            <option>Select</option>
            <option value="Abandoned">Abandoned</option>
            <option value="Achieved">Achieved</option>
            <option value="In Progress">In Progress</option>
          </select>

          <button className="add_btn" type="submit">
            Add Exercise
          </button>
        </form>
      </div>
    </div>
  );
};
