import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'redux/types';

import { getPostsListThunk } from './redux/postsSlice';

export const usePosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.posts.status);
  const posts = useSelector((state: RootState) => state.posts.list);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getPostsListThunk());
    }
  }, [status, dispatch]);

  return {
    status,
    posts,
  };
};
