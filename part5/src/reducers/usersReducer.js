const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.payload
    default:
      return state
  }
}
export default usersReducer

export const setUsers = (users) => {
  return { type: 'GET_USERS', payload: users }
}
