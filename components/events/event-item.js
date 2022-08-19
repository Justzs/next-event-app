/* eslint-disable @next/next/no-img-element */

import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import css from "./event-item.module.css";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={css.item}>
      <img src={"/" + image} alt={title} />
      <div className={css.content}>
        <div className={css.summary}>
          <h2>{title}</h2>
        </div>
        <div className={css.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={css.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={css.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={css.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
