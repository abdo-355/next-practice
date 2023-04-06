import { GetServerSideProps } from "next";
import Head from "next/head";

import EventList from "@/components/Events/Eventlist";
import ResultsTitle from "@/components/Events/ResultsTitle";
import Button from "@/components/UI/Button";
import ErrorAlert from "@/components/UI/ErrorAlert";
import { IEvent, getFilteredEvents } from "@/utils/api";

interface IEventDate {
    month: number;
    year: number;
}

// the events and the date are only available when the hasError Prop is not set or set to false
type Props = {
    events: IEvent[];
    date: IEventDate;
    hasError?: false;
} | {
    hasError: true;
    events?: IEvent[];
    date?: IEventDate;
}

const FilteredEvents: React.FC<Props> = ({ events, hasError, date }) => {

    if (hasError) {
        return <>
            <ErrorAlert>
                <p className="center">Invalid filter. Please adjust your values</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    if (!events || events.length === 0) {
        return <>
            <ErrorAlert>
                <p className="center">No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }
    const eventDate = new Date(date.year, date.month - 1)

    return <>
        <Head>
            <meta name="description" content={`all events for ${date.month}/${date.year}`} />
            <title>Filtered events</title>
        </Head>
        <ResultsTitle date={eventDate} />
        <EventList items={events} />
    </>
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { params } = context;

    const filterData = params?.slug as string[]

    if (!filterData) {
        return <>
            <ErrorAlert>
                <p className="center">Loading...</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    const year = +filterData[0]
    const month = +filterData[1]

    if (isNaN(year) ||
        isNaN(month) ||
        year > 2030 ||
        year < 2021 ||
        month > 12 ||
        month < 1) {
        return {
            props: { hasError: true }
        }
    }

    const events = await getFilteredEvents({ year, month })

    return {
        props: {
            events,
            date: { year, month }
        }
    }
}

export default FilteredEvents 