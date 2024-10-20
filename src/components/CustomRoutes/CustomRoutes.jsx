import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import DogApi from "../DogApi/DogApi";

function CustomRoutes() {

    return (
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="random/dog/image" element={<DogApi />} />
        </Routes>
    )
}

export default CustomRoutes;