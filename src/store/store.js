import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialData from '../initialData';

const data = {
    task: initialData
}

export default function configureStore(initilState = data) {
    return createStore(
        rootReducer,
        initilState,
        window._REDUX_DEVTOOLS_EXTENTIONS__ && window.__REDUX_DEVTOOLS_EXTENTIONS__()
    );
}