import { GetStaticProps, GetStaticPaths } from "next";

import EventContent from "@/components/EventDetail/EventContent";
import EventLogistics from "@/components/EventDetail/EventLogistics";
import EventSummary from "@/components/EventDetail/EventSummary";
import { IEvent, getFeaturedEvents, getEventById } from "@/utils/api";
import ErrorAlert from "@/components/UI/ErrorAlert";

interface Props {
    event?: IEvent;
}

const EventDetailsPage: React.FC<Props> = ({ event }) => {
    if (!event) {
        return <ErrorAlert>
            <p>No Event Found</p>
        </ErrorAlert>
    }

    const { date, description, image, location, title } = event

    return <>
        <EventSummary title={title} />
        <EventLogistics image={image} imageAlt={title} date={date} address={location} />
        <EventContent>
            <p>{description}</p>
        </EventContent>
    </>
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const params = context.params
    const eventId = params?.eventId as string

    const event = await getEventById(eventId);

    return {
        props: {
            event
        },
        revalidate: 30
    }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    const events = await getFeaturedEvents();

    const paths = events.map((event) => ({ params: { eventId: event.id } }))

    return {
        paths,
        fallback: "blocking"
    }
}

export default EventDetailsPage
