"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCheck,
  faBars,
  faHouse,
  faChessBoard,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ changeFilter }) => {
  const [path, setPath] = useState(false);
  const pathname = usePathname();

  const handlePath = () => {
    if (pathname === "/dashboard") {
      setPath(true);
    }
  };

  useEffect(() => {
    handlePath();
  });

  return (
    <div className="flex flex-col">
      <div>
        <p className="absolute top-[57px] text-indigo-950 pl-5 font-semibold text-[20px]">
          Daily <br/> <span className="text-[25px]">Planning</span>
        </p>
      </div>
      <div className="flex flex-col items-start gap-4 pl-5 text-indigo-950 sm:w-1/3 xl:w-1/5">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "border-b-2 border-b-black flex items-center"
              : "flex items-center"
          }
        >
          <FontAwesomeIcon icon={faHouse} className="p-2" />
          Home
        </Link>
        <Link
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "border-b-2 border-b-black flex items-center"
              : "flex items-center"
          }
        >
          <FontAwesomeIcon icon={faChessBoard} className="p-2" />
          Dashboard
        </Link>
      </div>

      {path && (
        <div className="pl-10 flex flex-col items-start gap-1 pt-4">
          <button
            className="text-indigo-950 flex items-center"
            onClick={() => {
              changeFilter("all");
            }}
          >
            <FontAwesomeIcon icon={faBars} className="p-2" />
            All
          </button>
          <button
            className="text-indigo-950 flex items-center"
            onClick={() => {
              changeFilter("active");
            }}
          >
            <FontAwesomeIcon icon={faBolt} className="p-2" />
            Active
          </button>
          <button
            className="text-indigo-950 flex items-center"
            onClick={() => {
              changeFilter("completed");
            }}
          >
            <FontAwesomeIcon icon={faCheck} className="p-2" />
            Complete
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
