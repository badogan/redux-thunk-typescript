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
      const targetUser = state.users.find(user => user.id === action.id);
      const targetIndex = state.users.indexOf(targetUser)
      let usersPart1 = state.users.slice(0,targetIndex)
      let usersPart2 = state.users.slice(targetIndex+1)
      targetUser.name = action.updatedName
      usersPart1.push(targetUser)
      const updatedUsers = usersPart1.concat(usersPart2)
      return {...state, users:updatedUsers}

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
