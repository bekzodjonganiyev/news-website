import { lazy } from "react";

const Home = lazy(() => import("./home/Home")) ;
const LatestNews = lazy(() => import("./latest_news/LatestNews"));
const ActualNews = lazy(() => import("./actual_news/ActualNews"));
const VideoNews = lazy(() => import("./video_news/VideoNews"));
const PhotoNews = lazy(() => import("./photo_news/PhotoNews"));

export {Home, LatestNews, ActualNews, VideoNews, PhotoNews}