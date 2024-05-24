import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const donations = useLoaderData();
  const storedDonationIds = getStoredDonations();
  const donationGot = donations.filter((donation) =>
    storedDonationIds.includes(donation.id)
  );

  let yourDonation = 0;
  for (let i = 0; i < donationGot.length; i++) {
    yourDonation += donationGot[i].price;
  }

  let totalDonation = 0;
  for (let i = 0; i < donations.length; i++) {
    totalDonation += donations[i].price;
  }

  const data01 = [
    {
      name: "Total Donation",
      value: totalDonation,
    },
    {
      name: "Your Donation",
      value: yourDonation,
    },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center my-24">
      <ResponsiveContainer width="98%" height={400}>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={153}
            fill="#00C49F"
          >
            <Cell key={`cell-0`} fill="#FF444A" />
            <Cell key={`cell-1`} fill="#00C49F" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex w-fit gap-4 md:gap-14 flex-col md:flex-row justify-between items-center mt-4">
        <div className="flex items-center gap-4">
          <p>Your Donation</p>
          <div className="w-24 h-3 rounded bg-[#00C49F]"></div>
        </div>
        <div className="flex items-center gap-4">
          <p>Total Donation</p>
          <div className="w-24 h-3 rounded bg-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
