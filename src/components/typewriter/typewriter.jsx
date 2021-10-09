import React, {useState, useEffect} from 'react';
import {textAboutTeam} from "../../API/API"
import classes from "./typewriter.module.css"

const Typewriter = () => {
    console.log(textAboutTeam)
    console.log(textAboutTeam[0])

    const [text, setText] = useState("")

    const getDelay = () => {
        const randomDelay = Math.random() * (1 - 0.2 + 1) + 0.2
        return randomDelay
    }

    useEffect(() => {
        if (textAboutTeam.length !== text.length) {
            const delay = getDelay()
            setTimeout(() => {
                setText(text + textAboutTeam[text.length])
            }, delay * 100)
        }
    }, [text])

    return (
        <div className={classes.mainPageText}>
            { text }_
        </div>
    );
};

export default Typewriter;