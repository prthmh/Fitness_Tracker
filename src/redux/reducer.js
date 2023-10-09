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

const initialState = {
  exercises: [],
  foods: [],
  goals: [],
  exerciseError: null,
  foodError: null,
  goalError: null
};

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXERCISE_SUCCESS:
      return { ...state, exercises: action.payload };
    case ADD_EXERCISE_SUCCESS:
      return { ...state, exercises: [...state.exercises, action.payload] };
    case DELETE_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: state.exercises.filter(
          (excercise) => excercise._id !== action.payload
        )
      };
    case EXERCISE_ACTION_FAILURE:
      return { ...state, exerciseError: action.payload };
    case FETCH_FOOD_SUCCESS:
      return { ...state, foods: action.payload };
    case ADD_FOOD_SUCCESS:
      return { ...state, foods: [...state.foods, action.payload] };
    case DELETE_FOOD_SUCCESS:
      return {
        ...state,
        foods: state.foods.filter((food) => food._id !== action.payload)
      };
    case FOOD_ACTION_FAILURE:
      return { ...state, foodError: action.payload };
    case FETCH_GOAL_SUCCESS:
      return { ...state, goals: action.payload };
    case ADD_GOAL_SUCCESS:
      return { ...state, goals: [...state.goals, action.payload] };
    case DELETE_GOAL_SUCCESS:
      return {
        ...state,
        goals: state.goals.filter((goal) => goal._id !== action.payload)
      };
    case GOAL_ACTION_FAILURE:
      return { ...state, goalError: action.payload };
    default:
      return state;
  }
};
