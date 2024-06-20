
import React from 'react';
import './Home.css'; 

function Home() {
 
  const projects = [
    { 
      id: 1, 
      title: 'Ecor', 
      description: `Introducing ECOR: Holistic Wellness Solution

Smart Integration:
Stand out with seamless smartwatch data integration.
Tailor personalized nutrition and fitness plans based on individual health metrics.

Keto Focus:
Cater to ketogenic diets with precise ketone monitoring.
Provide a comprehensive health tracking system for a holistic approach.

Teamwork Wins:
Our awesome team is all about bringing new ideas to life!
We work together to make sure everyone's doing well and feeling good.

Distinctive Features:
Nutritionist Consultations: Access expert advice for personalized wellness.
Personalized Plans: Tailor fitness routines and dietary guidance.
Recipe Generator and Healthy Recipes: Practical tools for a healthier lifestyle.` 
    },
    { 
      id: 2, 
      title: 'B.Tech CSE Admission Portal', 
      description: `A no-code Wix website designed to streamline the B.Tech CSE admission process. It offers program details, application guidelines, an online form, and important dates, providing a seamless experience for prospective students.` 
    },
    { 
      id: 3, 
      title: 'Elite Time', 
      description: `Elite Time is a Figma design prototype for a premium watch shopping app. It features an elegant interface, detailed product pages, advanced search filters, a wishlist, and a seamless checkout process. Designed to provide a sophisticated and intuitive shopping experience.` 
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
