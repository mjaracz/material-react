import postsReducer from 'molecules/posts/redux/postsSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  // signIn: signInReducer,
  // signUp: signUpReducer,
  posts: postsReducer,
});
