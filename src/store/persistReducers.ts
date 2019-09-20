import { persistReducer } from 'redux-persist';
import { Reducer, AnyAction } from 'redux';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer<any, AnyAction>) => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
