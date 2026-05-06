import LeftSide from "@/components/homepage/news/LeftSide";
import RightSide from "@/components/homepage/news/RightSide";
import { getCategory, getNewsByCategory } from "@/lib/data";
import React from "react";

const NewsByCategoryPage = async ({ params }) => {
  const { id } = await params;
  const data = await getCategory();
  const category = data.data.news_category;

  const data2 = await getNewsByCategory(id);
  const news = data2.data;
  //   console.log(news);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-6">
      <div className="col-span-3">
        <h2 className="mb-4">All categories</h2>

        <LeftSide category={category} activeId={id}></LeftSide>
      </div>
      <div className="col-span-6">
        {news.length > 0 ? (
          news.map((n) => (
            <div className="border mb-3 bg-slate-300" key={n._id}>
              {n.title}
            </div>
          ))
        ) : (
          <p className="text-center text-purple-300 p-6 font-bold">
            No news Available!
          </p>
        )}
      </div>
      <div className="col-span-3">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NewsByCategoryPage;
