import React from "react";

const getDates = async () => {
  const res = await fetch("https://lis-age.netlify.app/api/");

  if (!res.ok) {
    throw new Error("Something isn't right");
  }
  return res.json();
};

const DatesPage = async () => {
  const dates = await getDates();
  const formattedDates = [];
  const validDates = dates.forEach((item, index) => {
    const readableDate = new Date(
      item.year,
      item.month,
      item.day
    ).toDateString();
    formattedDates.push({
      inputDate: `${item.year}-${item.month}-${item.day}`,
      formattedDate: readableDate,
      createdDate: item.timeCreated,
    });
  });

  const sortedItems = formattedDates.sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  );

  return (
    <React.Fragment>
      <h1 className="text-center text-3xl mt-20 text-[#854dff] font-[900]">
        YOU HAVE {formattedDates.length} DATES
      </h1>
      <div className="mx-auto block w-full max-w-4xl overflow-x-auto border bg-[#fff] mt-8">
        <table className="w-full border-collapse items-center bg-transparent">
          <thead>
            <tr>
              <th className="whitespace-nowrap border-l-0 border-r-0 bg-gray-50 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700">
                USERS
              </th>
              <th className="whitespace-nowrap border-l-0 border-r-0 bg-gray-50 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700">
                INPUT BIRTHDAY
              </th>
              <th className="min-w-140-px whitespace-nowrap border-l-0 border-r-0 bg-gray-50 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700">
                FORMATTED BIRTHDAY
              </th>
              <th className="whitespace-nowrap border-l-0 border-r-0 bg-gray-50 px-4 py-3 text-left align-middle text-xs font-semibold uppercase text-gray-700">
                DATE CREATED
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedItems.map((item, index) => (
              <tr className="text-gray-500" key={index}>
                <th className="whitespace-nowrap border-t-0 p-4 px-4 text-left align-middle text-sm font-normal">
                  User {index + 1}
                </th>
                <td className="whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs font-medium text-gray-900">
                  {item.inputDate}
                </td>
                <td className="whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs">
                  <span className="mr-2 text-xs font-medium">
                    {item.formattedDate}
                  </span>
                </td>
                <td className="whitespace-nowrap border-t-0 p-4 px-4 align-middle text-xs">
                  <span className="mr-2 text-xs font-medium italic">
                    {new Date(item.createdDate).toString().slice(0, 25)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default DatesPage;
