import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }
   

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default function configureStore() {

    const devTools = window && window.devToolsExtension ? window.devToolsExtension() : f => f;

    const middlewares = applyMiddleware(
        thunk
    );

    const finalMiddlewares = compose(
        middlewares,
        devTools
    )
    
    const store = createStore(
        persistedReducer,
        // initialState,
        finalMiddlewares
    )
    let persistor = persistStore(store);
    return { store, persistor }
}