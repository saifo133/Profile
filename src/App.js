import "./App.css";
import MyPicture from "./Media/About_me_picture.png";
import InstagarmIcon from "./Media/instagramIcon.svg";
import GitHubIcon from "./Media/githubIcon.svg";
import EmailIcon from "./Media/emailIcon (2).svg";
import LinkedinIcon from "./Media/linkedinIcon.svg";
import MyCV from "./Media/Saif_Abu_Matar_CV.pdf";
import LineLevel from "./Media/line_level.png";
import CalenderIcon from "./Media/claenderIcon.svg";
import SoftwareEngineering from './Media/University_Certificate.jpeg';
import TraningCertificate from './Media/Training_Certificate.jpg';
import FullStackCertificate from './Media/Full_Stack_Certificate.jpg';
import { useState } from "react";
function App() {
  const Exp_information = [
    {
      id: 1,
      title: "Department of Statistics (DOS) - Technical Support",
      history: "Nov 2024 - Currently",
      paragraph:
        "During my time in the research department, I played a key role in supporting daily technical operations and ensuring a seamless workflow for all team members.",
      tasks: [
        {
          id: 1,
          task: "Provided technical assistance to researchers and maintained software tools.",
        },
        {
          id: 2,
          task: "Resolved device malfunctions and ensured smooth workflow within the research department.",
        },
        {
          id: 3,
          task: "Delivered daily reports on technical issues and resolutions.",
        },
      ],
      tools: [
        { id: 1, tool: "Microsoft Office" },
        { id: 2, tool: "Word" },
        { id: 3, tool: "Excel" },
        { id: 4, tool: "Outlook" },
      ],
    },
    {
      id: 2,
      title: "KabsetZr - Trainee",
      history: "Jun 2024 - Sep 2024",
      paragraph:
        "During my work in the web development and design team, I contributed to building responsive interfaces, creating visual designs, and collaborating with clients to deliver high-quality digital solutions.",
      tasks: [
        {
          id: 1,
          task: "Designed and developed responsive web interfaces using SP Builder Pro.",
        },
        {
          id: 2,
          task: "Created modern graphic designs with Inkscape and Canva.",
        },
        {
          id: 3,
          task: "Wrote technical website content and collaborated with clients for feedback.",
        },
        {
          id: 4,
          task: "Guided team members and managed tasks using Microsoft Office and Trello.",
        },
      ],
      tools: [
        { id: 1, tool: "SP Builder pro" },
        { id: 2, tool: "HTML" },
        { id: 3, tool: "CSS" },
        { id: 4, tool: "Javascript" },
        { id: 5, tool: "Trello" },
        { id: 6, tool: "Canva" },
        { id: 7, tool: "Inkscap" },
      ],
    },
  ];

  const Foodify_feature = [
    {id:1 , feature: 'Built a responsive recipe web app using React and modern front-end development principles.' },
    {id:2 , feature: 'Utilized React Hooks (useState, useEffect) for efficient state management and API data handling.' },
    {id:3 , feature: 'Implemented dynamic routing and modular components to improve scalability and maintainability.' },
    {id:4 , feature: 'Designed a clean and user-friendly UI/UX with smooth transitions and responsive layouts.' },
    {id:5 , feature: 'Integrated LocalStorage to store user preferences and enhance user experience.' },
    {id:6 , feature: 'feaIntegrated LocalStorage to store user preferences and enhance user experience.ture1' },
    {id:7 , feature: 'Applied version control using Git and GitHub throughout the development process.' },
    {id:8 , feature: 'Followed best practices in code optimization, reusability, and component structure.' },
  ];

  const certificate = [
    {id:1 , title: 'Full Stack Developer', place: 'Al-Hussein Technical University', history:'22/4/2025', certificate: FullStackCertificate},
    {id:2 , title: 'Training Certificate', place: 'KabsetZr', history:'16/6/2025 - 16/9/2025', certificate: TraningCertificate},
    {id:3 , title: 'Software Engineering', place: ' Al Hussein Bin Talal University', history:'2/2021 - 9/2024', certificate: SoftwareEngineering},
  ];

  const[newCertificate , setNewCertificate] = useState(FullStackCertificate);
  const [activeCertificate, setActiveCertificate] = useState(1);

  function ChangeCerificate(id){
    if(id === certificate[0].id){
      setNewCertificate(FullStackCertificate);
      setActiveCertificate(id);
    }else if(id === certificate[1].id){
      setNewCertificate(TraningCertificate);
      setActiveCertificate(id);
    }else{
      setNewCertificate(SoftwareEngineering);
      setActiveCertificate(id);
    }
  }
  return (
    <>
      <main>
        <div className="Navbar-container">
          <h1>SAIF ABU MATAR</h1>
          <div className="menu">
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Experience">Experience</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Education">Education</a>
              </li>
              <li>
                <a href="https">Skills</a>
              </li>
            </ul>
          </div>
          <a href={MyCV} download>
            <button>Download CV</button>
          </a>
        </div>

        <div id="#Home" className="Home">
          <div className="my-picture">
            <img src={MyPicture} alt="me" />
          </div>
          <div className="Introduction">
            <div className="About-me">
              <h3>Hello</h3>
              <h2>
                I'm <span>SAIF ABU MATAR</span>
              </h2>
              <h3>Full Stack Developer</h3>
              <div className="Paragraph">
                <p>
                  Welcome to my personal website
                  <br />
                  This space showcases my journey as a Web Developer,
                  highlighting my projects, skills, and experiences.
                </p>
              </div>
            </div>
            <div className="Social-Media">
              <div className="icon-circle">
                <img src={InstagarmIcon} alt="instagram" />
              </div>
              <div className="icon-circle">
                <img src={GitHubIcon} alt="github" />
              </div>
              <div className="icon-circle">
                <img src={EmailIcon} alt="email" />
              </div>
              <div className="icon-circle">
                <img src={LinkedinIcon} alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="Experience" className="Experience">
        <div className="Experience-intro">
          <h1>
            EXPERIENCE <span>THAT SHAPES MY VISION</span>
          </h1>
          <h2>The path that shaped who I am</h2>
        </div>
        <div className="Experience-container">
          <div className="line-level">
            <img src={LineLevel} alt="line level" />
          </div>

          <div className="experience-cards-column">
            {Exp_information.map((item) => {
              return (
                <div className="create-cards-jobs" key={item.id}>
                  <div className="Experience-jobs">
                    <div className="job-info">
                      <div className="job-title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="job-history">
                        <img src={CalenderIcon} alt="Calender" />
                        <h5>{item.history}</h5>
                      </div>
                    </div>
                    <div className="job-details">
                      <p>{item.paragraph}</p>
                      <ul>
                        {item.tasks.map((item) => {
                          return <li key={item.id}>{item.task}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="job-tools">
                      <ul>
                        {item.tools.map((item) => {
                          return (
                            <li key={item.id}>
                              <div>{item.tool}</div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div id="Projects" className="projects">
        <div className="project-intro">
          <h1><span>A collection of my featured projects.</span></h1>
          <h2>Here you’ll find a selection of projects that highlight my ability to build clean, efficient, and user-focused applications. Each project demonstrates real-world problem-solving, modern development practices, and attention to detail in both functionality and design.</h2>
          <h4>A collection of my featured projects.</h4>
        </div>
        <div className="project-container">
          <div className="project-image">
            <a href="https://saifo133.github.io/Foodify" target="post">
            <div className="logo">
              <h1>Foodify</h1>
            </div>
            </a>
          </div>
          <div className="project-info">
            <div className="project-title">
              <h3>About Project</h3>
              <div className="underline"></div>
              <h1><span>Foodify</span> is a user-friendly recipe app that helps you discover and organize your favorite dishes quickly.</h1>
            </div>
            <div className="project-feature">
              <ul>
                {Foodify_feature.map((item) => {
                  return <li key={item.id}>{item.feature}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Education" id="Education">
        <div className="education-intro">
          <h1>A summary of my<span> education and certifications</span>,<br/>showcasing my skills and qualifications.</h1>
          <p>This section highlights my academic background and professional certifications, reflecting my dedication to continuous learning and development in the field of software engineering.</p>
        </div>
        <div className="education-container">
          <div className="education-info">
            {certificate.map((item) => {
              return (<div className="education-card" key={item.id} style={{backgroundColor: activeCertificate === item.id ? '#FF0BEF' : '#000'}}>
              <h2>{item.title}</h2>
              <h2>{item.place}</h2>
              <h2>{item.history}</h2>
              <button onClick={() => ChangeCerificate(item.id)}>Show Certificate</button>
            </div>)
            })}
          </div>
          <div className="education-image">
            <div className="certificate" style={{backgroundImage : `url(${newCertificate})`}}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
