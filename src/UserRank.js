import React, { useState } from "react";

const UserRank = () => {
  const [rank, setRank] = useState("");
  const [username, setUserName] = useState();
  const handleRankChange = (e) => {
    setRank(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative p-16 bg-white rounded-lg shadow-lg w-[50%] h-96 ">
        <div className="absolute top-2 right-2 bg-gray-200 text-gray-700 p-2 rounded-lg">
         ID: #123456 
        </div>
        <div className="flex items-start mb-4">
          <div className="w-36 h-36 flex-shrink-0">
            <input type="file" id="upload-photo" className="hidden " />
            <label
              htmlFor="upload-photo"
              className="cursor-pointer block w-full h-full border border-gray-300 rounded-lg flex items-center justify-center bg-sky-400"
            >
              <span className="text-neutral-800 ">
                <img src="" alt="Upload Photo" />
              </span>
            </label>
          </div>
          <div className="ml-4 ">
            <div className=" flex m-2 p-4 space-x-4 font-bold flex align-center item-center mt-8 ">
              <label htmlFor="user-name" className="block text-gray-700 mt-2">
                User Name:
              </label>
              <input
                type="text"
                id="user-name"
                className="w-1/3 p-2 border border-gray-300 rounded "
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-10">
          <p className="text-gray-800 font-bold mb-2 ">
            Congratulations!!
            <b> You have secured rank</b>
          </p>

          <select
            id="rank"
            value={rank}
            onChange={handleRankChange}
            className="ml-2 border border-gray-300 rounded h-max"
          >
            <option value="">Select Rank</option>
            <option value="first">First Rank</option>
            <option value="second">Second Rank</option>
            <option value="third">Third Rank</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserRank;
