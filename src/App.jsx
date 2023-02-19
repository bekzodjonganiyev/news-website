import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { Layout } from "./components";
import { Home, LatestNews, ActualNews, VideoNews, PhotoNews } from "./pages";

import { smallActions } from "./context";

function App() {
  return (
    <div
      className={`w-screen h-screen overflow-x-hidden flex flex-col`}
      onScroll={(e) => smallActions.handleScroll(e.currentTarget.scrollTop)}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<h1 className="">Loading...</h1>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="latest-news"
            element={
              <Suspense fallback={<h1 className="">Loading...</h1>}>
                <LatestNews />
              </Suspense>
            }
          />
          <Route
            path="actual-news"
            element={
              <Suspense fallback={<h1 className="">Loading...</h1>}>
                <ActualNews />
              </Suspense>
            }
          />
          <Route
            path="video-news"
            element={
              <Suspense fallback={<h1 className="">Loading...</h1>}>
                <VideoNews />
              </Suspense>
            }
          />
          <Route
            path="photo-news"
            element={
              <Suspense fallback={<h1 className="">Loading...</h1>}>
                <PhotoNews />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
