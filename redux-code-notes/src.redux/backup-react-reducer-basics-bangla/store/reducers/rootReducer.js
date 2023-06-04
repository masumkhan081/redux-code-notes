const initState = {
  count: 10,
};
export default function rootReducer(state = initState, action) {
  if (action.type === "add") {
    return { count: state.count + 1 };
  } else if (action.type === "sub") {
    return { count: state.count - 1 };
  }
  return state;
}
