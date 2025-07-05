import React from 'react';
import './Team.scss';
import defaultphoto from "../../assets/default_photo.jpg";
import tanvi from "../../assets/Team/Tanvi_Indore_Strategic_Advisor.jpg";
import anuj from '../../assets/Team/AnujPatel_IITB_FounderAndCEO.png';
import bhoomi from "../../assets/Team/Bhoomi_IITB_StrategicPartnershipsLead.jpeg";
import divyanshi from "../../assets/Team/Divyanshi_Agrawal_IITB_VisualDesigner.jpeg";
import veera from "../../assets/Team/VeeraVenkat_IITPalakkad_CollegeCounsellingOperationsLead.jpeg";
import vijyusha from "../../assets/Team/Vijyusha_IIT Indore_Data Analyst.jpg";
import aditya from "../../assets/Team/adityanamdeo_iitbhu_dataanalyst.jpg";
import kamalesh from "../../assets/Team/Kamalesh_IITBhilai_HeadOfMarketing.png"

const teamMembers = [
    { iit: "IIT Bombay", name: 'Anuj Patel', role: 'Founder and CEO', img: anuj, url: "https://www.linkedin.com/in/anuj-patel-679550297/" },
    { iit: "IIT Indore", name: 'Tanvi Warvadekar', role: 'Strategic Advisor', img: tanvi, url: "https://www.linkedin.com/in/tanvi-warvadekar/" },
    { iit: "IIT Bhilai", name: 'Kamalesh Swargam', role: 'Head of Marketing', img: kamalesh, url: "https://www.linkedin.com/in/kamaleshswargam/" },
    { iit: "IIT Bombay", name: 'Divyanshi Agrawal', role: 'Visual Designer', img: divyanshi, url: "https://www.linkedin.com/in/divyanshi-agrawal-2aa903366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { iit: "IIT Palakkad", name: 'Veera Venkat', role: 'College Counselling Operations Lead', img: veera, url: "https://www.linkedin.com/in/veera-venkat-408178280/" },
    { iit: "IIT Bombay", name: 'Bhoomi Singhvi', role: 'Strategic Partnerships Lead', img: bhoomi, url: "https://www.linkedin.com/in/bhoomisinghvi/" },
    { iit: "IIT BHU", name: 'Aditya Namdeo', role: 'Data Analyst', img: aditya, url: "https://www.linkedin.com/in/aditya-namdeo-922aaa27b/" },
    { iit: "IIT Indore", name: 'Vijyusha Burra', role: 'Data Analyst', img: vijyusha, url: "https://www.linkedin.com/in/vijyusha-burra-5654a2297/" },
];

// const teamMembers = [
//     { iit: "IIT Bombay", name: 'Anuj Patel', role: 'Founder and CEO', img: anuj, url: "/ComingSoon" },
//     { iit: "IIT Indore", name: 'Tanvi Warvadekar', role: 'Strategic Advisor', img: tanvi, url: "/ComingSoon" },
//     { iit: "IIT Bhilai", name: 'Kamalesh Swargam', role: 'Head of Marketing', img: kamalesh, url: "/ComingSoon" },
//     { iit: "IIT Bombay", name: 'Divyanshi Agrawal', role: 'Visual Designer', img: divyanshi, url: "/ComingSoon" },
//     { iit: "IIT Palakkad", name: 'Veera Venkat', role: 'College Counselling Operations Lead', img: veera, url: "/ComingSoon" },
//     { iit: "IIT Bombay", name: 'Bhoomi Singhvi', role: 'Strategic Partnerships Lead', img: bhoomi, url: "/ComingSoon" },
//     { iit: "IIT BHU", name: 'Aditya Namdeo', role: 'Data Analyst', img: aditya, url: "/ComingSoon" },
//     { iit: "IIT Indore", name: 'Vijyusha Burra', role: 'Data Analyst', img: vijyusha, url: "/ComingSoon" },
// ];


const Team = () => {
    const handleImageError = (e) => {
        e.target.src = defaultphoto;
    };

    return (
        <section className="team" id='Team'>
            <h2 className='Main-Heading'>Meet Our Team</h2>
            <p>Meet the genius minds behind CollegeMap</p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="member">
                        <div className="photo">
                            <img
                                src={member.img}
                                alt={member.name}
                                onError={handleImageError}
                            />
                        </div>
                        <h4>{member.name}</h4>
                        <h5 className='role'>{member.role}</h5>
                        <h6 className='member-itt'>{member.iit}</h6>
                        <a href={member.url} target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0077b7" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg>
                        </a>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Team;
