import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import DogApi from "../DogApi/DogApi";
import SearchDogBreed from "../SearchDogBreed/SearchDogBreed";

function CustomRoutes() {

    return (
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="random/dog/image" element={<DogApi />} />
        <Route path="dog/breed" element={<SearchDogBreed />} />
        </Routes>
    )
}

export default CustomRoutes;