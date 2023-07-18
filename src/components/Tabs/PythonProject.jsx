import React from 'react'
import Project from '../Project'

import Self1 from "../../Images/Projects/Self1.png";
import Self2 from "../../Images/Projects/Self2.png";
import Self3 from "../../Images/Projects/Self3.png";


function PythonProject() {
    const projects = [
        {
            title: 'Self Tracker App',
            description: 'The aim of the project is to build a self-tracking app, in which user is able to track any type of parameters (Numeric, Text, Multiple choice, Rating etc) at any frequency (Hourly, Daily, Weekly, Monthly etc) according to their choice. The goal is to reduce the load on server by doing rendering of UI & UX on the client frontend. Meanwhile server should be able to do scheduled jobs or other jobs like sending user triggered emails, caching etc.',
            keyPoints: ['Flask Backend app', 'RESTFull APIs', 'User trigered jobs using API calls', 'Token based authentication for APIs', 'Sent email remainder according to the frequency selected', 'Able to send pdf monthly report as email', 'Able to send details as csv files on user request', 'Caching of data that do not change frequently'],
            repository: 'https://github.com/akhil-pl/self_tracker_backend_alone',
            link: 'NOT HOSTED',
            images: [{ src: Self1, caption: 'Database schema ER Diagram' }, { src: Self2, caption: 'Open API specification' }, { src: Self3, caption: 'Open API speciication' }],
        },
    ];

    return (
        <div className='bg-slate-500 text-yellow-50 p-4 mb-5'>
            <h1 className="text-3xl font-burtons p-4">Python Projects</h1>
            <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default PythonProject