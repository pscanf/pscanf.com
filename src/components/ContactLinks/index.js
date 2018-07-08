import React from "react";
import GithubIcon from "react-icons/lib/fa/github-square";
import LinkedinIcon from "react-icons/lib/fa/linkedin-square";
import MailIcon from "react-icons/lib/fa/envelope-square";

import "./index.css";
import ScreenReaderText from "../ScreenReaderText";

export default () => (
    <div className="c-ContactLinks">
        <a
            href="https://github.com/pscanf"
            target="_blank"
            rel="noopener noreferrer"
        >
            <GithubIcon />
            <ScreenReaderText>{"GitHub profile"}</ScreenReaderText>
        </a>
        <a
            href="https://www.linkedin.com/in/pscanf"
            target="_blank"
            rel="noopener noreferrer"
        >
            <LinkedinIcon />
            <ScreenReaderText>{"LinkedIn profile"}</ScreenReaderText>
        </a>
        <a
            className="c-ContactLinks-mail"
            href="mailto:paolo.scanferla@gmail.com"
        >
            <MailIcon />
            <ScreenReaderText>{"Email address"}</ScreenReaderText>
        </a>
    </div>
);
