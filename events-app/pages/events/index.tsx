import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import EventList from "@/components/Events/Eventlist";
import EventSearch from "@/components/Events/EventSearch";
import { IEvent, getAllEvents } from "@/utils/api";

interface Props {
    events: IEvent[]
}

const EventsPage: React.FC<Props> = ({ events }) => {
    const router = useRouter()

    const findEventsHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath)
    }

    return <>
        <Head>
            <title>All events</title>
            <meta name="description" content="a list of some exciting events..." />
        </Head>
        <EventSearch onSearch={findEventsHandler} />
        <EventList items={events} />
    </>
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const allEvents = await getAllEvents();

    return {
        props: {
            events: allEvents
        },
        revalidate: 60
    }
}

export default EventsPage