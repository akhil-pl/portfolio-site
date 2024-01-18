import React from 'react'
import ProjectTemplate from '../ProjectTemplate'

import docc1 from "../../Images/Projects/docc1.png";
import docc2 from "../../Images/Projects/docc2.png";
import docc3 from "../../Images/Projects/docc3.png";

import Self1 from "../../Images/Projects/Self1.png";
import Self2 from "../../Images/Projects/Self2.png";
import Self3 from "../../Images/Projects/Self3.png";


function PythonProject() {
    const projects = [
        {
            title: 'Data on Cruise Contron (DoCC)',
            description: 'The aim of the project was to develop a ETL tool that even a layman can use without any coding knowledge. The project is in its alpha stage, hosted in a in-premise server for testing. The application is run on a nginex server. The application is able to acces different types of database and get data / Metadata as per the user preference. It can also alteration on the tables using dbt(Data Built Tool) if the credential provedid by the user for connecting is having the required permisions. ',
            keyPoints: ['FastAPI Backend app', 'Data Built Tool (dbt) for database alteration', 'Apache Airflow for scheduling jobs', 'Able to perforn Ingestion, Transformation or Pipeline Jobs', 'APIs for building the app dashboard', 'RESTFull APIs', 'User trigered jobs using API calls'],
            repository: 'https://github.com/akhil-pl/datapmi_project',
            link: 'http://122.165.80.8/docs',
            images: [{ src: docc1, caption: 'Add new connection' }, { src: docc2, caption: 'Join table' }, { src: docc3, caption: 'Get Job status' }],
        },
        {
            title: 'Self Tracker App',
            description: 'The aim of the project was to build a self-tracking app, in which user is able to track any type of parameters (Numeric, Text, Multiple choice, Rating etc) at any frequency (Hourly, Daily, Weekly, Monthly etc) according to their choice. The goal is to reduce the load on server by doing rendering of UI & UX on the client frontend. Meanwhile server should be able to do scheduled jobs or other jobs like sending user triggered emails, caching etc.',
            keyPoints: ['Flask Backend app', 'RESTFull APIs', 'User trigered jobs using API calls', 'Token based authentication for APIs', 'Sent email remainder according to the frequency selected', 'Able to send pdf monthly report as email', 'Able to send details as csv files on user request', 'Caching of data that do not change frequently'],
            repository: 'https://github.com/akhil-pl/self_tracker_backend_alone',
            link: 'NOT HOSTED',
            images: [{ src: Self1, caption: 'Database schema ER Diagram' }, { src: Self2, caption: 'Open API specification' }, { src: Self3, caption: 'Open API speciication' }],
        },
    ];

    return (
        <div className='bg-slate-500 text-yellow-50 p-4 mb-5'>
            <h1 className="text-3xl font-burtons p-4">Python Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
                {projects.map((project, index) => (
                    <ProjectTemplate key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default PythonProject