
const icons = {
  Java:{
    name:"Java",
    icon:"skill-icons:java-dark"
  },
  Javascript:{
    name:"Javascript",
    icon:"skill-icons:javascript"
  },
  Python:{
    name:"Python",
    icon:"vscode-icons:file-type-python"
  },
  Spring:{
    name:"Spring",
    icon:"logos:spring-icon",
  },
  Railway:{
    name:"Railway",
    icon:"devicon:railway",
  },
  Vercel:{
    name:"Vercel",
    icon:"logos:vercel",
  },
  Bootstrap:{
    name:"Bootstrap",
    icon:"logos:bootstrap",
  },
  Tailwind:{
    name:"Tailwind",
    icon:"vscode-icons:file-type-tailwind",
  },
  React:{
    name:"React",
    icon:"skill-icons:react-dark",
  },
  Angular:{
    name:"AngularJS",
    icon:"vscode-icons:file-type-angular",
  },
  Flask:{
    name:"Flask",
    icon:"skill-icons:flask-light",
  },
  Docker:{
    name:"Docker",
    icon:"logos:docker-icon",
  },
  Cpp:{
    name:"C++",
    icon:"skill-icons:cpp",
  },
  Typescript:{
    name:"Typescript",
    icon:"skill-icons:typescript",
  },
  HTML:{
    name:"HTML",
    icon:"skill-icons:html",
  },
  CSS:{
    name:"CSS",
    icon:"skill-icons:css",
  },
  MySql:{
    name:"MySQL",
    icon:"devicon:mysql-wordmark"
  },
  Sql:{
    name:"SQL",
    icon:"devicon:azuresqldatabase"
  },
  Sqlite:{
    name:"SQLite",
    icon:"vscode-icons:file-type-sqlite",
  },
  Hibernate:{
    name:"Hibernate",
    icon:"devicon:hibernate-wordmark"
    },
  JUnit:{
    name:"Junit",
    icon:"devicon:junit-wordmark"
  },
  Numpy:{
    name:"Numpy",
    icon:"vscode-icons:file-type-numpy"
  },
  Pandas:{
    name:"Pandas",
    icon:"logos:pandas-icon",
    },
  Matplotlib:{
    name:"Matplotlib",
    icon:"devicon:matplotlib",
  },
  Sass:{
    name:"SASS",
    icon:"vscode-icons:file-type-sass"
    },
  Eclipse:{
    name:"Eclipse",
    icon:"devicon:eclipse",
  },
  Vscode:{
    name:"VSCode",
    icon:"vscode-icons:file-type-vscode",
  },
  Sublime:{
    name:"Sublime Text",
    icon:"vscode-icons:file-type-sublime"
  },
  Git:{
    name:"Git",
    icon:"vscode-icons:file-type-git",
  },
  Github:{
      name:"Github",
      icon:"skill-icons:github-light",
  },
  Ubuntu:{
    name:"Ubuntu",
    icon:"logos:ubuntu"
  },
  Postman:{
    name:"Postman",
    icon:"vscode-icons:file-type-postman"
  },
}

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Expertise",
    hash: "#expertise",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    education:"Bachelor of Engineering",
    logo:"/Education/college.png",
    name: "R.M.K. Engineering College",
    time: "2022-2026",
    score:{
      scoreType:"CGPA",
      score:8.3,
      totalScore:10,
    },
    branches:["Major in Computer Science","Honours in Artificial Intelligence and Machine Learning"]
    
  },
  {
    education:"12th Grade",
    logo:"/Education/school.png",
    name: "Velammal Matriculation Higher Secondary School",
    time: "2021-2022",
    score:{
      scoreType:"Percentage",
      score:93.33,
      totalScore:100,
    },
    branches:["Computer Science Group"]
    
  },
] as const;

export const projectsData = [
  {
    title: "Eagle Vision",
    logo:"/EagleVision/eaglevision.png",
    description:
      "EagleVision is a web app that helps users find items available in remote grocery shops. Vendors can manage their inventory and update availability.",
    stack: [icons.Java, icons.Spring, icons.Python, icons.Javascript,icons.React,icons.Bootstrap],
    demoURL:"",
    githubURL:"",
    image:"/EagleVision/image.png"
  },
  {
    title: "FocusTube",
    logo:"/FocusTube/focustube.png",
    description:
      "Focus Tube is a web application which fetches the queried videos from youtube with no suggestion.The aim of this app is to reduce distractions",
    stack: [icons.Python,icons.Flask],
    demoURL:"",
    githubURL:"",
    image:"/FocusTube/image.png"
  },
  
] as const;

export const expertiseData = [
  {
    title:"Languages",
    items:[icons.Java,icons.Python,icons.Cpp,icons.Javascript,icons.Typescript,icons.HTML,icons.CSS,icons.Sql]

  },
  {
    title:"Frameworks",
    items:[icons.Spring,icons.Hibernate,icons.JUnit,icons.Flask,icons.React,icons.Bootstrap,icons.Tailwind]
  },
  {
    title:"Database Management Systems",
    items:[icons.MySql,icons.Sqlite]
  },
  {
    title:"Softwares and Tools that I use",
    items:[icons.Eclipse,icons.Vscode,icons.Sublime,icons.Postman,icons.Git,icons.Github,icons.Docker,icons.Ubuntu]
  }
] as const;
