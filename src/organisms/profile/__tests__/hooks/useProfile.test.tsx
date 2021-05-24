import React from 'react';
import * as ReactRedux from 'react-redux';

import { act, renderHook } from '@testing-library/react-hooks';

import { StoreProvider } from '../../../../utils/unitTest/storeProvider';
import { useProfile } from '../../hooks/useProfile';

describe('hooks/useProfile', () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let spyOnUseEffect;

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(ReactRedux, 'useSelector');
    spyOnUseDispatch = jest.spyOn(ReactRedux, 'useDispatch');
    spyOnUseEffect = jest.spyOn(React, 'useEffect');
  });
  it('should call useEffect, useDispatch and useSelector', () => {
    const { rerender } = renderHook(() => useProfile(), {
      wrapper: StoreProvider,
    });
    act(() => {
      rerender();
    });
    expect(spyOnUseEffect).toHaveBeenCalled();
    expect(spyOnUseDispatch).toHaveBeenCalled();
    expect(spyOnUseSelector).toHaveBeenCalled();
  });
});
