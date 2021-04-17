import React from 'react';

import { useSelector } from 'react-redux';

import Sel from '../../store/selectors/selectors';
import Loader from './Loader';

const LoaderContainer = (props) => {
  const state = useSelector((state) => state);

  const isLoaderVisible = Sel.getIsLoaderVisible(state);

  return <div>{isLoaderVisible && <Loader />}</div>;
};

export default LoaderContainer;
