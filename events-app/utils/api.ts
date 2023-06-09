export interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export const getAllEvents = async () => {
  const res = await fetch(process.env.FIREBASE_EVENTS_URI!);
  const data = await res.json();

  const events: IEvent[] = [];

  Object.keys(data).forEach((key) => {
    events.push({
      id: key,
      ...data[key],
    });
  });

  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id: string) => {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === id);
};

export const getFilteredEvents = async (date: {
  year: number;
  month: number;
}) => {
  const { year, month } = date;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
