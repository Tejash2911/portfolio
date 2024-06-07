import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Navbar from "./components/Navbar";
import MoveToTop from "./components/MoveToTop";
import nightsky from "./LottieFiles/night-sky.json";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader color={"#9067C6"} loading={true} size={100} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Navbar />
          <MoveToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
