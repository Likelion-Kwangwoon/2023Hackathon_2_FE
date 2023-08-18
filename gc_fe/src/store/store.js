import { configureStore, createAction, createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

export const logIn = createAction("LOGIN");
export const logOut = createAction("LOGOUT");

const initialState = { token: "" };

const persistConfig = {
  key: "root",
  storage,
}
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      state.token = action.payload
    })
    .addCase(logOut, (state) => {
      state.token = ""
    })
})

const rootReducer = combineReducers({
  reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
});


export default store;

