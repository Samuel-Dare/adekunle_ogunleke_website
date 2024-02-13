import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Exhibitions = () => {
  const upcomingEvents = [
    {
      title: 'Art Exhibition',
      date: 'March 15, 2024',
      location: 'Art Gallery, USA',
      organizer: 'Art Society of America',
    },
    {
      title: 'Abstract Art Show',
      date: 'April 10, 2024',
      location: 'Modern Art Museum, USA',
      organizer: 'Modern Art Society',
    },
  ];

  const pastEvents = [
    {
      title: 'Modern Art Showcase',
      date: 'January 20, 2024',
      location: 'Contemporary Art Center, USA',
      organizer: 'Contemporary Art Association',
    },
    {
      title: 'Contemporary Art Fair',
      date: 'February 5, 2024',
      location: 'City Exhibition Hall, USA',
      organizer: 'Art Events International',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:px-0">
      <div className="mb-8">
        <h2 className="text-colorBrand mb-4 text-center text-3xl font-semibold">
          Upcoming Exhibitions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 md:mx-auto">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-600 mb-1 flex items-center">
                <FaCalendarAlt className="mr-2 text-sm text-colorBrand2" />
                {event.date}
              </p>
              <p className="text-gray-600 mb-1 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-sm text-colorBrand2" />
                {event.location}
              </p>
              <p className="text-gray-600 text-xs">
                Organized by: {event.organizer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-gray-300 md:px-auto my-8 border-t"></div>

      <div>
        <h2 className="text-colorBrand mb-4 text-center text-3xl font-semibold">
          Past Exhibitions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 md:mx-auto">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-600 mb-1 flex items-center">
                <FaCalendarAlt className="mr-2 text-sm text-colorBrand2" />
                {event.date}
              </p>
              <p className="text-gray-600 mb-1 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-sm text-colorBrand2" />
                {event.location}
              </p>
              <p className="text-gray-600 text-xs">
                Organized by: {event.organizer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
