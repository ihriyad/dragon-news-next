import LeftSide from "@/components/homepage/news/LeftSide";

const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  if (!res.ok) {
    throw new Error("failed to fetch categories");
  }
  return res.json();
};

const Home = async () => {
  const data = await getCategory();
  // console.log(data);
  const news = data.data.news_category;
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="col-span-3">
        <h2 className="mb-4">All categories</h2>

        <LeftSide news={news} activeId={"01"}></LeftSide>
      </div>
      <div className="col-span-6">all news</div>
      <div className="col-span-3">Social</div>
    </div>
  );
};
export default Home;
