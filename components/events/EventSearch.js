import { useRef } from 'react';
import Button from '../ui/Button';
import classes from './styles/EventSearch.module.scss';

function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearch(yearInputRef.current.value, monthInputRef.current.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">APR</option>
            <option value="5">May</option>
            <option value="6">JUN</option>
            <option value="7">JUL</option>
          </select>
        </div>
      </div>
      <Button>Search</Button>
    </form>
  );
}

export default EventSearch;
