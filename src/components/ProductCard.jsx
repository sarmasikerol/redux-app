import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full rounded-md" />
      <div className="absolute left-0 bottom-0 bg bg-indigo-500 text-white w-full px-2">
        <div className="text-xl font-semibold">{dt?.name}</div>
        <div>{dt?.price}$</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className=" top-0 right-2 absolute"
      >
        <div className="cursor-pointer">
          <BsThreeDots color="black" size={24} />
        </div>

        {openEdit && (
          <div className="bg-indigo-600 border border-white text-white absolute top-5 right-2 p-2 text-sm rounded-md ">
            <div
              onClick={() => dispatch(deleteDataFunc(dt?.id))}
              className="cursor-pointer hover:bg-indigo-800 "
            >
              sil
            </div>
            <div
              onClick={updateFunc}
              className="cursor-pointer hover:bg-indigo-800"
            >
              güncelle
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
