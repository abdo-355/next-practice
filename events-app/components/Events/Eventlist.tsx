import { IEvent } from "@/data/dummy-data"
import EventItem from "./EventItem"
import styles from "./EventList.module.css"

const EventList: React.FC<{ items: IEvent[] }> = ({ items }) => {
    return <ul className={styles.list}>
        {items.map(item =>
            <EventItem key={item.id} item={item} />
        )}
    </ul>
}

export default EventList