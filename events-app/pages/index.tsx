import { getFeaturedEvents } from "@/data/dummy-data";
import EventList from "@/components/Events/Eventlist";

const HomePage = () => {
    const featuredEvents = getFeaturedEvents()
    return <div>
        <ul>
            <EventList items={featuredEvents} />
        </ul>
    </div>
}

export default HomePage
