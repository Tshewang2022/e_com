import axiosClient from "../axiosClient";

// export function searchMeals({ commit }, keyword) {
//   axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
//     // debugger;
//     commit(`setSearchedMeals`, data);
//   });
// }

export const searchMeals = ({ commit }, keyword) => {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit(`setSearchedMeals`, data);
  });
};
