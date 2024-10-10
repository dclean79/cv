import "./App.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import SkillListItem from "./components/SkillListItem/SkillListItem";
import SchoolIcon from "@mui/icons-material/School";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="section">
          <div className="head">
            <h1>Krzysztof Dmyszewicz</h1>
            <em>Fullstack Developer</em>
          </div>
          <div className="avatar">
            <img src="./kd.png" alt="" />
          </div>
        </div>
        <div className="section">
          <h2>Bio</h2>
          <ul>
            <li>
              <div className="icon">
                <EmailIcon />
              </div>
              <div className="desc">
                <a href="mailto:krzysztof.dmyszewicz@gmail.com">
                  krzysztof.dmyszewicz@gmail.com
                </a>
              </div>
            </li>
            <li>
              <div className="icon">
                <PhoneAndroidIcon />
              </div>
              <div className="desc">
                <a href="tel:+48789975125">+48 789 975 125</a>
              </div>
            </li>
            <li>
              <div className="icon">
                <LocationOnIcon />
              </div>
              <div className="desc">
                <span>Stocznia 4/4, 55-320 Malczyce</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <CakeIcon />
              </div>
              <div className="desc">
                <span>March 16, 1979</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Education</h2>
          <ul>
            <li>
              <div className="icon">
                <SchoolIcon />
              </div>
              <div className="desc">
                <p>Master (4.76)</p>
                <p>University of Wroclaw,</p>
                <p>Geology 1999 - 2005</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Skills</h2>
          <ul>
            <SkillListItem name="Frontend (browsers)" points={4} />
            <SkillListItem
              name="Backend (node / ngnix / apache) / API"
              points={3}
            />
            <SkillListItem name="Linux" points={3} />
            <SkillListItem name="Clean Code" points={4} />
            <SkillListItem name="Design Patterns" points={3} />
            <SkillListItem name="OOP" points={4} />
            <SkillListItem name="HTML" points={5} />
            <SkillListItem name="CSS" points={4} />
            <SkillListItem name="GIT" points={4} />
            <SkillListItem name="JavaScript" points={4} />
            <SkillListItem name="Typescript" points={4} />
            <SkillListItem name="React" points={4} />
            <SkillListItem name="Angular 2+" points={3} />
            <SkillListItem name="PHP / Symfony / Zend" points={3} />
            <SkillListItem name="SQL" points={4} />
            <SkillListItem name="MongoDB" points={3} />
            <SkillListItem name="Docker" points={2} />
            <SkillListItem name="Unit Tests (Jest)" points={4} />
            <SkillListItem name="CI/CD" points={2} />
            <SkillListItem name="Jira" points={4} />
            <SkillListItem name="Figma" points={3} />
          </ul>
        </div>
      </div>
      <div className="main-area">
        <section>
          <h2>Summary</h2>
          <p>
            I started programming in <b>2006</b> with Visual Basic in Excel.
          </p>
          <p>
            In 2016 I I began working with JS ecosystem. In my last job I
            designed more complex state management solutions using Zustand. For
            the past 5 years I have been dealing with CI/CD and Docker, unit and
            integration testing in Jest, etc. I also worked with backend code in
            Typescript and PHP (Symfony, Zend).
          </p>
        </section>
        <section>
          <h2>Work Experience</h2>
          <ul>
            <li>
              <h4>Regular Frontend Developer, Travelplanet.pl - Wrocław</h4>
              <em>February 2023 - June 2024</em>
            </li>
            <li>
              <h4>Junior Web Developer, ArdentCode - Wrocław</h4>
              <em>May 2018 - November 2021</em>
            </li>
            <li>
              <h4>Freelancer - Szczecin/Wrocław</h4>
              <em>2005 - 2018</em>
            </li>
            <li>
              <h4>Cost Estimator, USMEL - Szczecin</h4>
              <em>2010</em>
            </li>
            <li>
              <h4>Geologist, Geoprojekt - Szczecin</h4>
              <em>2005 - 2009</em>
            </li>
            <li>
              <h4>KHGM, KGHM Cuprum - Lubin/Wrocław</h4>
              <em>2005</em>
            </li>
          </ul>
        </section>
        <section>
          <h2>Courses</h2>
          <ul>
            <li>
              <h4>Complete React Developer (w/ Redux, Hooks, GraphQL)</h4>
              <h5>Udemy</h5>
              <em>2024</em>
            </li>
            <li>
              <h4>JavaScript Front-end Developer</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>How to Become a Full Stack Developer</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>Webpack Course</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>Node.js - Dynamic Applications</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>Asynchronous Programming in JavaScript</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>Object Oriented Programming in JavaScript</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>Functional Programming in JavaScript</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>ES6 - next generation JavaScript</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>JavaScript Ecosystem - Introduction</h4>
              <h5>Strefa Kursów</h5>
              <em>2020</em>
            </li>
            <li>
              <h4>Angular 2 from scratch</h4>
              <h5>Strefa Kursów</h5>
              <em>2016</em>
            </li>
            <li>
              <h4>Introduction to Databases and SQL</h4>
              <h5>Department of Physics at the University of Wrocław</h5>
              <em>2006</em>
            </li>
            <li>
              <h4>Programming in C++</h4>
              <h5>Department of Physics at the University of Wrocław</h5>
              <em>2006</em>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
