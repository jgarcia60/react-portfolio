import React from 'react';
// import profile from 'public/images/Linkedin_profile.jpg';
// import reactPic from 'public/logo192.png';

function About(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="about-header">Jonathan Garcia</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 image-about">
                    <img className="image-about" width="250px" height="250px" src='https://media-exp1.licdn.com/dms/image/C5603AQFq7NrVDK_o4w/profile-displayphoto-shrink_100_100/0/1517562360318?e=1624492800&v=beta&t=tzzR8vVsxnj9KZSq9jk_rmysPk4H0CsJ-rZdK-YTcFc' alt="profile picture"></img>
                </div>
                <div className="col-md-7 about-text">
                    <p>I'm Jonathan Garcia, a problem-solving, customer-focused full stack engineer. 
                    </p>

                    <p>I am currently working at ADP on the Login/Contextual Home Page team for ADP's WorkForceNow customers. While my strengths are 
                        in Java services, RESTful APIs, and React, I am always excited to learn new technologies and solve new problems. 
                    </p>

                    <p>My journey to software engineering is unique. I studied chemical engineering at Georgia Institute of Technology and worked as a process engineer in the pulp and paper industry
                        for a couple years before enrolling in a coding boot camp through Georgia Tech. I am motivated by solving problems and learning on the job, and enjoy working with teams and customers.
                    </p>
                    <p>Outside of work, I enjoy playing sports (especially beach volleyball), working out, hiking, and dogs!</p>
                </div>
            </div>
        </div>
    );
}

export default About