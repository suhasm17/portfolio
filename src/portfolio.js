/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Suhas's Portfolio",
  description:
    "A software and tech enthusiast with good problem solving skills, always ready to learn and enhance my skills with at most dedication",
  og: {
    title: "Suhas Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Suhas M",
  logo_name: "Suhas M",
  nickname: "artist17",
  subTitle:
    "A software and tech enthusiast with good problem solving skills, always ready to learn and enhance my skills with at most dedication",
  resumeLink:
    "https://drive.google.com/file/d/1WjNlC2qKt2MhV1PQ-5179pIJWTucgMty/view?usp=sharing ",
  portfolio_repository: "https://github.com/suhasm17",
  githubProfile: "https://github.com/suhasm17",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/suhasm17",
  // linkedin: "https://www.linkedin.com/in/suhas-m-2000/",
  // gmail: "suhasmjnv17@gmail.com",
  // twitter: "https://twitter.com/suhas_kannadiga",

  {
    name: "Github",
    link: "https://github.com/suhasm17",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suhas-m-2000/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:suhasmjnv17@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/suhas_kannadiga",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Competitive Programming",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Practicing CP by solving variety of problems on various sites",
        "⚡ Codechef Max Rating - 1590 (3 Star)",
        "⚡ HackerRank 5 Star in C++ & Problem Solving",
      ],
      softwareSkills: [
        {
          skillName: "Codechef",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Codeforces",
          fontAwesomeClassname: "simple-icons:codeforces",
          style: {
            backgroundColor: "transparent",
            color: "#1F8ACB",
          },
        },
        {
          skillName: "HackerRank",
          fontAwesomeClassname: "cib:hackerrank",
          style: {
            backgroundColor: "transparent",
            color: "#00EA64",
          },
        },
        {
          skillName: "LeetCode",
          fontAwesomeClassname: "simple-icons:leetcode",
          style: {
            backgroundColor: "transparent",
            color: "#FFA116",
          },
        },
      ],
    },
    {
      title: "Back End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Developing mobile applications using Java, Flutter and solo android apps using Kotlin",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "bxl:c-plus-plus",
          style: {
            backgroundColor: "transparent",
            color: "#00599C",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/artist17",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/artist17",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/artist17",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bangalore Institute of Technology, Bengaluru",
      subtitle: "B.E in Computer Science & Engineering",
      logo_path: "bit.png",
      alt_name: "BIT Bengaluru",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on C++ Programming, Python and Full Stack Development.",
      ],
      website_link: "https://bit-bangalore.edu.in/",
    },
  ],
};
const certifications = {
  certifications: [
    {
      title: "Programming in C++",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Python for Beginners",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with a well established company as a Web Developer Intern. I also love organising events and Marketing.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Exposys Data Labs Pvt. Ltd.",
          company_url: "http://exposysdata.com/",
          logo_path: "exposys.jpeg",
          duration: "Aug 2022 - Sept 2022",
          location: "Bengaluru, Karnataka",
          description:
            "I have worked on the project Mass Mail Dispacther Web App. There were two objectives: (1) To filter out the valid emails. (2) To send a mail to all the vaild mails at once.    Tech Stack Used:HTML,CSS,JS,Python Flask",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Manthan Marketing Team",
          company: "Bangalore Institute of Technology",
          company_url: "",
          logo_path: "bit.png",
          duration: "June 2022 - July 2022",
          location: "Bengaluru, Karnataka",
          description:
            "Took the responsibility of promoting the College's Annual Techno-Cultural Fest Manthan. Visited Various Colleges and Interacted with more than 100 people",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create real life projects and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "suhas.jpg",
    description:
      "I am active on almost all social media platforms. It would be glad to hear your feedbacks and if you have any queries please reach out to me on email",
  },
  blogSection: {
    title: "Designs",
    subtitle:
      "Graphic Designing is one of my hobbie and I also spent some time in designing some cool Graphic Arts for my Online Print on Demand Shop. Check it out if you are Intrested",
    link: "https://www.redbubble.com/people/OneandHalf/shop?asc=u",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Arya Idiga Boys Hostel, Rajeev Gandhi Circle, Sheshadripuram, Bengaluru - 560020",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/cjomLsFYGns35WBW9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9845485228",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
