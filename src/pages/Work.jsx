import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import WebProject from '../components/Tabs/WebProject';
import PythonProject from '../components/Tabs/PythonProject';
import MLProject from '../components/Tabs/MLProject';


function Work() {
  return (
    
    <section>
        <div>
            <h3 className=' text-3xl py-1'>Portfolio</h3>
            <p className=' text-md py-5 leading-8 text-gray-800'>
            An enthusiastic professional, currently in a daring attempt to restart his career in the field of Programming and Data Science, after having 8+ years of experience as a Civil Engineer. After finishing Diploma in Programming, now doing Diploma in Data Science as part of a multilevel online BS Degree offered by IIT, Madras.
            </p>
            <p className=' text-md py-5 leading-8 text-gray-800'>
            Seeking a role as a Developer or Data Analyst, where I can apply my technical skills to develop efficient and innovative software solutions. Eager to learn and grow as a professional in a dynamic and collaborative work environment.
            </p>
        </div>
        <Tabs>
            <TabList className="flex bg-gray-200 rounded-t-lg">
                <Tab className={' px-4 py-2 bg-gray-950 text-blue-500 border border-gray-300 rounded-md hover:bg-blue-200 focus:outline-none'} >Web Development</Tab>
                <Tab className={' px-4 py-2 bg-gray-950 text-blue-500 border border-gray-300 rounded-md hover:bg-blue-200 focus:outline-none'} >Python Development</Tab>
                <Tab className={' px-4 py-2 bg-gray-950 text-blue-500 border border-gray-300 rounded-md hover:bg-blue-200 focus:outline-none'} >Machine Learning</Tab>
            </TabList>

            <TabPanel>
                <WebProject />
            </TabPanel>
            <TabPanel>
                <PythonProject />
            </TabPanel>
            <TabPanel>
                <MLProject />
            </TabPanel>
        </Tabs>
    </section>
    
  )
}

export default Work