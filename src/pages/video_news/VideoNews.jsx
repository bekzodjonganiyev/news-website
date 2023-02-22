import { useEffect, useState } from "react";
import { NewsCard, RecommendContent } from "../../components";

const VideoNews = () => {
  const generateArray = (items) => [...Array.from(Array(items).keys())];
  const [allNews, setAllNews] = useState([]);
  async function getDataAll() {
    try {
      const res = await fetch(`http://localhost:4000/api/news/all`);
      return res.json();
    } catch (err) {
      const e = { message: err.message, error: true, success: false };
      return e;
    }
  }

  useEffect(() => {
    getDataAll().then((res) => setAllNews(res.data));
  }, []);
  return (
    <div className="w-full">
      <div className="container mx-auto w-[90%] flex justify-between gap-5 ">
        <div className="w-9/12 flex flex-wrap gap-5">
          {allNews
            .filter((item) => item.category === "d")
            .map((subItem) => (
              <NewsCard
                key={subItem._id}
                id={subItem}
                video={true}
                inner={true}
                endpoint={subItem._id}
                category={subItem.category}
              />
            ))}
        </div>
        <div className="w-3/12 ">
        <RecommendContent inner={true} url={"news/all"} category={"d"} />
        </div>
      </div>
    </div>
  );
};

export default VideoNews;
