import React from 'react'

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
    SiSqlite
} from 'react-icons/si';

const iconRow = `
flex justify-between m-3 text-2xl md:text-4xl text-gray-800 mx-auto dark:text-yellow-50
`;

const iconLinkStyles = `
hover:text-teal-600 hover:scale-150
`;

const iconTitleStyles = `
invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bg-teal-600 text-white text-xs md:text-sm px-2 py-1 rounded mt-2 -ml-6 transform -translate-x-1/2 transition-opacity
`;

const iconTitleGroupStyle = `
group inline-block relative
`

function About() {
    return (
        <section className=' pt-10 px-5'>
            <h3 className=' text-3xl font-burtons py-1 px-5 text-gray-800 mx-auto dark:text-yellow-50'>Hello World!!</h3>
            <div className='grid grid-cols-1 px-5 md:grid-cols-2 gap-10 items-start'>
                <p className=' text-justify text-md leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    An enthusiastic professional, currently in a daring attempt to restart his career in the field
                    of Programming and Data Science, after having 8+ years of experience as a Civil Engineer.
                    After finishing Diploma in Programming, now doing Diploma in Data Science as part of
                    multilevel online BS Degree in Data Science and Application offered by IIT, Madras.
                    <br></br>
                </p>
                <p className=' text-justify text-md leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                    Seeking a role as a Developer or Data Analyst, where I can apply my technical skills
                    to develop efficient and innovative software solutions. Eager to learn and grow as a
                    professional in a dynamic and collaborative work environment.
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
                    </div>
                </p>
            </div>
            <p className=' text-justify text-md leading-8 text-gray-800 mx-auto dark:text-yellow-50 '>
                <span className=' text-teal-600'>Having experience in the following languages or tools:</span>
            </p>
            <div className={iconRow}>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle}><BiLogoPython className={iconLinkStyles} /><span className={iconTitleStyles}>Python</span></a>
                <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoJavascript className={iconLinkStyles} /> <span className={iconTitleStyles}> JavaScript</span> </a>
                <a href="https://flask.palletsprojects.com/en/2.3.x/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoFlask className={iconLinkStyles} /> <span className={iconTitleStyles}> Flask</span> </a>
                <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoDjango className={iconLinkStyles} /> <span className={iconTitleStyles}> Django</span> </a>
                <a href="https://vuejs.org//" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoVuejs className={iconLinkStyles} /> <span className={iconTitleStyles}> VueJS</span> </a>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoReact className={iconLinkStyles} /> <span className={iconTitleStyles}>ReactJS </span> </a>
                <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoHtml5 className={iconLinkStyles} /> <span className={iconTitleStyles}>HTML5 </span> </a>
                <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noopener noreferrer" className={iconTitleGroupStyle} ><BiLogoCss3 className={iconLinkStyles} /> <span className={iconTitleStyles}>CSS </span> </a>
            </div>
            <div className={iconRow}>
                <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" title="Java"><BiLogoJava className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer" title="NumPy"> <SiNumpy className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://pandas.pydata.org//" target="_blank" rel="noopener noreferrer" title="Pandas"> <SiPandas className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer" title="Scikitlearn"> <SiScikitlearn className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" title="PyTorch"> <SiPytorch className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://scipy.org/" target="_blank" rel="noopener noreferrer" title="SciPy"> <SiScipy className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://www.iso.org/standard/76583.html" target="_blank" rel="noopener noreferrer" title="SQL"> <BsFiletypeSql className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer" title="SQlite"> <SiSqlite className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
            </div>
            <div className={iconRow}>
                <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" title="Postgresql"><BiLogoPostgresql className={iconLinkStyles} /><span className={iconTitleStyles}> </span> </a>
                <a href="https://redis.io/" target="_blank" rel="noopener noreferrer" title="Redis"><SiRedis className={iconLinkStyles} /><span className={iconTitleStyles}> </span> </a>
                <a href="https://github.com/akhil-pl" target="_blank" rel="noopener noreferrer" title="GitHub"><AiFillGithub className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" title="VSCode"> <BiLogoVisualStudio className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" title="Git"> <BsGit className={iconLinkStyles} /> </a>
                <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer" title="Google Colab"> <SiGooglecolab className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://www.microsoft.com/en-in/windows" target="_blank" rel="noopener noreferrer" title="Windows"> <SiWindows11 className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer" title="Linux"> <SiLinux className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
            </div>
            <div className={iconRow}>
                <a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer" title="Ubuntu"><SiUbuntu className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" title="Azure"> <SiMicrosoftazure className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://www.json.org/" target="_blank" rel="noopener noreferrer" title="JSON"> <SiJson className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://yaml.org/" target="_blank" rel="noopener noreferrer" title="YAML"> <SiYaml className=' hover:text-teal-600 hover:scale-150' /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://www.openapis.org/" target="_blank" rel="noopener noreferrer" title="OpenAPI"> <SiOpenapiinitiative className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://swagger.io/" target="_blank" rel="noopener noreferrer" title="Swagger"> <SiSwagger className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailind CSS"> <SiTailwindcss className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" title="Bootstrap"> <SiBootstrap className={iconLinkStyles} /> <span className={iconTitleStyles}> </span> </a>
            </div>

            <h4 className=' pt-10 text-center text-2xl font-burtons py-1 text-gray-800 mx-auto dark:text-yellow-50'>My Academic and Professional Timeline</h4>
            <Timeline />


        </section>
    )
}

export default About