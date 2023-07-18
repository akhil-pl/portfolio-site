import React from 'react'
import Project from '../Project'

import Kanban1 from "../../Images/Projects/Kanban1.png";
import Kanban2 from "../../Images/Projects/Kanban2.png";
import Kanban3 from "../../Images/Projects/Kanban3.png";
import Kanban4 from "../../Images/Projects/Kanban4.png";
import Kanban5 from "../../Images/Projects/Kanban5.png";
import Kanban6 from "../../Images/Projects/Kanban6.png";

function WebProject() {
    const projects = [
        {
          title: 'Kanban App',
          description: 'This academic project is done for the Modern Application Development II course as part of the BSc in Programming and Data Science program offered by IIT Madras. The aim of the project is to build a Kanban app, in which user is able to add & track tasks of their choice. The goal is to reduce the load on server by doing rendering of UI & UX on the client frontend. Meanwhile server should be able to do scheduled jobs or other jobs like sending user triggered emails, caching etc.',
          keyPoints: ['UI with Vue & Vue Components', 'List & Card management using fetch API', 'Chart showing summary of task completion', 'Token based authentication for fetch APIs', 'Daily reminders to complete task via email', 'Able to send pdf monthly report as email', 'Able to send details as csv files on user request', 'Caching of data that do not change frequently' ],
          repository: 'https://github.com/akhil-pl/kanban_app',
          link: 'NOT HOSTED',
          images: [{src: Kanban1, caption: 'Login or Register page' }, {src: Kanban2, caption: 'Home Page of the user'}, {src: Kanban3, caption:'Summary view of the user'}, {src:Kanban4, caption: 'Remainder mail sent to the user'}, {src: Kanban5, caption: 'Monthly report pdf sent to the user'}, {src: Kanban6, caption: 'Database schema diagram'}],
        },
        // Add more projects here...
      ];

  return (
    <div className='bg-slate-500 text-yellow-50'>
        This is from WebProject
        <div>
            <h1 className="text-3xl font-semibold mb-4">My Projects</h1>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    </div>
  )
}

export default WebProject