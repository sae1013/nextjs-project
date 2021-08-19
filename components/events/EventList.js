import EventItem from './EventItem';
import classes from './styles/EventList.module.scss';

function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
