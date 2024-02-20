import React from "react";
import { Link } from "react-router-dom";

export default function SingleJob({ item }) {
  return (
    <div>
      <table className="md:w-[1000px] w-[500px] mx-auto mt-6">
        <thead>
          <tr className="bg-orange-400 text-center text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3 text-[10px]">Job Title</th>
            <th className="px-5 py-3 text-[10px]">Company Name</th>
            <th className="px-5 py-3 text-[10px]">Work From</th>
            <th className="px-5 py-3 text-[10px]">Location</th>
            <th className="px-5 py-3 text-[10px]">Duration</th>
            <th className="px-5 py-3 text-[10px]">Salary</th>
            <th className="px-5 py-3 text-[10px]"></th>
            <th className="px-5 py-3 text-[10px]"></th>
          </tr>
        </thead>

        <tbody className="text-gray-500 hover:bg-gray-100 transition-all duration-150 ease-in-out cursor-pointer">
          <tr className="text-center">
            <td className="border-b border-gray-200 px-5 py-5 text-sm">
              <p className="whitespace-no-wrap text-center">
                {item?.job_title}
              </p>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="whitespace-no-wrap text-center">
                    {item?.comp_Name}
                  </p>
                </div>
              </div>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item?.Work_From}</p>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item?.location}</p>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item?.job_duration}</p>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item?.salary}</p>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <Link to={`/job/application/${item._id}`}>
                <button className="bg-orange-500 p-2 text-white my-2 w-fit">
                  Applicant Detail
                </button>
              </Link>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <Link to={`/job/${item._id}`}>
                {" "}
                <button className="bg-orange-500 p-2 text-white my-2 w-fit">
                  Job Detail
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
