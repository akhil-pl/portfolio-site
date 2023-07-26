import React from 'react'
import ProjectTemplate from '../ProjectTemplate'

import Kanban1 from "../../Images/Projects/Kanban1.png";
import Kanban2 from "../../Images/Projects/Kanban2.png";
import Kanban3 from "../../Images/Projects/Kanban3.png";
import Kanban4 from "../../Images/Projects/Kanban4.png";
import Kanban5 from "../../Images/Projects/Kanban5.png";
import Kanban6 from "../../Images/Projects/Kanban6.png";

import Port1 from "../../Images/Projects/Port1.png";
import Port2 from "../../Images/Projects/Port2.png";
import Port3 from "../../Images/Projects/Port3.png";
import Port4 from "../../Images/Projects/Port4.png";
import Port5 from "../../Images/Projects/Port5.png";

import Ngl1 from "../../Images/Projects/Ngl1.png";
import Ngl2 from "../../Images/Projects/Ngl2.png";
import Ngl3 from "../../Images/Projects/Ngl3.png";
import Ngl4 from "../../Images/Projects/Ngl4.png";
import Ngl5 from "../../Images/Projects/Ngl5.png";

function WebProject() {
    const projects = [
        {
            title: 'Kanban App',
            description: 'This full stack academic project is done as part the Modern Application Development II course. The aim of the project is to build a Kanban app, in which user is able to add & track tasks of their choice. The goal was to reduce the load on server by doing rendering of UI & UX on the client frontend. Meanwhile server should be able to do scheduled jobs or other jobs like sending user triggered emails, caching etc.',
            keyPoints: ['UI with Vue & Vue Components', 'List & Card management using fetch API', 'Chart showing summary of task completion', 'Token based authentication for fetch APIs', 'Daily reminders to complete task via email', 'Able to send pdf monthly report as email', 'Able to send details as csv files on user request', 'Caching of data that do not change frequently'],
            repository: 'https://github.com/akhil-pl/kanban_app',
            link: 'NOT HOSTED',
            images: [{ src: Kanban1, caption: 'Login or Register page' }, { src: Kanban2, caption: 'Home Page of the user' }, { src: Kanban3, caption: 'Summary view of the user' }, { src: Kanban4, caption: 'Remainder mail sent to the user' }, { src: Kanban5, caption: 'Monthly report pdf sent to the user' }, { src: Kanban6, caption: 'Database schema diagram' }],
        },
        {
            title: 'Portfolio App',
            description: 'This is my port folio site. A completely frontend site written in ReactJS and styled using Tailwind CSS',
            keyPoints: ['responsive & Interactive UI', 'Page routing using react-router-dom', 'Tailwind CSS for styling', 'Implemented Dark and light mode', 'Can download resume', 'Able to directly sent message', 'Using animaton icons'],
            repository: 'https://github.com/akhil-pl/portfolio-site',
            link: 'https://www.akhil.pl',
            images: [{ src: Port1, caption: 'Home page' }, { src: Port2, caption: 'Home Page in light mode' }, { src: Port3, caption: 'Contact page with message option' }, { src: Port4, caption: 'Tablet view' }, { src: Port5, caption: 'Mobile view' }],
        },
        {
            title: 'NGL Assesment Project',
            description: 'This evaluation project is done for the NextGrowth Labs recruitment process. The aim of the project is to build a Django app, in which admin is able to add a new app with it\'s details like url, category, subcategory, logo and points for download. And a user should be able to view the apps available, follow the link, earn points by saving a screen shot of the app and view points earned.',
            keyPoints: ['Role based view for Admin and user on login', 'Django REST framewok for implementing APIs', 'Pillow for Image processing', 'VueJS for frontend', 'SQLite database'],
            repository: 'https://github.com/akhil-pl/NGL_assesment_project',
            link: 'https://ngl-project.azurewebsites.net',
            images: [{ src: Ngl1, caption: 'Login View' }, { src: Ngl2, caption: 'Admin View' }, { src: Ngl3, caption: 'User view' }, { src: Ngl4, caption: 'User summary page' }, { src: Ngl5, caption: 'About page' }],
        }
    ];

    return (
        <div className='bg-slate-500 text-yellow-50 p-4 mb-5'>
            <h1 className="text-3xl font-burtons p-4">Web Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
                {projects.map((project, index) => (
                    <ProjectTemplate key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default WebProject