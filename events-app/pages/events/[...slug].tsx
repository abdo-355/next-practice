import { useRouter } from "next/router";

import EventList from "@/components/Events/Eventlist";
import ResultsTitle from "@/components/Events/ResultsTitle";
import { getFilteredEvents } from "@/data/dummy-data";
import Button from "@/components/UI/Button";
import ErrorAlert from "@/components/UI/ErrorAlert";

const FilteredEvents = () => {
    const router = useRouter();

    const filterData = router.query.slug

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
        return <>
            <ErrorAlert>
                <p className="center">Invalid filter. Please adjust your values</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    const events = getFilteredEvents({ year, month })

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

    const date = new Date(year, month - 1)

    return <>
        <ResultsTitle date={date} />
        <EventList items={events} />
    </>
}

export default FilteredEvents