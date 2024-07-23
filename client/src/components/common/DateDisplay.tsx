import { DateTime } from "luxon";

const DateDisplay = () => {
  return (
    <p className="date">{DateTime.now().toLocaleString(DateTime.DATE_HUGE)}</p>
  )
}

export default DateDisplay