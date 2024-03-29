
import { useDispatch } from 'react-redux';
import { setFilterAction } from 'store/Filter/filterSlice';
import css from './Filter.module.css'
const Filter = () => {
  const dispatch = useDispatch();
  
   const setFilter = (q) => {
    dispatch(setFilterAction(q))
  }

    const handleSearch = evt => {
    const value = evt.target.value;
    setFilter(value)
  };
  return (
    <>
      <h3>Find contacts by name</h3>
      <input className={css.Input} type="text" onChange={handleSearch} />
    </>
  );
};

export { Filter };
