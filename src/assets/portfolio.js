const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Obiora Ukwuani | Personal Portfolio",
  description:
    `
    As a Frontend Developer, I am dedicated to crafting innovative and user-centric web experiences. 
    My passion lies in creating seamless and visually appealing interfaces that enhance user engagement. 
    Leveraging my skills in frontend development, I aim to contribute to dynamic projects, ensuring a harmonious blend of 
    technology and design to elevate user experiences.
    `,
  og: {
    title: "Obiora Ukwuani Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hello",
  sub: "Obiora Ukwuani",
  logo_name: "Obiora Ukwuani",
  resumeLink: "https://drive.google.com/file/d/16qSFtDq6BKCqM3O4k_GGbOeFMhBdmaWe/view?usp=drive_link",
  description:
    `
    As a Frontend Developer, I am dedicated to crafting innovative and user-centric web experiences. 
    My passion lies in creating seamless and visually appealing interfaces that enhance user engagement. 
    Leveraging my skills in frontend development, I aim to contribute to dynamic projects, ensuring a harmonious blend of 
    technology and design to elevate user experiences.
    `
};

//about me 
const Bio = {
  bio:`As a frontend developer, I specialize in crafting visually 
    stunning and responsive web designs that seamlessly adapt to various devices. 
    With a keen eye for detail and a passion for quick learning, I bring proficiency in programming languages, 
    troubleshooting, and web optimization. My dedication extends beyond coding, as I thrive in collaborative teamwork. 
    Currently contributing to meaningful projects with the United States of Africa (USAF), 
    I am committed to creating impactful and user-centric digital experiences.`
}

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/easyAppx",
    },
    {
      siteName: "Twitter",
      iconifyClassname: "simple-icons:twitter",
      style: {
        color: "#1DA1F2",
      },
      profileLink: "https://twitter.com/UkwuaniObi31824",
    },   
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/obiora-ukwuani-3b58b2148/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "As a frontend developer, my primary focus is on creating engaging and responsive web applications ⚡", 
        "I specialize in translating design concepts into interactive and user-friendly interfaces ⚡", 
        "Utilizing modern web technologies and frameworks, I bring ideas to life and ensure a seamless user experience ⚡",
        "Building responsive websites using HTML5, CSS, JavaScript, BootStrap5, Tailwind css, MUI, React Js, Vue Js & NodeJS ⚡",
        "Having experience in Domain & Hosting using Netlify, Vercel, and GitHub ⚡",
        "Cross-Browser Compatibility ⚡",
        "Web Performance Optimization ⚡"
      ],
    },
    {
      title: "UI/UX Design Integration",
      fileName: "DesignImg",
      skills: [
        "Incorporating a strong sense of design into frontend development ⚡",
        "I seamlessly integrate UI/UX principles to enhance user interactions ⚡",
        "By collaborating closely with designers, I ensure the translation of visual concepts into functional and aesthetically pleasing interfaces ⚡"
      ],
    },
    {
      title: "Frontend Optimization and Maintenance",
      fileName: "FullStackImg",
      skills: [
        "Beyond initial development, I specialize in optimizing frontend performance and ensuring ongoing maintenance ⚡",
        "This involves implementing best practices to enhance website speed, security, and overall reliability ⚡",
        "Performance Optimization ⚡",
        "Code Maintenance and Refactoring ⚡",
        "Debugging and Troubleshooting ⚡",
        "Version Control (Git) ⚡",
        "Continuous Learning and Adaptation ⚡"
      ],
      skillIntro: [
        "Skills"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "vscode-icons:file-type-tailwind",
          style: {
            color: "#38B2AC",
          },
        },
     
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#41B883",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#68A063",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git / GitHub",
          fontAwesomeClassname: "mdi:git",
          style: {
            color: "#F05032",
          },
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    `I specialize in crafting visually stunning web applications with a focus on frontend development. 
    My passion is creating seamless user interfaces using the latest technologies for a modern and dynamic user experience.`,
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Naccoss Flex-Start",
      description:
        `The NACOSS website serves as a centralized platform for students in IT-related fields, providing a coordinated space to address 
          and champion issues of interest within the Nigerian Association of Computer Science Students.`,
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://nacoss-flex-start.vercel.app/",
      code: "https://github.com/easyAppx/Nacoss-Flex-Start",
      linkcolor: "white",
    },

    {
      title: "Sai Kai VMS USAF",
      description:
        "Volunteer Management System for USAF.",
      tags: [
        {
          lang: "React",
          color: "#004782",
        },
        {
          lang: "JavaScript",
          color: "#303030",
        },
        {
          lang: "Tailwindcss",
          color: "#ff4b4b",
        },
        {
          lang: "CSS3",
          color: "#051c61",
        },
      ],
      link: "https://sakai-vms-frontend-engineering-git-obiora-sakai-vms-frontend.vercel.app/",
      code: "",
      linkcolor: "white",
    },
    
    {
      title: "Weather Web App",
      description:
      `simple and intuitive weather app; with open weather api integration, accurate 
        weather forecasts, and a clean interface, ensuring you're prepared for whatever the elements bring.`,
      tags: [
        {
          "lang": "Angular",
          "color": "#DD0031"
        },
        {
          "lang": "TypeScript",
          "color": "#007ACC"
        },
        {
          lang: "Tailwindcss",
          color: "#ff4b4b",
        },
        {
          lang: "CSS3",
          color: "#051c61",
        },
      ],
      link: "https://simple-weather-ktjuxmpzs-easyappx.vercel.app/",
      code: "https://github.com/easyAppx/simple_weather_app",
      linkcolor: "white",
    },

    {
      title: "Personal Portfolio",
      description:
        "Personal Portfolio Website",
      tags: [
        {
          lang: "React",
          color: "#004782",
        },
        {
          lang: "JavaScript",
          color: "#303030",
        },
        {
          lang: "Tailwindcss",
          color: "#ff4b4b",
        },
        {
          lang: "CSS3",
          color: "#051c61",
        },
      ],
      link: "https://personal-portfolio-beta-two-48.vercel.app/",
      code: "https://github.com/easyAppx/personal-portfolio",
      linkcolor: "white",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      `I'm accessible across various social media platforms. Feel free to reach out, 
      and I'll respond within 24 hours. I'm here to assist you with Frontend Development, 
      offering expertise in areas such as React, UI/UX Design, and Open Source projects.`,
  },
  addressSection: {
    title: "Address",
    subtitle: "Lale Guest Inn New Jerusalem Damaturu, 620101 Yobe State",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234 8131907599",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/easyAppx",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/obiora-ukwuani-3b58b2148/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/rohanalytics",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:obioraukwuani@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/ora_phelix/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

export {
  settings,
  seo,
  greeting,
  Bio,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
};
