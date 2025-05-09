import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ApproveMember, getMemberDetails, getMembersPayments, RemoveMember } from "../../store/Actions/partnerAction";
import { RiCloseFill } from "@remixicon/react";
import { getUsers } from "../../store/Actions/userAction";

function AllMembers() {
  const dispatch = useDispatch();
  const [comploading, setcomploading] = useState(true);
  const [switchComponent, setswitchComponent] = useState("PaidForms")
  const [allPayments, setallPayments] = useState([]);
  const [FAForms, setFAForms] = useState([])
  const [allUsers, setallUsers] = useState([]);
  const [btnLoading, setbtnLoading] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setcomploading(true);
        const response = await dispatch(getMembersPayments());
        const response2 = await dispatch(getUsers());
        setallUsers(response2.users);
        setallPayments(response.payments);
        setcomploading(false);
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setcomploading(true);
        const response = await dispatch(getMemberDetails());
        const filteredMembers = response.members.filter(member =>
          member.financialAidBenefit && member.financialAidCommitment && member.financialAidReason
        );
        setFAForms(filteredMembers);
        setcomploading(false);
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseProfile = () => {
    setSelectedMember(null);
  };

  const filteredPayment = allPayments.filter((payment) =>
    payment.form &&
    (
      (payment.form.name && payment.form.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (payment.form.email && payment.form.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (payment.form.contact && payment.form.contact.includes(searchQuery))
    )
  );
  
  const filteredFAForms = FAForms.filter((data) =>
    (data.name && data.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (data.email && data.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (data.contact && data.contact.includes(searchQuery))
  );

  const ApproveHandler = async (email) => {
    setbtnLoading((prev) => ({ ...prev, [email]: true }));
    dispatch(ApproveMember(email)).finally(() => {
      setbtnLoading((prev) => ({ ...prev, [email]: false }));
    });
    const response = await dispatch(getMembersPayments());
    const response2 = await dispatch(getUsers());
    setallUsers(response2.users);
    setallPayments(response.payments);
  };

  const RemoveHandler = async (email) => {
    setbtnLoading((prev) => ({ ...prev, [email]: true }));
    dispatch(RemoveMember(email)).finally(() => {
      setbtnLoading((prev) => ({ ...prev, [email]: false }));
    });
    const response = await dispatch(getMembersPayments());
    const response2 = await dispatch(getUsers());
    setallUsers(response2.users);
    setallPayments(response.payments);
  };

  return (
    <>
      {comploading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="overflow-hidden font-medium">
          <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
            <p>All payments Details</p>
          </div>{" "}
          <br />
          <div className="w-full flex justify-center mb-5  ">
            <div className="w-1/2 h-10 flex items-center gap-5 pl-10 ">
              <button
                onClick={() => setswitchComponent("PaidForms")}
                className={`px-4 py-2  rounded-lg  font-semibold cursor-pointer ${switchComponent === "PaidForms" ? "bg-black text-white" : "bg-white border-2 text-black border-black"}`}  >Paid Forms</button>
              <button
                onClick={() => setswitchComponent("FinancialAidForms")}
                className={`px-4 py-2  rounded-lg  font-semibold cursor-pointer ${switchComponent === "FinancialAidForms" ? "bg-black text-white" : "bg-white border-2 text-black border-black"}`}  >Financial Aid Forms</button>
            </div>
            <div className="w-1/2 h-10 px-16">
              <input
                type="text"
                placeholder="Search by name, email, or contact"
                value={searchQuery}
                onChange={handleSearch}
                className="px-4 py-2 border rounded-lg w-full"
              />
            </div>
          </div>
          {switchComponent === "PaidForms" ? (
            <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize">
              {filteredPayment.length === 0 ? (
                <p>No Payment found</p>
              ) : (
                <div className="overflow-y-auto h-full pb-10">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100 sticky top-0">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          S.No
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          More Details
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Functionality
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredPayment.slice().reverse().map((payment, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {payment.form.fullName}
                          </td>
                          <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                            {payment.form.email}
                          </td>
                          <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                            {payment.form.contact}
                          </td>
                          <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                            {payment.amount / 100}
                          </td>
                          <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                            <p className={` w-fit py-2 rounded-lg text-white  px-4 ${payment.status === "created"
                              ? "bg-blue-400"
                              : payment.status === "paid"
                                ? "bg-green-500"
                                : payment.status === "cancelled"
                                  ? "bg-red-400"
                                  : ""
                              }`}>
                              {payment.status}

                            </p>
                          </td>
                          <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                            <button
                              className="bg-blue-500 cursor-pointer px-4 py-2 rounded-lg text-white"
                              onClick={() => handleMemberClick(payment.form)}
                            >
                              Click Here
                            </button>
                          </td>
                          {allUsers.map((user, i) => (
                            user.email === payment.useremail && (
                              <td key={i} className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                {btnLoading[user.email] ? (
                                  <button className="bg-gray-500 cursor-pointer px-4 py-2 rounded-lg text-white">
                                    Loading
                                  </button>
                                ) : user.role === "member" ? (
                                  <button
                                    className="bg-red-500 cursor-pointer px-4 py-2 rounded-lg text-white"
                                    onClick={() => RemoveHandler(user.email)}
                                  >
                                    Remove Member
                                  </button>
                                ) : (
                                  <button
                                    className={`px-4 py-2 rounded-lg text-white ${payment.status === "created"
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-green-500 cursor-pointer"
                                      }`}
                                    onClick={() => {
                                      if (payment.status === "paid") {
                                        ApproveHandler(user.email);
                                      }
                                    }}
                                    disabled={payment.status === "created"}
                                  >
                                    {payment.status === "created" ? "Payment Pending" : "Approve Member"}
                                  </button>
                                )}
                              </td>
                            )
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize">
              {filteredFAForms.length === 0 ? (
                <p>No Financial Aid Forms found</p>
              ) : (
                <div className="overflow-y-auto h-full pb-10">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100 sticky top-0">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          S.No
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          More Details
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Functionality
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredFAForms.slice().reverse().map((payment, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {payment.fullName}
                          </td>
                          <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                            {payment.email}
                          </td>
                          <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                            {payment.contact}
                          </td>
                          <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                            <button
                              className="bg-blue-500 cursor-pointer px-4 py-2 rounded-lg text-white"
                              onClick={() => handleMemberClick(payment)}
                            >
                              Click Here
                            </button>
                          </td>
                          {allUsers.map((user, i) => (
                            user.email === payment.email && (
                              <td key={i} className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                {btnLoading[user.email] ? (
                                  <button className="bg-gray-500 cursor-pointer px-4 py-2 rounded-lg text-white">
                                    Loading
                                  </button>
                                ) : user.role === "member" ? (
                                  <button
                                    className="bg-red-500 cursor-pointer px-4 py-2 rounded-lg text-white"
                                    onClick={() => RemoveHandler(user.email)}
                                  >
                                    Remove Member
                                  </button>
                                ) : (
                                  <button
                                    className="bg-green-500 cursor-pointer px-4 py-2 rounded-lg text-white"
                                    onClick={() => ApproveHandler(user.email)}
                                  >
                                    Approve Member
                                  </button>
                                )}
                              </td>
                            )
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>)}
        </div>
      )}




      {/* view more details of members */}
      {selectedMember && (
        <div className="fixed top-0 z-[99] flex flex-col items-center justify-center left-0 w-full h-[100vh] bg-[#00000069]">
          <div className="w-[70%] h-10 flex items-end justify-end">
            <div onClick={handleCloseProfile} className="cursor-pointer rounded-full px-2 py-1 mb-2 bg-white flex items-center">
              <RiCloseFill className="text-xl" />
              Close
            </div>
          </div>
          <div className="w-[70%] h-[70vh] overflow-y-scroll relative bg-white p-5 font-semibold">
            <table className="table-auto w-full">
              <tbody>
                {Object.entries(selectedMember)
                  .filter(([key]) => !["updatedAt", "userid", "_id", "__v", "createdAt"].includes(key))
                  .map(([key, value]) => (
                    <tr key={key}>
                      <td className="border px-4 py-2 capitalize">{key.replace(/_/g, " ")}</td>
                      <td className="border px-4 py-2">
                        {key === "whatsapp_group_link" ? (
                          <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            {value}
                          </a>
                        ) : typeof value === "object" ? (
                          JSON.stringify(value)
                        ) : (
                          value
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default AllMembers;