import {React} from "react";
import TextField from "@mui/material/TextField";

function SearchBar(props){
    return (<TextField
        onChange={props.handler}
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"/>)
}

export default SearchBar;
