import React from 'react'
import { Chrono } from "react-chrono";

import { PiStudentFill } from 'react-icons/pi';
import { MdWorkHistory } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';

import diploma from '../Images/About/diploma.png';
import azureF from '../Images/About/azureF.png';
import azureAI from '../Images/About/azureAI.png';

function Timeline() {
    const items = [{
        title: "Jun 2023",
        cardTitle: "Microsoft Certified",
        url: "https://www.credly.com/badges/bdb3f009-6fec-4610-87e4-2cf36cd9233c/linked_in?t=rw1wlj",
        cardSubtitle: "Azure AI Fundamentals",
        cardDetailedText: "Foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.",
        media: {
            type: "IMAGE",
            source: {url: azureAI}
            }
    },
        {
        title: "Jun 2023",
        cardTitle: "Microsoft Certified",
        url: "https://www.credly.com/badges/cd2aa168-722a-4d63-8383-41ba3d9648c1/linked_in?t=rw1wwq",
        cardSubtitle: "Azure Fundamentals",
        cardDetailedText: "Foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
        media: {
            type: "IMAGE",
            source: {url: azureF}
            }
    },
        {
        title: "Jan 2023",
        cardTitle: "Diploma in Programing",
        url: "https://app.onlinedegree.iitm.ac.in/document_verification/673d229e1f307e43cbfccaa67f5047bbbc2d4ad1a70b00bc88bae0998bf60070",
        cardSubtitle: "Finished Diploma in Programming from IIT, Madras",
        cardDetailedText: "This Diploma is part of the BS Program in Data Science and Application",
        media: {
            type: "IMAGE",
            source: {url: diploma}
            }
    },
    {
        title: "Dec 2022",
        cardTitle: "Resigned",
        cardSubtitle: "Resigned from Crescent Construction Company",
        cardDetailedText: "Marks end of my Civil Engineering Career with an experience of 8+ years",
    },
    {
        title: "Jan 2021",
        cardTitle: "BS in Data Science & Application",
        url: "https://study.iitm.ac.in/ds/",
        cardSubtitle: "Joined the online Bs Degree offered by IIT Madras",
        cardDetailedText: "This is a 4 year multilevel online Degree. It consists of a Foundation level, 2 Diplomas, followed by BSc and BS levels.",
    },
    {
        title: "July 2017",
        cardTitle: "Billing Engineer",
        url: "https://www.crescent-construction.com/",
        cardSubtitle: "Promoted as Billing Engineer at CCC",
        cardDetailedText: "Estimation and billing of projects at IISER TVM and VSSC. Rate quoting for new Govt. project tenders (20-50Cr).",
    },
    {
        title: "July 2015",
        cardTitle: "Site Engineer",
        url: "https://www.crescent-construction.com/",
        cardSubtitle: "Joined Crescent Construction Company",
        cardDetailedText: "Managed a work force of 60 men in the Construction of Matsyafed Fish net factory at Muttathara, Trivandrum.",
    },
    {
        title: "June 2014",
        cardTitle: "Site Supervisor",
        cardSubtitle: "Joined Turret Builders",
        cardDetailedText: "Ensure cost effective and timely completion of various individual residential projects in and around Trivandrum.",
    },
    {
        title: "April 2014",
        cardTitle: "BTech in Civil Engineering",
        cardSubtitle: "From Kerala Univercity",
        cardDetailedText: "Comlpeted studies from Heera College of Engineering and Technology.",
    },
    {
        title: "March 2010",
        cardTitle: "Higher Secondary Certification",
        cardSubtitle: "From Kerala Higher Secondary Board",
        cardDetailedText: "HSC in Computer Science with 72% marks.",
    },
    {
        title: "March 2008",
        cardTitle: "Secondary School Leaving Certification",
        cardSubtitle: "From Kerala Education Board",
        cardDetailedText: "Completed with full A+.",
    },
    ];


    return (
        // Tailwind CSS restricts the height at 96
        <div className=' py-5' style={{ height: '500px' }}>
            <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            slideShow
            slideItemDuration={2500}
            slideShowType="slide_from_sides"
            enableOutline
            verticalBreakPoint={580}
            timelinePointDimension={30}
            cardHeight={100}
            theme={{
                primary: '#00897B',
                secondary: '#00897B',
                cardBgColor: '#F7FAFC',
                titleColor: '#00897B',
                titleColorActive: '#2D3748',
                }}
            >
                <div className="chrono-icons">
                    <BsPersonWorkspace className=' text-lg' />
                    <BsPersonWorkspace className=' text-lg' />
                    <PiStudentFill className=' text-lg' />
                    <MdWorkHistory className=' text-lg' />
                    <PiStudentFill className=' text-lg' />
                    <MdWorkHistory className=' text-lg' />
                    <MdWorkHistory className=' text-lg' />
                    <MdWorkHistory className=' text-lg' />
                    <PiStudentFill className=' text-lg' />
                    <PiStudentFill className=' text-lg' />
                    <PiStudentFill className=' text-lg' />
                </div>
            </Chrono>
        </div>
    )
}

export default Timeline