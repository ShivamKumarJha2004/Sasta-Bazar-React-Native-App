import createSagaMiddleware from "redux-saga"
import reduxStorage from "./storage";
import {persistReducer} from 'redux-persist'
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { getDefaultConfig } from "@react-native/metro-config";
import rootSaga from "./rootSaga";
import persistStore from "redux-persist/es/persistStore";
import type { PersistPartial } from 'redux-persist/es/persistReducer';


const sagaMiddleware=createSagaMiddleware();

const persistConfig={
    key:'root',
    storage:reduxStorage,
    whitelist:['cart','account'],
    blacklist:[]



}
const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store= configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
    }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export const persistor=persistStore(store)

export type RootState = ReturnType<typeof store.getState> & {
  _persist?: PersistPartial['_persist'];
};
export type AppDispatch=typeof store.dispatch