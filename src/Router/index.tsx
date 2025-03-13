import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import Home from "../pages/Home"
import Courses from "../pages/Courses"
import Blog from "../pages/Blog";
import EBook from "../pages/EBook";
import FAQ from "../pages/FAQ";
import FreelanceMastery from "../pages/FreelanceMastery";
import Guide from "../pages/Guide";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Youtube from "../pages/Youtube";
import Profile from "../pages/Profile";
import DataDetails from "../pages/DataDetails";

export const router=createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route>
                <Route path="/" element={<Home/>} />
                <Route path="/Courses" element={<Courses/>} />
                <Route path="/Blog" element={<Blog/>} />
                <Route path="/EBook" element={<EBook/>} />
                <Route path="/FAQ" element={<FAQ/>} />
                <Route path="/FreelanceMastery" element={<FreelanceMastery/>} />
                <Route path="/Guide" element={<Guide/>} />
                <Route path="/LogIn" element={<LogIn/>} />
                <Route path="/SignUp" element={<SignUp/>} />
                <Route path="/Youtube" element={<Youtube/>} />
                <Route path="/Profile" element={<Profile/>} />
                <Route path="/data/:id" element={<DataDetails />} />
          </Route>
        </>
    )
);
