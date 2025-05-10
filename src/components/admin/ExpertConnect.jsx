import React, { useEffect, useState } from "react";
import { RiCloseFill } from "@remixicon/react";

const ExpertConnect = () => {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [btnLoading, setBtnLoading] = useState({});
  const [selectedMember, setSelectedMember] = useState(null);

  // Dummy data to simulate API response
  const dummyUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", contact: "1234567890", requestMatching: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", contact: "9876543210", requestMatching: true },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", contact: "4567891230", requestMatching: false },
    { id: 4, name: "Bob Brown", email: "bob@example.com", contact: "7891234560", requestMatching: true },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        setTimeout(() => {
          const matchingRequests = dummyUsers.filter(user => user.requestMatching === true);
          setAllUsers(matchingRequests);
          setLoading(false);
        }, 1000); // Simulate 1-second delay
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseProfile = () => {
    setSelectedMember(null);
  };

  const filteredUsers = allUsers.filter((user) =>
    (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (user.contact && user.contact.includes(searchQuery))
  );

  const sendMatchingHandler = async (email) => {
    setBtnLoading((prev) => ({ ...prev, [email]: true }));
    // Simulate sending email
    setTimeout(() => {
      alert(`Matching email sent to ${email}`);
      setBtnLoading((prev) => ({ ...prev, [email]: false }));
    }, 1000); // Simulate 1-second delay
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="overflow-hidden font-medium">
          <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
            <p>Expert Connect Requests</p>
          </div>
          <br />
          <div className="w-full flex justify-center mb-5">
            <input
              type="text"
              placeholder="Search by name, email, or contact"
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 border rounded-lg w-1/2"
            />
          </div>
          <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize">
            {filteredUsers.length === 0 ? (
              <p>No Matching Requests Found</p>
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
                        Functionality
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.slice().reverse().map((user, index) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                          {btnLoading[user.email] ? (
                            <button className="bg-gray-500 cursor-pointer px-4 py-2 rounded-lg text-white">
                              Loading
                            </button>
                          ) : (
                            <button
                              className="bg-blue-500 cursor-pointer px-4 py-2 rounded-lg text-white"
                              onClick={() => sendMatchingHandler(user.email)}
                            >
                              Send Matching
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
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
                        {typeof value === "object" ? JSON.stringify(value) : value}
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
};

export default ExpertConnect;