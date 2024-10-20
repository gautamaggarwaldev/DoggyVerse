import axios from "axios";
import { useEffect, useState } from "react";
import './DogApi.css'

function DogApi() {

    const DogUrl = 'https://dog.ceo/api/breeds/image/random';

    const [dogImage, setDogImage] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [breed, setBreed] = useState('');
    

    function extractBreedFromUrl(url) {
        const breedPart = url.split("/")[4]; // The breed name is typically the 5th part of the URL
        return breedPart.includes("-")
            ? breedPart.split("-").reverse().join(" ")
            : breedPart;
    };


    async function fetchDogImage() {
        setIsLoading(true);
        const response = await axios.get(DogUrl);
        console.log("data " + response.data.message);
        setDogImage(response.data.message);
        setBreed(extractBreedFromUrl(response.data.message))
        setIsLoading(false);

    }

    useEffect(() => {
        fetchDogImage();
    }, [])



    return (
        <div className="Dog-wrapper">

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <img className="dog-image" src={dogImage} alt="Random Dog" />
                </div>
            )}
            <span>Dog Breed: {breed}</span>
            <button className="next-btn" onClick={fetchDogImage}>Next Dog</button>

        </div>
    )
}

export default DogApi;