import { GetStaticProps } from "next";
import Head from "next/head";

import { IEvent, getFeaturedEvents } from "@/utils/api";
import EventList from "@/components/Events/Eventlist";

interface Props {
    featuredEvents: IEvent[];
}

const HomePage: React.FC<Props> = ({ featuredEvents }) => {

    return <div>
        <Head>
            <title>Events App</title>
            <meta name="description" content="discover new events daily..." />
        </Head>
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
        },
        revalidate: 1800
    }
}

export default HomePage
