import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { productReducer } from "./products/productSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const productPersistConfig = {
  key: "product",
  storage: storage,
  whitelist: ["products"],
};

const rootReducer = combineReducers({
  product: persistReducer(productPersistConfig, productReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;