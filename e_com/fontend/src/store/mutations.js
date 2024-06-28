// export function setSearchedMeals(state, meals) {
//   state.searchedMeals = meals;
// }

export const setSearchedMeals = (state, meals) => {
  state.searchMeals = meals || [];
};
