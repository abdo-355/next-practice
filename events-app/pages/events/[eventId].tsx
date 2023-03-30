import { useRouter } from "next/router"

const EventDetailsPage = () => {
    const router = useRouter()
    return <h1>{router.query.eventId} detials page</h1>
}

export default EventDetailsPage