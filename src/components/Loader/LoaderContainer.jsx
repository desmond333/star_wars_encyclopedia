import React from 'react';

import { useSelector } from 'react-redux';

import Loader from './Loader';

export default function LoaderContainer(props) {
  const isLoading = useSelector((state) => state.people.isLoading);

  return <div>{isLoading && <Loader />}</div>;
}
