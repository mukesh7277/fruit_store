import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './rootReducer'
import createSageMiddleware from 'redux-saga'
import rootSaga from './sagas/index'
import {persistStore} from 'redux-persist'


const sagaMiddleware = createSageMiddleware();

export const store= createStore(rootReducer,compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
  export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default {store,persistor};