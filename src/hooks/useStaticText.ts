import { useContext } from 'react';
import c from '../context/StaticTextContext';
export default function useStaticText() {
  const values = useContext(c.staticTextContext);
  if (values === 'undefined') {
    throw new Error('cant used here');
  }
  return values;
}
