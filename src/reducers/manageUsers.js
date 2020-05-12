import cuid from "cuid";
export const cuidFn = cuid;

export default function manageUsers(
  state = {
    users: [],
    astronauts: [],
    requesting: false
  },
  action
) {
  switch (action.type) {
    case "ADD_USER":
      const user = { name: action.name, id: cuidFn() };
      return {
        ...state,
        users: [...state.users, user]
      };

    case "DELETE_USER":
      const users = state.users.filter(user => user.id !== action.id);
      return { ...state, users };

    case "UPDATE_USER":
      state.users.find(user => user.id === action.id).name = action.updatedName;
      return {...state}

    case "START_ADDING_ASTRONAUTS_REQUEST":
      return {
        ...state,
        astronauts: [...state.astronauts],
        requesting: true
      };

    case "ADD_ASTRONAUTS":
      return {
        ...state,
        astronauts: action.astronauts,
        requesting: false
      };

    default:
      return state;
  }
}
