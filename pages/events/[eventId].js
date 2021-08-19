import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy_data';
import Button from '../../components/ui/Button';
import EventSummary from '../../components/events/EventSummary';
import EventLogistics from '../../components/events/EventLogistics';
import EventContent from '../../components/events/EventContent';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found..</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
