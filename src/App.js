import { useState, useEffect } from "react";
import Table from "./components/Table/Table";
import Heading from "./components/UI/Heading";

const App = () => {
  const [data, setData] = useState(null);
  const [lang, setLang] = useState("");
  const [loading, setLoading] = useState(false);

  const getDate = () => {
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);
    return lastWeek.toISOString().slice(0, 10);
  };

  useEffect(async () => {
    const fetchData = async () => {
      setLoading(true);
      const date = getDate();
      const URL = `https://api.github.com/search/repositories?q=created:>${date}+language:${lang}&sort=stars&order=desc`;
      try {
        const response = await fetch(URL);
        const responseData = await response.json();
        const structedData = responseData.items.map((item) => {
          return {
            name: item.full_name,
            stars: item.stargazers_count,
            desc: item.description,
            forks: item.forks_count,
            language: item.language,
          };
        });
        setData(structedData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setData(null);
        console.log(err.response.message);
      }
    };
    fetchData();
  }, [lang]);

  return (
    <div className="h-full min-h-screen bg-slate-100 ">
      <div className="h-60 flex flex-col items-center justify-center gap-y-6">
        <Heading>Get Trending GitHub Repository</Heading>
      </div>
      <div className="mx-auto bg-white w-5/6 min-h-5 p-4">
        {loading && "Loading..."}
        {!loading && !data && (
          <div className="p-4 text-lg">Something went wrong!!</div>
        )}
        {!loading && data && (
          <Table data={data} lang={lang} changeLang={setLang} />
        )}
      </div>
    </div>
  );
};

export default App;
