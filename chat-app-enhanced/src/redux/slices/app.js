import { createSlice } from "@reduxjs/toolkit";

//

import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be contact , stared, shared
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //toggle sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidbarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

//reducer
export default slice.reducer;

//

export function ToggleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSidebarType(type) {
  return async () => {
    dispatch(
      slice.actions.updateSidbarType({
        type,
      })
    );
  };
}
