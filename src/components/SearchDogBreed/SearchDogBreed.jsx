import axios from "axios";
import { useEffect, useState } from "react";

function SearchDogBreed() {

    const URL = 'https://dog.ceo/api/breeds/list/all';
    const [isLoad, setIsLoad] = useState(true);
    const [breed, setBreed] = useState([]);
    const [breedImage, setBreedImage] = useState("");
    const [selectedBreed, setSelectedBreed] = useState("");

    async function fetchBreed() {
        setIsLoad(true);
        const response = await axios.get(URL);
        // console.log("breed" + Object.keys(response.data.message));
        setBreed(Object.keys(response.data.message));
    }
    useEffect(() => {
        fetchBreed();
    }, [])


    async function fetchBreedImage(breed) {
        setIsLoad(true);
        const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        console.log(res.data.message);
        setBreedImage(res.data.message);
        setIsLoad(false);
    }

    const handleBreedChange = (e) => {
        const breed = e.target.value;
        setSelectedBreed(breed);
        if (breed) {
            fetchBreedImage(breed); // Fetch image when breed is selected
        }
    };


    return (
        <div>

            <h1>Select a dog breed</h1>
            <select value={selectedBreed} onChange={handleBreedChange}>
                <option value="">Select a breed</option>
                {breed.map((b) => (
                    <option key={b} value={b}>
                        {b}
                    </option>
                ))}
            </select>

            {isLoad ? (
                <p>Loading...</p> ) :
                (
                    breedImage && (
                        <div>
                            <h2>{selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)}</h2>
                            <img src={breedImage} alt={selectedBreed} style={{ width: "300px" }} />
                        </div>
                    )
                )
            }


        </div>
    )
}

export default SearchDogBreed;