import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/types';
import { postUpload } from '../redux/actions';

export const useProfile = () => {
  const {
    userProfile,
    signIn: { jwtToken },
    upload,
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onChangeUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    dispatch(postUpload(formData));
  };
  return {
    userProfile,
    jwtToken,
    onChangeUpload,
    upload,
  };
};
