import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { Link } from "react-router-dom";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <Link to={"/"} className="text-3xl">
        React App
      </Link>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg"
            name=""
          >
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            className="h-10 rounded-lg text-black p-1 outline-none"
            type="text"
            placeholder="Arama yapınız..."
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-800 w-10 h-10 rounded-full grid place-items-center cursor-pointer"
        >
          <MdPostAdd className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
