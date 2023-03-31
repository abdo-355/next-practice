import { useRouter } from "next/router";

import { getAllEvents } from "@/data/dummy-data";
import EventList from "@/components/Events/Eventlist";
import EventSearch from "@/components/Events/EventSearch";

const EventsPage = () => {
    const router = useRouter()
    const events = getAllEvents();

    const findEventsHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath)
    }

    return <>
        <EventSearch onSearch={findEventsHandler} />
        <EventList items={events} />
    </>
}

export default EventsPage