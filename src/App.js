import { Route, Routes } from "react-router-dom";
import "./styles.css";
import { Dashboard } from "./pages/Dashboard";
import { Exercise } from "./pages/ExercisePage";
import { Food } from "./pages/FoodPage";
import { Goal } from "./pages/GoalPage";
import { NavBar } from "./components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchExcercise, fetchFood, fetchGoals } from "./redux/action";
import { Toaster } from "react-hot-toast";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExcercise());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              fontFamily: "inherit"
            }
          }}
        />
      </div>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/food" element={<Food />} />
          <Route path="/goal" element={<Goal />} />
        </Routes>
      </div>
    </>
  );
}
