import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slice/auth';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { favoritesReducer } from './slice/favorite';
import { historyReducer } from './slice/history';
import { searchApi } from './api/searchApi';

const rootReducer = combineReducers({
  favorite: favoritesReducer,
  auth: authReducer,
  history: historyReducer,
  [searchApi.reducerPath]: searchApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'favorite', 'history'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(searchApi.middleware),
});
export const persistor = persistStore(store);
