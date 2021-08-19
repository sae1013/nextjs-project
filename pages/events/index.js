import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy_data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events}></EventList>
    </Fragment>
  );
}

export default AllEventsPage;
