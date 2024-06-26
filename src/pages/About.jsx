import React, { useLayoutEffect, useRef } from 'react'

import Timeline from '../components/Timeline';


import {
    AiFillGithub,
    AiFillGitlab,
} from 'react-icons/ai';
import {
    BiLogoPython,
    BiLogoJavascript,
    BiLogoDjango,
    BiLogoVuejs,
    BiLogoReact,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJava,
    BiLogoPostgresql,
    BiLogoVisualStudio,
    BiLogoFlask
} from 'react-icons/bi';
import {
    BsFiletypeSql,
    BsGit
} from 'react-icons/bs';
import { FaKaggle } from 'react-icons/fa';
import {
    SiYaml,
    SiRedis,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
    SiPytorch,
    SiScipy,
    SiOpenapiinitiative,
    SiSwagger,
    SiGooglecolab,
    SiWindows11,
    SiLinux,
    SiUbuntu,
    SiMicrosoftazure,
    SiJson,
    SiTailwindcss,
    SiBootstrap,
    SiCodechef,
    SiSqlite,
    SiFastapi,
    SiMysql,
    SiApacheairflow,
    SiDbt,
    SiGnometerminal,
    SiStreamlit
} from 'react-icons/si';
import { VscBlank } from 'react-icons/vsc';

const iconRow = `
flex justify-between m-3 text-2xl md:text-4xl text-gray-800 mx-auto dark:text-yellow-50
`;

const iconLinkStyles = `
hover:text-teal-600 hover:scale-150
`;

const iconTitleStyles = `
z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bg-teal-600 text-white text-xs md:text-sm px-2 py-1 rounded -mt-10 -ml-5 transform -translate-x-1/2 transition-opacity
`;

const iconTitleGroupStyle = `
group inline-block grid place-items-center
`

function About() {
    const navBarRef = useRef(null);

    useLayoutEffect(() => {
        if (navBarRef.current) {
            // Get the position of the navigation bar relative to the viewport
            const navBarRect = navBarRef.current.getBoundingClientRect();

            // Scroll to the top of the navigation bar
            window.scrollTo({
                top: window.scrollY + navBarRect.top - 96,
                behavior: 'smooth', // You can use 'auto' for instant scrolling
            });
        }
    }, []);

    return (
        <section ref={navBarRef} className=' pt-10 px-5'>
            <h3 className=' text-3xl font-burtons py-1 px-5 text-gray-800 mx-auto dark:text-yellow-50'>Hello World!!</h3>
            <div className='grid grid-cols-1 px-5 md:grid-cols-2 gap-10 items-start'>
                <p className=' text-justify text-md leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    A versatile professional with 9+ years of experience, successfully transitioned his
                    career into the field of Programming and Data Science, after being a Civil Engineer for six
                    years. I have completed Dual Diploma in Programming and Data Science from IIT Madras. Currently 
                    employed as Associate Consultant at Cloudium Software Pvt Ltd, concurrently pursuing BS degree in Data Science & Application from 
                    IIT Madras. I am also certified in Azure fundementals and Azure AI fundamentals by Microsoft.
                    <br></br>
                </p>
                <p className=' text-justify text-md leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    Possessing a disciplined and analytical approach, I am eager to apply my diverse skill
                    set in a Data driven Developer role. I bring a unique blend of engineering expertise and
                    programming proficiency to a dynamic and collaborative work environment, fuelled by a
                    continuous commitment to learning & growth.
                    <br></br>
                    <span className=' text-teal-600'>View my coding journey here</span>
                    <div className=' text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-yellow-50'>
                        <a href="https://github.com/akhil-pl" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 hover:text-teal-600">
                            <AiFillGithub className=' hover:scale-150' />
                            <h5 className='text-lg'> GitHub </h5>
                        </a>
                        <a href="https://gitlab.com/akhilplx" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 hover:text-teal-600">
                            <AiFillGitlab className=' hover:scale-150' />
                            <h5 className='text-lg'> GitLab </h5>
                        </a>
                        <a href="https://www.codechef.com/users/akhilplx" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 hover:text-teal-600">
                            <SiCodechef className=' hover:scale-150' />
                            <h5 className='text-lg'> CodeChef </h5>
                        </a>
                        <a href="https://www.kaggle.com/akhilpl" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 hover:text-teal-600">
                            <FaKaggle className=' hover:scale-150' />
                            <h5 className='text-lg'> Kaggle </h5>
                        </a>
                    </div>
                </p>
            </div>
            <p className=' text-justify text-md leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                <span className=' text-teal-600'>Having experience in the following languages or tools:</span>
            </p>
            <div className={iconRow}>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle}><BiLogoPython className={iconLinkStyles} /><span className={iconTitleStyles}>Python</span></a>
                <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoJavascript className={iconLinkStyles} /> <span className={iconTitleStyles}> JavaScript</span> </a>
                <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><SiFastapi className={iconLinkStyles} /> <span className={iconTitleStyles}> FastAPI</span> </a>
                <a href="https://flask.palletsprojects.com/en/2.3.x/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoFlask className={iconLinkStyles} /> <span className={iconTitleStyles}> Flask</span> </a>
                <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoDjango className={iconLinkStyles} /> <span className={iconTitleStyles}> Django</span> </a>
                <a href="https://vuejs.org//" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoVuejs className={iconLinkStyles} /> <span className={iconTitleStyles}> VueJS</span> </a>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoReact className={iconLinkStyles} /> <span className={iconTitleStyles}>ReactJS </span> </a>
                <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoHtml5 className={iconLinkStyles} /> <span className={iconTitleStyles}>HTML5 </span> </a>
            </div>
            <div className={iconRow}>
                <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <BiLogoJava className={iconLinkStyles} /> <span className={iconTitleStyles}> Java</span> </a>
                <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiNumpy className={iconLinkStyles} /> <span className={iconTitleStyles}> NumPy</span> </a>
                <a href="https://pandas.pydata.org//" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiPandas className={iconLinkStyles} /> <span className={iconTitleStyles}> Pandas</span> </a>
                <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiScikitlearn className={iconLinkStyles} /> <span className={iconTitleStyles}> Scikitlearn</span> </a>
                <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiPytorch className={iconLinkStyles} /> <span className={iconTitleStyles}> PyTorch</span> </a>
                <a href="https://scipy.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiScipy className={iconLinkStyles} /> <span className={iconTitleStyles}> SciPy</span> </a>
                <a href="https://www.iso.org/standard/76583.html" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <BsFiletypeSql className={iconLinkStyles} /> <span className={iconTitleStyles}> SQL</span> </a>
                <a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiSqlite className={iconLinkStyles} /> <span className={iconTitleStyles}> SQlite</span> </a>
            </div>
            <div className={iconRow}>
                <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoPostgresql className={iconLinkStyles} /><span className={iconTitleStyles}> Postgresql </span> </a>
                <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><SiMysql className={iconLinkStyles} /><span className={iconTitleStyles}> MySQL </span> </a>
                <a href="https://redis.io/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><SiRedis className={iconLinkStyles} /><span className={iconTitleStyles}> Redis </span> </a>
                <a href="https://github.com/akhil-pl" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><AiFillGithub className={iconLinkStyles} /> <span className={iconTitleStyles}> GitHub </span> </a>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <BiLogoVisualStudio className={iconLinkStyles} /> <span className={iconTitleStyles}> VSCode </span> </a>
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <BsGit className={iconLinkStyles} /> <span className={iconTitleStyles}> Git </span> </a>
                <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiGooglecolab className={iconLinkStyles} /> <span className={iconTitleStyles}> Google Colab </span> </a>
                <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoCss3 className={iconLinkStyles} /> <span className={iconTitleStyles}>CSS </span> </a>
            </div>
            <div className={iconRow}>
                <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiGnometerminal className={iconLinkStyles} /> <span className={iconTitleStyles}> CLI </span> </a>
                <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiMicrosoftazure className={iconLinkStyles} /> <span className={iconTitleStyles}> Azure </span> </a>
                <a href="https://www.json.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiJson className={iconLinkStyles} /> <span className={iconTitleStyles}> JSON </span> </a>
                <a href="https://yaml.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiYaml className={iconLinkStyles} /> <span className={iconTitleStyles}> YAML </span> </a>
                <a href="https://www.openapis.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiOpenapiinitiative className={iconLinkStyles} /> <span className={iconTitleStyles}> OpenAPI </span> </a>
                <a href="https://swagger.io/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiSwagger className={iconLinkStyles} /> <span className={iconTitleStyles}> Swagger </span> </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiTailwindcss className={iconLinkStyles} /> <span className={iconTitleStyles}> Tailind CSS </span> </a>
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiBootstrap className={iconLinkStyles} /> <span className={iconTitleStyles}> Bootstrap </span> </a>
            </div>
            <div className={iconRow}>
                <a href="https://www.microsoft.com/en-in/windows" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiWindows11 className={iconLinkStyles} /> <span className={iconTitleStyles}> Windows </span> </a>
                <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiLinux className={iconLinkStyles} /> <span className={iconTitleStyles}> Linux </span> </a>
                <a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiUbuntu className={iconLinkStyles} /> <span className={iconTitleStyles}> Ubuntu </span> </a>
                <a href="https://streamlit.io/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiStreamlit className={iconLinkStyles} /> <span className={iconTitleStyles}> Streamlit </span> </a>
                <a href="https://airflow.apache.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiApacheairflow className={iconLinkStyles} /> <span className={iconTitleStyles}> Apache Airflow </span> </a>
                <a href="https://www.getdbt.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} > <SiDbt className={iconLinkStyles} /> <span className={iconTitleStyles}> DBT </span> </a>
                <VscBlank />
                <VscBlank />
            </div>

            <h4 className=' pt-10 text-center text-2xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>My Academic and Professional Timeline</h4>
            <Timeline />


        </section>
    )
}

export default About