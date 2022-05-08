import React, {useRef, useState} from "react";

import styles from "../../styles/DisplayShortenLink.module.css";

function DisplayShortenLink(props){

    const [copyStatus, setCopyStatus] = useState(false);

    const shortenURLInput = useRef();

    function clickHander(){
        shortenURLInput.current.select();
        document.execCommand("copy");
        setCopyStatus(true);
    }


    return (
        <div className={styles.DisplayShortenLink}>
            <label htmlFor="shortURL">Shortened URL: </label>
            <input type="text" id="shortURL" value = {props.shortenedURL} ref = {shortenURLInput} readOnly/>
            <button onClick = {clickHander}><i className="fa-solid fa-copy"></i></button>
            <span>{copyStatus ? "Copied!" : ""}</span>
        </div>
    )
}

export default DisplayShortenLink;