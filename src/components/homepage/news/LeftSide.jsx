import Link from "next/link";
import React from "react";

const LeftSide = ({ news, activeId }) => {
  return (
    <div className="list-none text-gray-400 space-y-3">
      {news.map((n) => (
        <li
          key={n.category_id}
          className={`${activeId === n.category_id && "font-bold text-black"}`}
        >
          <Link href={`${n.category_id}`} className="block">
            {n.category_name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default LeftSide;
