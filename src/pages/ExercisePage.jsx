import "./page.styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, deleteExercise } from "../redux/action";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

export const Exercise = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const [fromData, setFormData] = useState({
    name: "",
    duration: ""
  });

  const { name, duration } = fromData;

  // useEffect(() => {
  //   dispatch(fetchExcercise());
  // }, [dispatch]);
  // console.log(exercises);

  const handleExerciseDelete = (exerciseId) => {
    dispatch(deleteExercise(exerciseId));
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    dispatch(addExercise(fromData));
    setFormData({
      name: "",
      duration: ""
    });
  };

  return (
    <div className="page">
      <div>
        <h2>Exercises</h2>
        <div className="items_list">
          {exercises.map((exercise) => (
            <div
              key={exercise._id}
              className="item"
              style={{ backgroundColor: "#bfdbfe" }}
            >
              <div className="info">
                <h3>{capitalizeFirstLetter(exercise.name)}</h3>
                <p>
                  <b>Duration: </b>
                  {exercise.duration} min
                </p>
                <p>
                  <b>Calories Burned: </b>
                  {exercise.caloriesBurned} cal
                </p>
              </div>
              <button
                className="delete_btn"
                onClick={() => handleExerciseDelete(exercise._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="add_item">
        <h2>Add Exercise</h2>
        <form
          className="entry_form"
          onSubmit={handleAddExercise}
          style={{ backgroundColor: "#bfdbfe" }}
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
          <label className="form_label">Duration(min):</label>
          <input
            className="from_input"
            type="text"
            value={duration}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                duration: e.target.value
              }))
            }
          />
          <span className="notice">
            *Calories Burned will be calculated based on the name of exercise.
            If we do not have burn rate for exercise entered by you we will
            assign a randonm burn rate. But do not worry with time we will add
            more exercises.
          </span>
          <button className="add_btn" type="submit">
            Add Exercise
          </button>
        </form>
      </div>
    </div>
  );
};
