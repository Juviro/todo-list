const items = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload.item];
    default:
      return state;
  }
};

export default items;
