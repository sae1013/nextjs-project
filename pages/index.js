//utils
import { getFeaturedEvents } from '../dummy_data';

//Component
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import EventList from '../components/events/EventList';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  React.useEffect(() => {
    console.log('렌더링');
  });

  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}
