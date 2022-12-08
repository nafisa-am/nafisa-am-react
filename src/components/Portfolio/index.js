import React from "react";

import codeQuizImage from "../../assets/small/CodeQuiz.png";
import lyricFinderImage from "../../assets/small/LyricFinder.png";
import designImage from "../../assets/small/designTeam.png";
import empTrackerImage from "../../assets/small/empTracker.png";
import scaCarRentalImage from "../../assets/small/scaCarRental.png";
import pwa19Image from "../../assets/small/Pwa19.png";
import ProjectCard from "../ProjectCard";

function Portfolio() {
  const projectsArray = [
    // {githubLink: "https://blanfried.github.io/lyric-Finder/", imagePath:"../../assets/small/lyricFinder.png",title:"Lyric Finder",description:"As a group of 5 members and we were tasked with creating a real-world front-end application. We chose to create a lyric finder application that also features the top 10 songs as well as artist. We used 2 server side API's; lyrics.ovh to obtain data for the lyrics and last.fm to obtain the charts data."},
    // {githubLink: "https://blanfried.github.io/lyric-Finder/", imagePath:"../../assets/small/lyricFinder.png",title:"Lyric Finder",description:""},
    // {githubLink: "https://blanfried.github.io/lyric-Finder/", imagePath:"../../assets/small/lyricFinder.png",title:"Lyric Finder",description:""},
    // {githubLink: "https://blanfried.github.io/lyric-Finder/", imagePath:"../../assets/small/lyricFinder.png",title:"Lyric Finder",description:""},
    // {githubLink: "https://blanfried.github.io/lyric-Finder/", imagePath:"../../assets/small/lyricFinder.png",title:"Lyric Finder",description:""},
    // {githubLink: "https://blanfried.github.io/lyric-Finder/", imagePath:"../../assets/small/lyricFinder.png",title:"Lyric Finder",description:""},
  ];

  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        {projectsArray.map((project) => {
          return (
            <div>
              <ProjectCard
                githubLink={project.githubLink}
                imagePath={project.imagePath}
                title={project.title}
                description={project.description}
              />
            </div>
          );
        })}

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://nafisa-am.github.io/Code-Quiz-22/">
                {" "}
                <img
                  src={codeQuizImage}
                  className="my-2"
                  style={{ height: "50%", width: "100%" }}
                  alt="Code-Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Code Quiz 22</h4>
              <p>
                In this project I built a timed coding quiz with multiple-choice
                questions. This app will run in the browser and features
                dynamically updated HTML and CSS powered by JavaScript.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://blanfried.github.io/lyric-Finder/">
                {" "}
                <img
                  src={lyricFinderImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="LyricFinder"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Lyric Finder</h4>
              <p>
                As a group of 5 members and we were tasked with creating a
                real-world front-end application. We chose to create a lyric
                finder application that also features the top 10 songs as well
                as artist. We used 2 server side API's; lyrics.ovh to obtain
                data for the lyrics and last.fm to obtain the charts data.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://drive.google.com/file/d/1ZasNPfnAv2_sDlZuKmclGRGaxT40Isb8">
                {" "}
                <img
                  src={designImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TeamProfileGenerator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Newest Team Profile Generator</h4>
              <p>
                For this assignment built a Node.js command-line application
                that takes in information about employees on a software
                engineering team, then generates an HTML webpage that displays
                summaries for each person.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://shrouded-spire-17125.herokuapp.com">
                {" "}
                <img
                  src={pwa19Image}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Pwa19"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>PWA-19</h4>
              <p>
                This is a single page application that meets the PWA criteria.
                It features a number of data persistence techniques that serve
                as replacement in case one of the options is not supported by
                the browser. This application also functions offline.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://morning-journey-04900.herokuapp.com/">
                {" "}
                <img
                  src={scaCarRentalImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="ScaCarRental"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>SCA Car Rental</h4>
              <p>
                This is a full stack application that uses various technologies
                and features. This was projects was built with; Handlebars,
                Sequalize and MySQL to name a few. This application allows the
                user to book a rental car for a period of time and from a
                specific location.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://drive.google.com/file/d/1vJuzhOC1vIXXJNpzMxpy5tvAeFMwBshd/view">
                {" "}
                <img
                  src={empTrackerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="empTracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>EMP Tracker</h4>
              <p>
                A command-line application that allows non-developers to easily
                view and interact with the information stored in the databases
                using content management systems (CMS). This assignments was
                created to manage a company's employee database using Node.js,
                Inquirer and MySQL{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
