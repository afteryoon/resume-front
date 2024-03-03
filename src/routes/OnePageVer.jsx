import IndexMyInfo from "../components/IndexMyInfo";
import MyselfComponent from "../components/MyselfComponent";
import Features from "../components/home/Features";
import Education from "../components/resume/Education";
import MyResume from "../components/resume/MyResume";
import Technology from "../components/resume/Technology";
import WorkExperience from "../components/resume/WorkExperience";
import AboutMe from "./AboutMe";
import Head from "./Head";
import Project from "./Project";
import Resume from "./Resume";

const OnepageVer=()=>{



    return(
        <div >
            <AboutMe />

            <div className="myStroyBackColor">
                <Features />
            </div>
            <Technology/>
            <Project/>
        </div>
    )
}

export default OnepageVer;