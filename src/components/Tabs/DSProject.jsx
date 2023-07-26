import React from 'react'
import ProjectTemplate from '../ProjectTemplate'

import wine1 from "../../Images/Projects/wine1.png";
import wine2 from "../../Images/Projects/wine2.png";
import wine3 from "../../Images/Projects/wine3.png";
import wine4 from "../../Images/Projects/wine4.png";
import wine5 from "../../Images/Projects/wine5.png";
import wine6 from "../../Images/Projects/wine6.png";

function DSProject() {
    const projects = [
        {
            title: 'Wine Quality Data',
            description: 'The aim of the project is to download data from from the web. Then discover and visualize the data to gain insights. Get familiarized with data by looking at schema and a few rows.',
            keyPoints: ['Histograms of data', 'Learning features of Data', 'Scatter plots', 'Corelation with Heatmap'],
            repository: 'https://github.com/akhil-pl/wine_quality_data_analysis',
            link: 'NOT HOSTED',
            images: [{ src: wine1, caption: 'Feature corelation heat map' }, { src: wine2, caption: 'Colab code' }, { src: wine3, caption: 'Scater matrix corelation' }, { src: wine4, caption: 'Histogram of features' }, { src: wine5, caption: 'Scater plot with seabon library' }, { src: wine6, caption: 'Scater plot with matplotlib' }],
        },
    ];

    return (
        <div className='bg-slate-500 text-yellow-50 p-4 mb-5'>
            <h1 className="text-3xl font-burtons p-4">Data Science Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
                {projects.map((project, index) => (
                    <ProjectTemplate key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default DSProject