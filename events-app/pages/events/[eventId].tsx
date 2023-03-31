import { useRouter } from "next/router"

import EventContent from "@/components/EventDetail/EventContent";
import EventLogistics from "@/components/EventDetail/EventLogistics";
import EventSummary from "@/components/EventDetail/EventSummary";
import { getEventById } from "@/data/dummy-data";
import ErrorAlert from "@/components/UI/ErrorAlert";

const EventDetailsPage = () => {
    const router = useRouter()
    const eventId = router.query.eventId

    const event = getEventById(eventId as string)

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

export default EventDetailsPage