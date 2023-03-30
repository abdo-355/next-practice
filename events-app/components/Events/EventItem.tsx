/* eslint-disable @next/next/no-img-element */
import { IEvent } from "@/data/dummy-data";
import styles from "./EventItem.module.css"
import Button from "../UI/Button";
import DateIcon from "../UI/icons/date-icon";
import AddressIcon from "../UI/icons/address-icon";
import ArrowRightIcon from "../UI/icons/arrow-right-icon";

const EventItem: React.FC<{ item: IEvent }> = ({ item }) => {

    // convert the date to a better format
    const readableDate = new Date(item.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const formattedAddress = item.location.replace(", ", "\n")
    const eventLink = "/events/" + item.id

    return <li className={styles.item}>
        <img src={"/" + item.image} alt={item.title} />
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{item.title}</h2>
                <div className={styles.date}>
                    <DateIcon />
                    <time>{readableDate}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={eventLink}>
                    <span>Explore Event</span>
                    <span className={styles.icon}>
                        <ArrowRightIcon />
                    </span>
                </Button>
            </div>
        </div>
    </li>
}

export default EventItem
