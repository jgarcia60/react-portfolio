import React from 'react';
// import profile from 'public/images/Linkedin_profile.jpg';
// import reactPic from 'public/logo192.png';

function About(props) {

    return (
        <div>
            <img className="image" src='https://media-exp1.licdn.com/dms/image/C5603AQFq7NrVDK_o4w/profile-displayphoto-shrink_100_100/0/1517562360318?e=1624492800&v=beta&t=tzzR8vVsxnj9KZSq9jk_rmysPk4H0CsJ-rZdK-YTcFc' alt="profile picture"></img>
            {/* <img className="image" src={reactPic} alt="profile picture"></img> */}

            <p>Hi! I am Jonathan Garcia!</p>

            <p>I am currently a full stack engineer at ADP.</p>
            
        </div>
    );
}

export default About