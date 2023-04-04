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
