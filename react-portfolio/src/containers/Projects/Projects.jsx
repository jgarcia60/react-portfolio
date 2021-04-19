import React from 'react';
import Project from '../../components/Project/Project';

function Projects(props) {
    return (
        <div>
            <Project
            image={'https://media-exp1.licdn.com/dms/image/C4E0BAQGpM5b5Dk42aQ/company-logo_200_200/0/1552054428528?e=2159024400&v=beta&t=8LF1c47t7gbHHKaaIWbL2Kes7kYN-fgR0BI2J4FI7to'}            
            title="ADP"
            description="At ADP, I work on the Login and Contextual Home Page Team as a Full Stack Engineer. On the front end, I have shipped new features and fixed defects to production. On the backend, I have written JUnit tests that have increased code coverage from 25% to 50%. Furthermore, I have written RESTful APIs using Java and Spring Boot."
            technologies={[
              "React",
              "Express",
              "JavaScript",
              "Java",
              "SpringBoot",
              "Docker",
              "AWS",
            ]}
          />
        </div>
    );
}

export default Projects;