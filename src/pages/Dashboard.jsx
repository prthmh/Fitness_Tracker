import { useSelector } from "react-redux";
import "./Dashboard.styles.css";

export const Dashboard = () => {
  const exercises = useSelector((state) => state.exercises);
  const foods = useSelector((state) => state.foods);
  const goals = useSelector((state) => state.goals);

  const totCaloriesBurned = exercises.reduce(
    (totalCal, exercise) => totalCal + exercise.caloriesBurned,
    0
  );
  const totCaloriesConsumed = foods.reduce(
    (totConsumed, food) => totConsumed + food.calories,
    0
  );
  const inProgressGoals = goals.filter((goal) => goal.status === "In Progress");
  const totCaloriesGoal = inProgressGoals.reduce(
    (totGoal, goal) => totGoal + goal.targetCaloriesValue,
    0
  );

  const remainingCaloriesToGoal =
    totCaloriesGoal - totCaloriesBurned + totCaloriesConsumed;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="metrics">
        <div className="metrics_item calories_burn">
          <h3>Total Calories Burned</h3>
          <p>{totCaloriesBurned} Calories</p>
        </div>
        <div className="metrics_item calories_consumed">
          <h3>Total Calories Consumed</h3>
          <p>{totCaloriesConsumed} Calories</p>
        </div>
        <div className="metrics_item calories_goal">
          <h3>Total Calories Goal</h3>
          <p>{totCaloriesGoal} Calories</p>
        </div>
        <div className="metrics_item" style={{ backgroundColor: "#fecdd3" }}>
          <h3>Remaining Calories to Goal</h3>
          <p>{remainingCaloriesToGoal} Calories</p>
        </div>
      </div>
    </div>
  );
};
