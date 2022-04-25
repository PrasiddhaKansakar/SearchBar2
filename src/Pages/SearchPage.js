import {React,useState} from "react";
import Array from "../Components/Array";
import SearchBar from "../Components/SearchBar";

function SearchPage(){
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return (
    <div>
        <SearchBar handler={inputHandler}/>
        <Array input={inputText}/>
    </div>
    )
}

export default SearchPage;