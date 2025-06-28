import React, { useState } from "react";
import"./App.css"
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Home from "./Components/home";
import Skillitem from "./Components/Skillitem";
import Skills from "./Components/skills";
import Projects from "./Components/Projects";
import Projectcategory from "./Components/Projectcategory";
import Contactme from "./Components/Contactme";
import Footer from "./Components/Footer";

const tabsList = [
  {tabId: 'All', displayText: 'All'},
  {tabId: 'PROGRAMMING', displayText: 'Programming'},
  {tabId: 'FRONTEND', displayText: 'Frontend'},
  {tabId: 'OTHERS', displayText: 'Others'},
]
const SkillsList = [
  {
    projectId: 0,
    category: 'PROGRAMMING',
    imageURL: 'https://cdn-icons-png.flaticon.com/128/3098/3098090.png',
    title: 'Python',
    
  },
  {
    projectId: 1,
    category: 'FRONTEND',
    imageURL: "https://cdn-icons-png.flaticon.com/256/174/174854.png",
    title: 'HTML'
  },
  {
    projectId: 2,
    category: 'FRONTEND',
    imageURL: "https://cdn-icons-png.flaticon.com/128/16183/16183567.png",
    title: 'CSS'
  },
  {
    projectId: 4,
    category: 'FRONTEND',
    imageURL: 'https://cdn-icons-png.flaticon.com/128/721/721671.png',
    title: 'JavaScript'
  },
  {
    projectId: 5,
    category: 'FRONTEND',
    imageURL: "https://cdn-icons-png.flaticon.com/128/10832/10832132.png",
    title: 'React Js'
  },
  {
    projectId: 6,
    category: 'PROGRAMMING',
    imageURL: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
    title: "C language"
  },
  {
    projectId: 8,
    category: 'PROGRAMMING',
    imageURL: "https://cdn-icons-png.flaticon.com/128/18450/18450313.png",
    title: 'C ++ Basics'
  },
  {
    projectId: 9,
    category: 'PROGRAMMING',
    imageURL: 'https://cdn-icons-png.flaticon.com/128/226/226777.png',
    title: 'Java'
  },
  {
    projectId: 10,
    category: 'FRONTEND',
    imageURL: 'https://cdn-icons-png.flaticon.com/128/11524/11524065.png',
    title: 'RESPONSIVE WEB DESIGN'
  },
  {
    projectId: 11,
    category: 'OTHERS',
    imageURL: 'https://cdn-icons-png.flaticon.com/128/14389/14389795.png',
    title: 'SQLITE'
  }
]
const projectsList = [{'projectId': 0, 'category': 'STATIC', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png', 'title': 'Music Page', 'description': 'The music page enables the users to browse through the images of all-time favorite music albums.', 'tech': ['html', 'css']},
 {'projectId': 1, 'category': 'STATIC', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png', 'title': 'Tourism Website', 'description': 'A tourism website enables the user to browse through the images of popular destinations.', 'tech': ['html', 'CSS', 'BootStrap']},
 {'projectId': 2, 'category': 'STATIC', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png', 'title': 'Advanced Technologies', 'description': 'A website that gives you a basic understanding of Advanced Technologies.', 'tech': ['html', 'CSS', 'BootStrap']},
  {'projectId': 4, 'category': 'RESPONSIVE', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png', 'title': 'VR Website', 'description': 'VR Website enables users to explore AR and VR Products and Industry happenings.', 'tech': ['html', 'CSS', 'BootStrapGridSystem']},
   {'projectId': 5, 'category': 'RESPONSIVE', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png', 'title': 'Food Munch', 'description': 'Food Much Website is a user-centric food tech website.', 'tech': ['html', 'CSS', 'BootStrapGridSystem']},
    {'projectId': 6, 'category': 'RESPONSIVE', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png', 'title': 'Portfolio', 'description': 'A portfolio is the best alternative for a resume to showcase your skills to the digital world.', 'tech': ['html', 'CSS', 'BootStrapGridSystem']},
     {'projectId': 8, 'category': 'DYNAMIC', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png', 'title': 'Speed Typing Test', 'description': 'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.', 'tech': ['html', 'CSS', 'JavaScript']}, 
     {'projectId': 9, 'category': 'DYNAMIC', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png', 'title': 'Random Joke Page', 'description': 'Random Joke Page is an API-based dynamic Web Application that generates a new joke.', 'tech': ['html', 'CSS', 'JavaScript']},
      {'projectId': 10, 'category': 'DYNAMIC', 'imageURL': 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png', 'title': 'Sizing An Image', 'description': 'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.', 'tech': ['html', 'CSS', 'JavaScript']},
      {'projectId': 11, 'category': 'DYNAMIC', 'imageURL': 'https://cdn-icons-png.flaticon.com/128/6352/6352655.png', 'title': 'TicTacToe', 'description': 'This is a game of X and O', 'tech': ['html', 'CSS', 'JavaScript']},
      {'projectId': 12, 'category': 'DYNAMIC', 'imageURL': 'https://cdn-icons-png.flaticon.com/128/11538/11538682.png', 'title': 'TicTacToe', 'description': 'This is a web app which converts one timezone to other timezone', 'tech': ['html', 'CSS', 'JavaScript']}
    ]




const projectcategorys=[
  {protabId: 'All', displayText: 'All'},
  {protabId: 'STATIC', displayText: 'Static'},
  {protabId: 'RESPONSIVE', displayText: 'Responsive'},
  {protabId: 'DYNAMIC', displayText: 'Dynamic'},
]


const App=()=>{
  const [tabId, setTabId] = useState('All');
  const [projecttab, setprojecttab] = useState('All');
  const receive=(tabId)=>{
    setTabId(tabId);
  }
   const selectcat=(protabId)=>{
    setprojecttab(protabId);
  }
  const filterProjectList = projecttab === 'All'
    ? projectsList
    : projectsList.filter((item) => item.category === projecttab);
  const filterList = tabId === 'All'
    ? SkillsList
    : SkillsList.filter((item) => item.category === tabId);
  
  return(
    <div className="bg-white min-h-screen ">
      <Header/>
      <Home/>
      <AboutMe/>
      <div id="Skills">
<div className="bg-white  px-4 py-4 flex justify-center flex-col items-center">
  <h1 className="text-blue-600 font-bold text-3xl font-[Roboto] text-center">Skills</h1>
  <div className="flex space-x-8">
  {tabsList.map((tab) => (
    <Skillitem key={tab.tabId} item={tab} receive={receive} isActive={tabId==tab.tabId} />
  ))}
  </div>
</div>
<div className="flex flex-wrap gap-4 justify-center items-center">
{
  filterList.map((item)=>{
   return <Skills key={item.projectId} item={item}/>
  })
}
</div>
</div>
<div id="Project">
<div className="bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe]  px-4 py-4 flex justify-center flex-col items-center wrap">
  <h1 className="text-blue-600 font-bold text-3xl font-[Roboto] text-center">Projects</h1>
  <div className="flex space-x-8"> 
  {projectcategorys.map((tab) => (
    <Projectcategory key={tab.protabId} item={tab} selectcat={selectcat} proisActive={projecttab==tab.protabId} />
  ))}
  </div>
  <div className="flex flex-wrap gap-4 justify-center items-center">
  {filterProjectList.map((item) => (
    <Projects key={item.projectId} item={item} />
  ))}
  </div>
</div>
</div>
<Contactme/>
<Footer/>
    </div>
  );

}
export default App;