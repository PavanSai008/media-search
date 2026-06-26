import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setActiveTab,
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let res = [];
          if (activeTab == "photos") {
            let data = await fetchPhotos(query);
            res = data.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          if (activeTab == "videos") {
            let data = await fetchVideos(query);
            res = data.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          dispatch(setResults(res));
        } catch (error) {
          dispatch(setError(error.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="flex justify-center w-full flex-wrap gap-6 overflow-hidden">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
