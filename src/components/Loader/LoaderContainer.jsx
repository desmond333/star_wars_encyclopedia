import { useSelector } from 'react-redux';

import Loader from './Loader';

export default function LoaderContainer(props) {
  const state = useSelector((state) => state);

  return <div>{state.people.isLoading && <Loader />}</div>;
}
