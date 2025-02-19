/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jeter's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jeter Hwang Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "About Me",
  logo_name: "JeterHwang",
  nickname: "Jeter",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/JeterHwang",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/JeterHwang",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hwang-jeter-527335220",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCjulMuZgDt7wLve2_p1GzCQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:b07901068@ntu.edu.tw",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://www.facebook.com/jeter0309",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/jeter0309",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jeterhwang/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Neural Architecture Search",
      fileName: "DataScienceImg",
      skills: [
        "⚡ One and a half year research experience in Microsystem Research Laboratory (MSRL), advised by Prof. Tzi-Dar Chiueh",
        "⚡ Part of a big program that aims to search for compact and efficient neural architecture",
        "⚡ Combine the Learned Step Size Quantization (LSQ) scheme with the Once-for-All (OFA) network to search for a mixed-precision model",
        "⚡ Best searched network achieved 72.31% top-1 accuracy on Imagenet with merely 6.17(G) bit operations (bitOps), which is comparable or even superior compared to SOTA methods",
      ],
      links: [
        {
          name: "Paper",
          path: "QNAS.pdf",
        },
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Protein Multiple Sequence Alignment",
      fileName: "FullStackImg",
      skills: [
        "⚡ Two-year research experience advised by Prof. Yi-Chang Lu",
        "⚡ Designed a novel workflow for guide tree construction, being the first MSA method that used a pre-trained LSTM model to predict protein similarity",
        "⚡ The proposed workflow achieved SOTA accuracy on many large protein MSA benchmarks with little additional overhead",
        "⚡ The paper has been submitted to Bioinformatics and is currently under review",
      ],
      links: [
        {
          name: "Paper",
          path: "MSA.pdf",
        },
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
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
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "FPGA/ASIC Design",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Built a solid background in FPGA/AISC development experience in coursework, such as Electrical Engineering Lab (Digital Circuit) and Integrated Circuits Design Laboratory",
        "⚡ Designed a FPGA-based Gobang (五子棋) AI that was able to beat average human players through the min-max search algorithm",
        "⚡ Designed an application specific integrated circuit (ASIC) for sparse matrix-vector multiplication",
        "⚡ The ASIC achieved 70x speedup compared to its Python counterpart, and it was taped out by UMC after synthesis and layout",
      ],
      links: [
        {
          name: "Demo",
          path: "https://youtube.com/shorts/bzr9uhysR_I",
        },
        {
          name: "Paper",
          path: "SMVM.pdf",
        },
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
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
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Taiwan University",
      subtitle:
        "Bachelor Degree in Electrical Engineering and Computer Science",
      logo_path: "NTU.png",
      alt_name: "NTUEE",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Specialize in Digital Circuit Design, Computer Vision, and Protein Sequencing",
        "⚡ Advisor: Tzi-Dar Chiueh and Yi-Chang Lu",
        "⚡ GPA: 3.97/4.30",
        "⚡ Last60: 4.13/4.30",
      ],
      website_link: "https://web.ee.ntu.edu.tw/eng/index.php",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Electronics (Ⅰ)",
      subtitle: "A",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Electronics (Ⅱ)",
      subtitle: "A+",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Electromagnetics (Ⅰ)",
      subtitle: "A+",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Electromagnetics (Ⅱ)",
      subtitle: "A+",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Electrical Engineering Lab (digital Circuit)",
      subtitle: "A-",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Integrated Circuit Design",
      subtitle: "A",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Computer Architecture",
      subtitle: "A-",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Integrated Circuits Design Laboratory",
      subtitle: "A+",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Algorithms",
      subtitle: "A",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Digital System Design",
      subtitle: "A+",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Data Structure",
      subtitle: "A+",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Applied Deep Learning",
      subtitle: "A+",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Research, Internships and Volunteerships",
  description:
    "As a EECS student, I engrossed myself in multiple research fields during my third and fourth year in college. To better explore engineering, I secured a part-time position in a big company throughout my senior year. Besides, I dedicated myself to voluntary service in my school, helping international students get acquainted with local culture.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research",
      experiences: [
        {
          title: "Undergraduate Research Project",
          company: "NTU MicroSystem Research Lab",
          company_url: "http://dodger.ee.ntu.edu.tw/",
          logo_path: "NTU.png",
          duration: "Feb 2021 - Aug 2022",
          location: "Taipei",
          description:
            "Advised by Prof. Tzi-Dar Chiueh, I conduct research on neural architecture search (NAS), which aims to design power-efficient and compact neural networks. Our ultimate goal is integrating the quantization scheme 'FloatSD' developed by our lab into the NAS algorithm. My research mainly focuses on combining the Once-for-All (OFA) NAS algorithm with Learned Step Size Quantization (LSQ), searching for the best architecture along with the optimal quantization bit-width.",
          color: "#0879bf",
        },
        {
          title: "Undergraduate Research Project",
          company: "Lab for Data Processing Systems",
          company_url: "https://sites.google.com/view/ldps-giee-ntu/home",
          logo_path: "NTU.png",
          duration: "Sep 2020 - Present",
          location: "Taipei",
          description:
            "Advised by Prof. Yi-Chnag Lu, I designed a novel algorithm for Multiple Sequence Alignment (MSA), where a pre-trained LSTM model was first used to predict protein similarity in the MSA pipeline. The proposed workflow achieved SOTA alignment accuracy on multiple benchmarks. The publication of this work is currently under review.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Validation Engineer",
          company: "Intel Microelectronics Asia LLC., Taiwan Branch",
          company_url:
            "https://member.amcham.com.tw/intel-microelectronics-asia-llc-taiwan-branch",
          logo_path: "intel.png",
          duration: "Aug 2021 - Jul 2022",
          location: "Taipei Nangang Site",
          description:
            "Being a member of the High Speed IO (HSIO) team, my job was testing PCIe connections on the Eagle Stream platform. I joined a project led by the HSIO team at the Intel Oregon site, maintaining a C-based toll that tested teh LTSSM state machine of PCIe connections. As one of the contributors to the project, I finished three function enhancements and one bug fix during my internship. In the co-working experience with American team, I had a chance to study transistor-level mechanisms behind Intel IPs, which motivated me to become a IC designer.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Local Partner for International Students",
          company: "International Companions for Learning",
          company_url: "https://icl.tw/",
          logo_path: "ICL.png",
          duration: "Sep 2020 - May 2022",
          location: "Taiwan",
          description:
            "ICL is a program that aims to help international students get familiar with Taiwanese culture. A local student will pair with an international student and they will serve one elementary or junior high school in Taiwan. The international students share their culture in English and the local students translate the content into Chinese so that children can fully understand. In this program, not only do I learn how to cooperate with people speaking a different language or holding a completely different point of view, but also make a lot of friends during the service period.",
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
    "These github repositories are either final porojects of some courses or the code implementation of my research. Feel free to click on whichever intrigues you and take a closer look of my work!!",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    resume_name: "CV.pdf",
    description:
      "Feel free to contact me on every social media. You can message me, I will reply within 24 hours. If you are instered in my research, maybe we can exchange ideas on those topics!!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "No. 69, Ren'ai 1st St., West Dist., Chiayi City 600030 , Taiwan (R.O.C.)",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "(+886) 908596152",
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
