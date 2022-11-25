import { createSlice } from "@reduxjs/toolkit"; /*L'import obligatoire*/

const initialState = {
  value: {
    firstName: "",
    userName: "",
    token: "",
  } /*Value de base dans l'exemple un tableau*/,
};

export const userSlice = createSlice({
  name: "user" /*Le nom de ton reducer*/,

  initialState /*Appel de l'état initial*/,
  reducers: {
    addUser: (state, action) => {
      state.value = { firstName: action.payload.firstName };
      state.value = { userName: action.payload.userName };
      state.value = { token: action.payload.token };
    },
  },
});

export const { addUser } = userSlice.actions; /*Expore des actions*/
export default userSlice.reducer;