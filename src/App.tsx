import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Common/Footer";
import { pageNamesData } from "./data/pageNamesData";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={pageNamesData.homePage} />
        <Route path="/blogs" element={pageNamesData.blogsPage} />
        <Route path="/contact" element={pageNamesData.contactPage} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
