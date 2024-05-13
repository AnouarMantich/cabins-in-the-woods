import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;
  //   2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //   3.
  const checkins = confirmedStays.length;
  //   4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="booking"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="sales"
        color="green"
        icon={<FaDollarSign />}
        value={formatCurrency(sales)}
      />{" "}
      <Stat
        title="check ins"
        color="indigo"
        icon={<FaCalendarAlt />}
        value={checkins}
      />{" "}
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
