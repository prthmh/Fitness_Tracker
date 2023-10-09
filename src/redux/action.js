import toast from "react-hot-toast";
import {
  ADD_EXERCISE_SUCCESS,
  ADD_FOOD_SUCCESS,
  ADD_GOAL_SUCCESS,
  DELETE_EXERCISE_SUCCESS,
  DELETE_FOOD_SUCCESS,
  DELETE_GOAL_SUCCESS,
  EXERCISE_ACTION_FAILURE,
  FETCH_EXERCISE_SUCCESS,
  FETCH_FOOD_SUCCESS,
  FETCH_GOAL_SUCCESS,
  FOOD_ACTION_FAILURE,
  GOAL_ACTION_FAILURE
} from "./actionTypes";

export const fetchExcercise = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitnesstrackerapi.pratmbr.repl.co/exercise"
    );
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: FETCH_EXERCISE_SUCCESS, payload: data.allExercises });
    }
  } catch (error) {
    console.error("Error in fetching exercises", error);
    dispatch({
      type: EXERCISE_ACTION_FAILURE,
      payload: "Error in fetching exercises"
    });
  }
};

export const addExercise = (newExercise) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitnesstrackerapi.pratmbr.repl.co/exercise",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newExercise)
      }
    );
    if (response.status === 201) {
      const data = await response.json();
      dispatch({ type: ADD_EXERCISE_SUCCESS, payload: data.newExercise });
      toast.success("Exercise added successfully.");
    }
  } catch (error) {
    console.error("Error in adding exercise", error);
    dispatch({
      type: EXERCISE_ACTION_FAILURE,
      payload: "Error in adding exercise"
    });
    toast.error("Error in adding exercise.");
  }
};

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://fitnesstrackerapi.pratmbr.repl.co/exercise/${exerciseId}`,
      {
        method: "DELETE"
      }
    );
    if (response.status === 200) {
      dispatch({ type: DELETE_EXERCISE_SUCCESS, payload: exerciseId });
      toast.success("Exercsie deleted successfully.");
    }
  } catch (error) {
    console.error("Error in adding exercise", error);
    dispatch({
      type: EXERCISE_ACTION_FAILURE,
      payload: "Error on deleting exercise."
    });
    toast.error("Error on deleting exercise.");
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitnesstrackerapi.pratmbr.repl.co/food"
    );
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: FETCH_FOOD_SUCCESS, payload: data.allFoods });
    }
  } catch (error) {
    console.error("Error in fetching foods.", error);
    dispatch({ type: FOOD_ACTION_FAILURE, payload: "Error in fetching food." });
  }
};

export const addFood = (newFoodData) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitnesstrackerapi.pratmbr.repl.co/food",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newFoodData)
      }
    );
    if (response.status === 201) {
      const data = await response.json();
      dispatch({ type: ADD_FOOD_SUCCESS, payload: data.newFood });
      toast.success("Food added successfully.");
    }
  } catch (error) {
    console.error("Error in adding food", error);
    dispatch({ type: FOOD_ACTION_FAILURE, payload: "Error in adding food." });
    toast.error("Error in adding food.");
  }
};

export const deleteFood = (foodId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://fitnesstrackerapi.pratmbr.repl.co/food/${foodId}`,
      { method: "DELETE" }
    );
    if (response.status === 200) {
      dispatch({ type: DELETE_FOOD_SUCCESS, payload: foodId });
      toast.success("Deleted food successfully.");
    }
  } catch (error) {
    console.error("Error in deleting food.", error);
    dispatch({ type: FOOD_ACTION_FAILURE, payload: "Error in deleting food." });
    toast.error("Error in deleting food.");
  }
};

export const fetchGoals = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitnesstrackerapi.pratmbr.repl.co/goal"
    );
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: FETCH_GOAL_SUCCESS, payload: data.allGoals });
    }
  } catch (error) {
    console.error("Error in fetching goals.", error);
    dispatch({
      type: GOAL_ACTION_FAILURE,
      payload: "Error in fetching goals."
    });
  }
};

export const addGoal = (newGoalData) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://fitnesstrackerapi.pratmbr.repl.co/goal",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newGoalData)
      }
    );
    if (response.status === 201) {
      const data = await response.json();
      dispatch({ type: ADD_GOAL_SUCCESS, payload: data.newGoal });
      toast.success("New Goal added successfully.");
    }
  } catch (error) {
    console.error("Error in adding new goal.", error);
    dispatch({
      type: GOAL_ACTION_FAILURE,
      payload: "Error in adding new goal."
    });
    toast.error("Error in adding new goal.");
  }
};

export const deleteGoal = (goalId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://fitnesstrackerapi.pratmbr.repl.co/goal/${goalId}`,
      { method: "DELETE" }
    );
    if (response.status === 200) {
      dispatch({ type: DELETE_GOAL_SUCCESS, payload: goalId });
      toast.success("Goal deleted successfully.");
    }
  } catch (error) {
    console.error("Error in deleting goal.", error);
    dispatch({ type: GOAL_ACTION_FAILURE, payload: "Error in deleting goal." });
    toast.error("Error in deleting goal.");
  }
};
