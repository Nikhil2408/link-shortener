import React, {useState} from "react";

import styles from "../../styles/LinkForm.module.css";

function LinkForm(props){

    const [orgURL, setOrgURL] = useState("");

    function changeHandler(eventObj){
        setOrgURL(eventObj.target.value);
    }   

    function submitHandler(eventObj){
        eventObj.preventDefault();
        if(orgURL !== ""){
            props.shortenURL(orgURL);
        }
    }

    return (
        <form onSubmit = {submitHandler} className={styles.LinkForm}>
            <label htmlFor="linkURL">Enter the URL: </label>
            <input type="text" id="linkURL" onChange={changeHandler}/>
            <button>Shorten The URL</button> 
        </form>
    )
}

export default LinkForm;