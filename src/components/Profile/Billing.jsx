const payments = [
  {
    name: "Standard Plan - Feb 2022",
    date: "07 February, 2022",
    amount: "Rs 59.00",
    status: "Complete",
  },
  {
    name: "Standard Plan - Jan 2022",
    date: "09 January, 2022",
    amount: "Rs 59.00",
    status: "Canceled",
  },
  {
    name: "Basic Plan - Dec 2021",
    date: "15 December, 2021",
    amount: "Rs 29.00",
    status: "Complete",
  },
  {
    name: "Basic Plan - Nov 2021",
    date: "14 November, 2021",
    amount: "Rs 29.00",
    status: "Pending",
  },
  {
    name: "Basic Plan - Oct 2021",
    date: "15 October, 2021",
    amount: "Rs 29.00",
    status: "Complete",
  },
];

const Billing = () => {
  return (
    <div className="container py-4">
      <h1 className="py-2 text-2xl font-semibold">Latest Transactions</h1>

      <hr className="mt-4" />
      <div className="mx-auto mt-8 max-w-screen-lg px-2">
        <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
          <p className="flex-1 text-base font-bold text-gray-900">
            Latest Payments
          </p>
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center justify-start sm:justify-end">
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
                >
                  {" "}
                  Sort by:{" "}
                </label>
                <select
                  name=""
                  className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                >
                  <option className="whitespace-no-wrap text-sm">Recent</option>
                  <option className="whitespace-no-wrap text-sm">
                    All Time
                  </option>
                </select>
              </div>
              {/* <button type="button" className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">

                Export to CSV
              </button> */}
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border shadow">
          <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden border-b lg:table-header-group">
              <tr className="">
                <td
                  width="50%"
                  className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                >
                  Invoice
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                  Date
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                  Amount
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                  Status
                </td>
              </tr>
            </thead>
            <tbody className="lg:border-gray-300">
              {payments.map((payment, index) => (
                <tr key={index} className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    {payment.name}
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">
                        {payment.date}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    {payment.date}
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    {payment.amount}
                    <div
                      className={`flex mt-1 ml-auto w-fit items-center rounded-full ${
                        payment.status === "Complete"
                          ? "bg-blue-600"
                          : payment.status === "Canceled"
                          ? "bg-red-200"
                          : "bg-blue-200"
                      } py-1 px-2 text-left font-medium ${
                        payment.status === "Complete"
                          ? "text-white"
                          : payment.status === "Canceled"
                          ? "text-red-500"
                          : "text-blue-500"
                      } lg:hidden`}
                    >
                      {payment.status}
                    </div>
                  </td>
                  <td
                    className={`whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell ${
                      payment.status === "Complete"
                        ? "bg-blue-600 text-white"
                        : payment.status === "Canceled"
                        ? "bg-red-200 text-red-500"
                        : "bg-blue-200 text-blue-500"
                    }`}
                  >
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
