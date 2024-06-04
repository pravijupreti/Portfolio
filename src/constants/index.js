import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    Postgress,
    Oracle,
    mongodb,
    git,
    Cshap,
    docker,
    dotnet,
    django,
    SQL,
    DataScience,
    MachineLearning,
    vurilo,
    Gentech,
    Codeology,
    Wiseman,
    Ghumnajau,
    VuriloApp,
    Jaldicash,
    Firebase,
    SignalR,
    JWTAuthentication,
    DataScienceProject,
    Python,
    Numpy,
    Pandas,
    tensor,
    matpolib,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: ".Net Core , MVC , WCF, RAZOR , BLAZOR",
      icon: dotnet,
    },
    {
      title: "Python Django Backend",
      icon: django,
    },
    {
      title: "MSSQL , MYSQL workbench , Oracle , Postgress",
      icon: SQL,
    },
    {
      title: "Pandas , Numpy , Matplotlib , TensorFlow ",
      icon: DataScience,
    },
    {
      title: "TensorFlow",
      icon: MachineLearning,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Postgress",
      icon: Postgress,
    },
    {
      name: "Oracle",
      icon: Oracle,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C#",
      icon: Cshap,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Numpy",
      icon: Numpy,
    },
    {
      name: "Pandas",
      icon: Pandas,
    },
    {
      name: "matploib",
      icon: matpolib,
    },
    {
      name: "Tensorflow",
      icon: tensor,
    },
  ];
  
  const experiences = [
    {
      title: "Intern Backend developer",
      company_name: "General Technology",
      icon: Gentech,
      iconBg: "#383E56",
      date: "August, 2020 - November, 2020",
      points: [
        "Learned Basic of Dot net ,C# ,API ,advance concept on ORM tools like dapper, EntityFramework and Entity Framework Core",
        "providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Vurilo Nepal",
      icon: vurilo,
      iconBg: "#E6DEDD",
      date: "January, 2021 - June, 2023",
      points: [
        "Implemented new features in LMS and TMS to meet business needs.",
        "Collaborated with stakeholders to translate requirements into tasks.",
        "Performed maintenance tasks including bug fixing and updates.",
        "Integrated new APIs for enhanced data exchange between systems.",
        "Improved user interface and usability of LMS and TMS.",
        "Maintained and optimized databases for system performance.",
        "Provided technical support and addressed user-reported issues promptly.",
        "Coordinated with teams to prioritize tasks and enhancements.",
        "Documented code changes and system configurations for future reference.",
      ],
    },
    {
      title: "Software developer",
      company_name: "Codeology Tech",
      icon: Codeology,
      iconBg: "#383E56",
      date: "June, 2023 - May, 2024",
      points: [
        "Led team in implementing new features for client projects.",
        "Interfaced with stakeholders to translate needs into tasks.",
        "Managed ongoing maintenance, bug fixes, and updates for stability.",
        "Enhanced UI/UX across multiple WCF projects.",
        "Performed database maintenance and optimization for performance.",
        "Provided technical support and addressed team-reported issues.",
        "Facilitated collaboration and prioritized tasks.",
        "Developed Firebase push notifications and SignalR chat hub for a dating app.",
        "Maintained comprehensive documentation for projects.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Wiseman Digital",
      icon: Wiseman,
      iconBg: "#E6DEDD",
      date: "July, 2023 - May, 2024",
      points: [
        "Led team in enhancing fintech app to meet user needs.",
        "Collaborated with freelancing firm to translate requirements into tasks.",
        "Managed app maintenance for stability and reliability.",
        "Improved UI/UX of mobile and desktop components.",
        "Utilized WCF for backend communication.",
        "Integrated third-party bank APIs for KYC verification.",
        "Implemented cross-platform login security measures.",
        "Coordinated API integration for seamless data exchange.",
        "Provided technical guidance for app operation.",
        "Facilitated communication between client and freelancing firm.",
        "Maintained comprehensive documentation for future reference.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Hardworking individuals show dedication and commitment, going the extra mile to achieve their goals. Laboriousness emphasizes sustained effort, meticulous attention, and perseverance. Being eager to learn reflects a proactive attitude towards personal growth, driven by curiosity and a thirst for knowledge",
      name: "Bijay dhimal",
      designation: "CTO",
      company: "Vurilo Nepal",
      image: "https://avatars.dicebear.com/api/avataaars/12345.svg",
    },
    {
      testimonial:
        "I've worked with this team for a year, and they've exceeded my expectations. Their dedication and expertise are impressive. From start to finish, they provided tailored solutions and top-notch service. Highly recommended!",
      name: "Subek Shakya",
      designation: "CEO",
      company: "Codeology tech",
      image: "https://avatars.dicebear.com/api/avataaars/12345.svg",
    },
    {
      testimonial:
        "I've been impressed by the professionalism and dedication of this team. Their expertise and attention to detail are outstanding. Highly recommended for anyone seeking reliable and top-quality service.",
      name: "Akash shrestha",
      designation: "CEO",
      company: "Growth lab",
      image: "https://avatars.dicebear.com/api/avataaars/12345.svg",
    },
  ];
  
  const projects = [
    {
      name: "Vurilo App",
      description:
        "Web page and mobile app designed for promoting E-learning. Live class, recorded lectures , online assessment , assignments , online exam , attendance , e-books , class starting notification , organization based database.",
      tags: [
        {
          name: "Admin portal(MVC)",
          color: "blue-text-gradient",
        },
        {
          name: "C# .Net core",
          color: "green-text-gradient",
        },
        {
          name: "MYSQL workbench",
          color: "pink-text-gradient",
        },
      ],
      image: VuriloApp,
      source_code_link: "https://app.vurilo.com/auth/login",
    },
    {
      name: "Ghumnajaau",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations. and allows user to select guide and recommend packages based on user budget",
      tags: [
        {
          name: "MVC",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "css"
        },
        {
          name: "MSSQL",
          color: "pink-text-gradient",
        },
      ],
      image: Ghumnajau,
      source_code_link: "https://www.ghumnajaau.com",
    },
    {
      name: "JaldiCash",
      description:
        "Fintech app for easy money withdraw , deposit , transfer. Supports national and internal transaction(India to Nepal) , card less cash withdraw , organization based database , push notification , online user registration. Web login is unavailable in europe mobile app is still on playstore ",
      tags: [
        {
          name: "java script , AJAX",
          color: "blue-text-gradient",
        },
        {
          name: "C#,MVC,WCF",
          color: "green-text-gradient",
        },
        {
          name: "MSSQL",
          color: "pink-text-gradient",
        },
      ],
      image: Jaldicash,
      source_code_link: "https://play.google.com/store/apps/details?id=jaldicash.weizmann.com.jaldicash",
    },
    {
      name: "Firebase",
      description:
        "Firebase push notification integrated with hangfire as background job and firebase Oauth and using realtime database source code for backend integration available",
      tags: [
        {
          name: "C# , dot net Core",
          color: "blue-text-gradient",
        },
        {
          name: "Rest API",
          color: "green-text-gradient",
        },
      ],
      image: Firebase,
      source_code_link: "https://github.com/pravijupreti/BackgroundJobPushNotificationChatSocket",
    },
    {
      name: "SignalR",
      description:
        "Using SignalR for creating chat hub , secure chat socket , real time change reflect . Dynamic UI not available but useful for backed integration.",
      tags: [
        {
          name: "java script , AJAX",
          color: "blue-text-gradient",
        },
        {
          name: "C#,MVC",
          color: "green-text-gradient",
        },
        {
          name: "MSSQL",
          color: "pink-text-gradient",
        },
      ],
      image: SignalR,
      source_code_link: "https://github.com/pravijupreti/ChatSystemMVCSignalR",
    },
    {
      name: "JWTAuthentication",
      description:
        "Rest API source code for JWT authentication integration .",
      tags: [
        {
          name: "C# , .Net core",
          color: "blue-text-gradient",
        },
        {
          name: "MSSQL",
          color: "pink-text-gradient",
        },
      ],
      image: JWTAuthentication,
      source_code_link: "https://github.com/pravijupreti/jwtwebapi",
    },
    {
      name: "Data science",
      description:
        "Sample of Data analysis done using Numpy , Pandas , Matplotlib and TensorFlow",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas,Numpy,Matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "MSSQL",
          color: "pink-text-gradient",
        },
      ],
      image: DataScienceProject,
      source_code_link: "https://github.com/pravijupreti/JupiterDSAWorkFlow",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };