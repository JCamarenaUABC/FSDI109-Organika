//reducer: a simple fn that receives state and action, and return a new state

const todoReducer = (slice = [], action) => {
  switch (action.type) {
    case "TODO_ACTION":
      var copy = [...slice];
      copy.push(action.payload);
      return copy;

    default:
      return slice;
  }
};

export default todoReducer;
