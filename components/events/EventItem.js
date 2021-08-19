import React from 'react';
import Link from 'next/link';
import classes from './styles/EventItem.module.scss';
import Button from '../ui/Button';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import ArrowIcon from '../icons/arrow-right-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const formmatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title}></img>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formmatedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
