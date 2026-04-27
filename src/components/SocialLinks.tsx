import React from 'react';
import socials from "../assets/socials";

function SocialLinks() {
    return (
        <span className="inline-flex flex-wrap gap-x-5 gap-y-1 mr-5">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="link-reveal">linkedin</a>
            <a href={socials.github}   target="_blank" rel="noopener noreferrer" className="link-reveal">github</a>
            <a href={socials.twitter}  target="_blank" rel="noopener noreferrer" className="link-reveal">twitter</a>
        </span>
    );
}

export default SocialLinks;
