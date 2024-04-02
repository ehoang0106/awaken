import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JsonData from "./data/data.json";
import { useEffect, useState } from "react";
import Services from "./components/Services";
import Brands from "./components/Brands";

function App() {

const [landingPageData, setLandingPageData] = useState({});
useEffect(() => {
    setLandingPageData(JsonData);
}, []);

    return (
        <div className="App">
            <Navbar />
            <Header data={landingPageData.Header}/>
            <Services data={landingPageData.Services}/>
            <Brands data={landingPageData.About}/>
            
        </div>
    );
}

export default App;
