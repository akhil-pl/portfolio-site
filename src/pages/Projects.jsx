import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import WebProject from '../components/Tabs/WebProject';
import PythonProject from '../components/Tabs/PythonProject';
import DSProject from '../components/Tabs/DSProject';
import MLProject from '../components/Tabs/MLProject';
import Blog from '../components/Tabs/Blog';


function Projects() {
  return (
    
    <section className=' pt-10 px-5'>
        <div className=' pl-5'>
            <h3 className=' text-3xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>My Projects</h3>
            <p className=' text-justify text-md py-2 leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                Explore My Projects: Showcasing a Collection of Innovative and Diverse Endeavors in Web development,
                 Python Development and Machine Learning
            </p>
        </div>
        <Tabs>
            <TabList className="flex rounded-t-lg text-gray-800 dark:text-yellow-50 text-lg md:text-xl font-bold">
                <Tab selectedClassName="bg-slate-500 text-red-500 dark:bg-slate-500 dark:text-red-500 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 rounded-lg py-2 px-4 md:px-8 cursor-pointer">
                    Web
                </Tab>
                <Tab selectedClassName="bg-slate-500 text-red-500 dark:bg-slate-500 dark:text-red-500 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 rounded-lg py-2 px-4 md:px-8 cursor-pointer">
                    Python
                </Tab>
                <Tab selectedClassName="bg-slate-500 text-red-500 dark:bg-slate-500 dark:text-red-500 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 rounded-lg py-2 px-4 md:px-8 cursor-pointer">
                    D S
                </Tab>
                <Tab selectedClassName="bg-slate-500 text-red-500 dark:bg-slate-500 dark:text-red-500 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 rounded-lg py-2 px-4 md:px-8 cursor-pointer">
                    M L
                </Tab>
                <Tab selectedClassName="bg-slate-500 text-red-500 dark:bg-slate-500 dark:text-red-500 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 rounded-lg py-2 px-4 md:px-8 cursor-pointer">
                    Blog
                </Tab>
            </TabList>

            <TabPanel>
                <WebProject />
            </TabPanel>
            <TabPanel>
                <PythonProject />
            </TabPanel>
            <TabPanel>
                <DSProject />
            </TabPanel>
            <TabPanel>
                <MLProject />
            </TabPanel>
            <TabPanel>
                <Blog />
            </TabPanel>
        </Tabs>
    </section>
    
  )
}

export default Projects