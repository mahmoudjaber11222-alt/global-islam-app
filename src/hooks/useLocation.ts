import { useContext } from 'react';
import { locationContext } from '../context/LocationProvider';

export default function useLocation() {
  const state = useContext(locationContext);

  if (!state) throw new Error('cant use context here');
  return state;
}
