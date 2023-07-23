import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import WebProject from '../components/Tabs/WebProject';
import PythonProject from '../components/Tabs/PythonProject';
import DSProject from '../components/Tabs/DSProject';
import MLProject from '../components/Tabs/MLProject';
import Blog from '../components/Tabs/Blog';


function Work() {
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
            <TabList className="flex rounded-t-lg">
                <Tab selectedClassName="bg-slate-500 text-yellow-50 dark:bg-slate-500 dark:text-yellow-50 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-800 mx-auto dark:text-yellow-50 rounded-lg py-2 px-4">
                    Web
                </Tab>
                <Tab selectedClassName="bg-slate-500 text-yellow-50 dark:bg-slate-500 dark:text-yellow-50 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-800 mx-auto dark:text-yellow-50 rounded-lg py-2 px-4">
                    Python
                </Tab>
                <Tab selectedClassName="bg-slate-500 text-yellow-50 dark:bg-slate-500 dark:text-yellow-50 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-800 mx-auto dark:text-yellow-50 rounded-lg py-2 px-4">
                    D S
                </Tab>
                <Tab selectedClassName="bg-slate-500 text-yellow-50 dark:bg-slate-500 dark:text-yellow-50 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-800 mx-auto dark:text-yellow-50 rounded-lg py-2 px-4">
                    M L
                </Tab>
                <Tab selectedClassName="bg-slate-500 text-yellow-50 dark:bg-slate-500 dark:text-yellow-50 py-2 px-4 rounded-t-lg rounded-b-none" className="bg-slate-400 dark:bg-gray-600 hover:bg-teal-600 dark:hover:bg-teal-600 text-gray-800 mx-auto dark:text-yellow-50 rounded-lg py-2 px-4">
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

export default Work