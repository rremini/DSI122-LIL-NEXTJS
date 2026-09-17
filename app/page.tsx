import news from "../json/news.json";

export default function Home() {
  return (
    <div className="bg-white py-6 px-10">
      <div className="grid grid-cols-3 gap-4">
        {news.newsInfo.map((newItems) => (
          <div className="bg-white border-2 border-gray-200 p-4 rounded-lg space-y-2">
            <h2 className="text-lg font-semibold">{newItems.title}</h2>
            <p className="text-gray-700 line-clamp-3">{newItems.description}</p>
            <button className="bg-blue-300 p-3 rounded-lg">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
