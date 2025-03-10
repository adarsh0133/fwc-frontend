import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createevents,
  getallevents,
  editevents,
  deletevents,
} from "../../store/Actions/adminActions";
import { RiCloseLine, RiDeleteBin2Fill } from "@remixicon/react";

function AllEvents() {
  const dispatch = useDispatch();
  const [allforms, setallforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openPopup, setopenPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const [formData, setformData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    register_link: "",
    thumbnail: null,
  });

  const AddEventHandler = (e) => {
    e.preventDefault();

    // Validation check
    if (
      !formData.title ||
      !formData.date ||
      !formData.time ||
      !formData.location ||
      !formData.register_link ||
      !formData.thumbnail
    ) {
      alert("All fields are required.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("time", formData.time);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("register_link", formData.register_link);

    if (formData.thumbnail) {
      formDataToSend.append("thumbnail", formData.thumbnail);
    }

    setLoading(true);
    if (isEditing) {
      formDataToSend.append("eventid", editId);
      dispatch(editevents(formDataToSend)).then(() => {
        dispatch(getallevents()).then((data) => {
          setallforms(data || []);
          setLoading(false);
        });
      });
    } else {
      dispatch(createevents(formDataToSend)).then(() => {
        dispatch(getallevents()).then((data) => {
          setallforms(data || []);
          setLoading(false);
        });
      });
    }
    setopenPopup(false);
    setIsEditing(false);
    setEditId(null);
    setThumbnailPreview(null);
  };

  const handleEditClick = (form) => {
    setformData({
      title: form.title,
      date: form.date,
      time: form.time,
      location: form.location,
      register_link: form.register_link,
      thumbnail: null, // Reset thumbnail to null for new uploads
    });
    setEditId(form._id);
    setIsEditing(true);
    setopenPopup(true);
    setThumbnailPreview(form.thumbnail.url); // Show existing thumbnail
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setformData({ ...formData, thumbnail: file });
    setThumbnailPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    dispatch(getallevents()).then((data) => {
      setallforms(data || []);
      setLoading(false);
    });
  }, [dispatch]);

  const reversedForms =
    allforms.length > 0 ? [...allforms].reverse() : allforms;

  return (
    <div className="overflow-y-auto h-full">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between h-[10vh] px-10">
            <p className="font-medium text-xl">All Events</p>
            <button
              onClick={() => {
                setformData({
                  title: "",
                  date: "",
                  time: "",
                  location: "",
                  register_link: "",
                  thumbnail: null,
                });
                setIsEditing(false);
                setEditId(null);
                setopenPopup(true);
                setThumbnailPreview(null);
              }}
              className="py-2 px-4 rounded-lg bg-blue-500 font-semibold text-white"
            >
              +Add Event
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200 font-medium">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  register_link
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Functionality
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reversedForms.map((form, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 w-20 h-10">
                      <img
                        src={form.thumbnail.url}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {form
                      ? new Date(form.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                      : "TBD"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {form.time
                      ? new Date(
                        `1970-01-01T${form.time}:00`
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                      : "TBD"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{form.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{form.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{form.register_link}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <button
                      onClick={() => handleEditClick(form)}
                      className="w-20 h-10 bg-purple-300 rounded-lg font-bold whitespace-nowrap text-sm text-gray-800"
                    >
                      Edit
                    </button>
                    <RiDeleteBin2Fill
                      onClick={() => {
                        setLoading(true);
                        dispatch(deletevents(form._id)).then(() => {
                          dispatch(getallevents()).then((data) => {
                            setallforms(data || []);
                            setLoading(false);
                          });
                        });
                      }}
                      className="inline-block text-red-500 cursor-pointer ml-3"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {openPopup && (
        <div className="w-full h-screen bg-[#575757ae] fixed z-[9] top-0 left-0 center">
          <div className="w-[40vw] h-fit bg-white center flex-col justify-evenly relative p-5 rounded-lg">
            <p className="text-xl h-[10%] ">
              {isEditing ? "Edit Event" : "Create Event"}
            </p>
            <RiCloseLine
              onClick={() => setopenPopup(false)}
              className="absolute right-2 top-2 cursor-pointer"
            />
            <form
              className="center flex-col justify-evenly gap-2 h-[80%] "
              action=""
              method="post"
              onSubmit={AddEventHandler}
            >
              <input
                className="w-[20vw] h-10 outline-none rounded-lg border-2 px-5"
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setformData({ ...formData, title: e.target.value })
                }
              />
              <input
                className="w-[20vw] h-10 outline-none rounded-lg border-2 px-5"
                type="date"
                placeholder="Date"
                name="date"
                value={formData.date}
                onChange={(e) =>
                  setformData({ ...formData, date: e.target.value })
                }
              />
              <input
                className="w-[20vw] h-10 outline-none rounded-lg border-2 px-5"
                type="time"
                placeholder="Time"
                name="time"
                value={formData.time}
                onChange={(e) =>
                  setformData({ ...formData, time: e.target.value })
                }
              />
              <input
                className="w-[20vw] h-10 outline-none rounded-lg border-2 px-5"
                type="text"
                placeholder="location"
                name="location"
                value={formData.location}
                onChange={(e) =>
                  setformData({ ...formData, location: e.target.value })
                }
              />
              <input
                className="w-[20vw] h-10 outline-none rounded-lg border-2 px-5"
                type="text"
                placeholder="register_link"
                name="register_link"
                value={formData.register_link}
                onChange={(e) =>
                  setformData({ ...formData, register_link: e.target.value })
                }
              />
              <input
                className="w-[20vw] h-10 outline-none rounded-lg border-2 px-5"
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
              />
              {thumbnailPreview && (
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  className="w-fit h-[20vh] mt-2"
                />
              )}
              {loading ? (
                <div>Loading...</div>
              ) : (
                <button className="py-2 px-4 rounded-lg bg-blue-500 font-semibold text-white">
                  {isEditing ? "Edit" : "Create"}
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllEvents;