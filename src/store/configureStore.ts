import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { personReducer } from '../view/stepZero/login/state/person';
import thunk from 'redux-thunk'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      form: formReducer,
      person: personReducer
    }),
    composeEnhancers(
      applyMiddleware(
        thunk
      )
    )
  );
  return store;
}
