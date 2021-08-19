import { getFilteredEvents } from '../../dummy_data';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import ResultsTitle from '../../components/events/ResultsTitle';
import EventList from '../../components/events/EventList';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';

function FilteredEventPage() {
  const router = useRouter();

  if (!router.query.slug) {
    return <p className={'center'}>Loading..</p>;
  }

  const year = +router.query.slug[0];
  const month = +router.query.slug[1];

  if (isNaN(year) || isNaN(month) || year > 2030 || month > 12) {
    return (
      <ErrorAlert>
        <p>Invalid filter input</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const filteredData = getFilteredEvents({ year, month });

  if (!filteredData || filteredData.length === 0) {
    return (
      <Fragment>
        <p>No events that period</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={(year, month)} />
      <EventList items={filteredData}></EventList>
    </Fragment>
  );
}

export default FilteredEventPage;
