import { GetStaticProps } from "next";

import { IEvent, getFeaturedEvents } from "@/utils/api";
import EventList from "@/components/Events/Eventlist";

interface Props {
    featuredEvents: IEvent[];
}

const HomePage: React.FC<Props> = ({ featuredEvents }) => {

    return <div>
        <ul>
            <EventList items={featuredEvents} />
        </ul>
    </div>
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const allEvents = await getFeaturedEvents();

    return {
        props: {
            featuredEvents: allEvents
        }
    }
}

export default HomePage
