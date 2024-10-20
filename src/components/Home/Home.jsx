import { Link } from "react-router-dom";

function Home() {

    return (
        <>
            <Link to={'/random/dog/image'}><h1>Random Dog Image Generator</h1></Link>
            <h1>Search Dog by Breed</h1>
        </>
    )
}

export default Home;