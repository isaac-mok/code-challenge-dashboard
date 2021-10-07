import { ReactElement } from "react";
import CustomerItem from "../Components/Pages/Dashboard/CustomerItem";
import StatsCard from "../Components/Pages/Dashboard/StatsCard";

export default function Dashboard (): ReactElement {
  const compute = {
    status: function (status: string) {
      let className = ''
      switch (status) {
        case 'Delivered': className = 'bg-green-400 py-1 px-2 rounded-lg text-white font-bold'
        break
        case 'Pending': className = 'bg-yellow-400 py-1 px-2 rounded-lg text-white font-bold'
        break
        case 'Exploded': className = 'bg-red-500 py-1 px-2 rounded-lg text-white font-bold'
      }

      return (
        <span className={className}>
          {status}
        </span>
      )
    }
  }

  const orders = [
    {
      name: 'Star Refrigerator',
      price: '$1200',
      payment: 'Paid',
      status: 'Delivered'
    },
    {
      name: 'Window Coolers',
      price: '$110',
      payment: 'Due',
      status: 'Pending'
    },
    {
      name: 'Speakers',
      price: '$620',
      payment: 'Paid',
      status: 'Exploded'
    }
  ]

  return (
    <div className="px-4 py-4 flex-1 flex flex-col overflow-auto">
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 mb-6">
        <StatsCard stat="1,504" name="Daily Views" />
        <StatsCard stat="80" name="Sales" em />
        <StatsCard stat="284" name="Comments" />
        <StatsCard stat="$7,842" name="Earning" />
      </div>
      <div className="lg:flex flex-1">
        <div className="w-full mb-6 lg:mb-0 lg:w-[70%] bg-white shadow-lg rounded-xl px-4 py-2 mr-4">
          <div className="flex justify-between mb-6">
            <h4 className="text-lg text-primary font-bold">Recent Orders</h4>
            <button className="px-2 bg-primary text-white rounded font-bold hover:shadow-lg">View All</button>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Name</th>
                <th className="text-right py-2">Price</th>
                <th className="text-center py-2">Payment</th>
                <th className="text-right py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={`order-${index}`} className="border-t">
                  <td className="text-left py-2">{order.name}</td>
                  <td className="text-right py-2">{order.price}</td>
                  <td className="text-center py-2">{order.payment}</td>
                  <td className="text-right py-2">{compute.status(order.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full lg:w-[30%] bg-white shadow-lg rounded-xl px-4 py-2">
          <div className="mb-6">
            <h4 className="text-lg text-primary font-bold">Recent Customers</h4>
          </div>
          <ul>
            <CustomerItem name="David" location="Italy" />
            <CustomerItem name="Muhammad" location="India" />
            <CustomerItem name="Amelia" location="France" />
          </ul>
        </div>
      </div>
    </div>
  )
}
