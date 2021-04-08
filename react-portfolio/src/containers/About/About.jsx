import React from 'react';
import profile from '../../images/Linkedin_profile';

function About(props) {
    return (
        <div>
            {/* <img className="image" src='https://media2.giphy.com/media/yYCrCYT2YxTDZ7RaGC/giphy.gif?cid=ecf05e471d78d965e42e7c7a0ed32ebc19b16c5ab6206603&rid=giphy.gif&ct=g' alt="profile picture"></img> */}
            <img className="image" src={profile} alt="profile picture"></img>

            <p>Hi! I am Jonathan Garcia!</p>

            <p>I am currently a full stack engineer at ADP.</p>
            
        </div>
    );
}

export default About