import { configureStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ducks from './ducks';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(ducks, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
