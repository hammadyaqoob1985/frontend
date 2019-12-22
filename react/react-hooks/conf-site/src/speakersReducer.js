function speakersReducer(state, action) {

    function updateFavourite(favoriteValue) {
      return state.map((item, index) => {
        if(item.id === action.sessionId) {
          item.favorite = favoriteValue;
          return item;
        }
        return item;
      })
    }
    switch(action.type) {
      case "speakerList": {
        return action.data;
      }
      case "favourite": {
        return updateFavourite(true);
      }
      case "unfavourite": {
        return updateFavourite(false);
      }
      default:
        return state;
    }
  }

  export default speakersReducer;