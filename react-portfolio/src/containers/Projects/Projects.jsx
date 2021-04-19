import React from 'react';
import Project from '../../components/Project/Project';

function Projects(props) {
    return (
        <div>
            <Project
            image={'https://media-exp1.licdn.com/dms/image/C4E0BAQGpM5b5Dk42aQ/company-logo_200_200/0/1552054428528?e=2159024400&v=beta&t=8LF1c47t7gbHHKaaIWbL2Kes7kYN-fgR0BI2J4FI7to'}            
            title="ADP"
            description="As a member of the Transportation team, part of the Supply Chain division at The Home Depot Marietta Technology Center, I built and maintained numerous internal applications. Our biggest 'built-from-scratch' application, VendorPlanEx was responsible for cutting transportation costs on bulk items by nearly 30%, a savings of millions of dollars per year."
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