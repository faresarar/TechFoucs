import { IoIosArrowRoundForward } from "react-icons/io";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BiPhoneCall, BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Settings = {
  // add nomber between 1 -2 to chagne home page
  homePage: 1,
  // logo
  logo: "/assets/images/logo/logo.png",
  // meta
  title: "TechFocus | Empowering Businesses with Cutting-Edge IT Solutions",
  description: "Empowering Businesses with Cutting-Edge IT Solutions",
  favorit: "/assets/images/logo/favorit.png",
  // keywords
  keywords: ["Tech Focus", "IT Solutions", "TechFocus"],
};
// both page 1 and 2
const home = {
  hero: {
    title: "Empowering {{Businesses}} with Cutting-Edge IT Solutions.",
    description:
      "Transform your digital presence and elevate your business with our innovative IT services.",
    step: "Focus on quality first",
    step_2: "Get to the market on time",
    cta: { name: "Get Started", link: "/contact" },
    cta_2: { name: "Learn More", link: "/about" },
    image: "/assets/images/elemants/elemants (30).png",
  },
  //   sections
  section_1: {
    cards: [
      {
        value: "23+",
        name: "Years of experience",
        image: "/assets/images/elemants/elemants (19).png",
      },
      {
        value: "200+",
        name: "Years of experience",
        image: "/assets/images/elemants/elemants (22).png",
      },
      {
        value: "50K",
        name: "Years of experience",
        image: "/assets/images/elemants/elemants (20).png",
      },
      {
        value: "120+",
        name: "Years of experience",
        image: "/assets/images/elemants/elemants (21).png",
      },
    ],
    image: "/assets/images/elemants/elemants (33).png",
  },
  //   We are Techco
  section_2: {
    mainImage: "/assets/images/img/Images.png",
    // home 1
    mainImage_2: "/assets/images/img/Frame 33.png",
    subTitle: "We are {{Techco}}",
    title: "Our {{Commitment}} to Client Satisfaction",
    description:
      "At Techco, our commitment to client satisfaction is at thecore of everything we do. We understand clients' success.",
    infoList: [
      " Let business growth help your business grow.",
      "Helping you to get better.",
      "Grow your business the right way.",
    ],
    listCard: [
      {
        image: "/assets/images/elemants/elemants (2).png",
        title: "Expert Team Members",
        description:
          "We take pride in assembling a diverse and highly skilled.",
      },
      {
        image: "/assets/images/elemants/elemants (3).png",
        title: "Fastest Customer Service",
        description:
          "We pride ourselves on providing the fastest customer service industry.",
      },
      {
        image: "/assets/images/elemants/elemants (4).png",
        title: "reasonable Pricing",
        description:
          "We believe in providing reasonable pricing that offers exceptional.",
      },
    ],
    cta: { name: "Get Started", link: "/" },
  },
  // Featured Services
  section_3: {
    title: "Featured Services",
    cards: [
      {
        title: "IT Management Services",
        tags: ["Consultation", "Strategy"],
        color: ["from-[#184A44]", "to-[#99A697]"],
        image: "/assets/images/elemants/elemants (9).png",
      },
      {
        title: "Data Tracking and Security",
        tags: ["Consultation", "Strategy"],
        color: ["from-[#5F1FBE]", "to-[#617DB4]"],
        image: "/assets/images/elemants/elemants (9).png",
      },
      {
        title: "Website Development",
        tags: ["Consultation", "Strategy"],
        color: ["from-[#CAAA8A]", "to-[#8F6A52]"],
        image: "/assets/images/elemants/elemants (10).png",
      },
      {
        title: "Website Development",
        tags: ["Consultation", "Strategy"],
        color: ["from-[#4258B1]", "to-[#6A8E52]"],
        image: "/assets/images/elemants/elemants (10).png",
      },
      {
        title: "Website Development",
        tags: ["Consultation", "Strategy"],
        color: ["from-[#BA8EB1]", "to-[#815D7E]"],
        image: "/assets/images/elemants/elemants (10).png",
      },
    ],
    cta: { name: "More Services", link: "/services" },
  },
  // Crafting Success With Project
  section_4: {
    title: "Our Recent Best Works",
    subTitle: "{{Crafting}} Success With Project",
    description:
      "Our recent projects highlight our expertise in delivering tailored solutions that meet the unique needs and objectives of our clients,custom software.",

    cards: [
      {
        name: "Dashboard Design",
        image: "/assets/images/img/portfolio_item_image_2.webp",
        subName: "Dashboard Design",
      },
      {
        name: "Mobile App Design",
        image: "/assets/images/img/portfolio_item_image_1.webp",
        subName: "App Design",
      },
      {
        name: "Technology Solution",
        image: "/assets/images/img/portfolio_item_image_3.webp",
        subName: "3D Design",
      },

      {
        name: "Mobile App Design",
        image: "/assets/images/img/portfolio_item_image_1.webp",
        subName: "App Design",
      },
      {
        name: "Dashboard Design",
        image: "/assets/images/img/portfolio_item_image_2.webp",
        subName: "Dashboard Design",
      },
    ],
    cta: { name: "Explore More", link: "/works" },
    cta_2: { name: "All Works", link: "/" },
  },
  // Client Testimonials
  section_5: {
    subTitle: "{{Client}} Testimonial",
    title: "What Our Clients Say",
    card: [
      {
        client: {
          img: "/assets/images/img/Ellipse_9.png",
          name: "John Doe",
          rate: 3,
        },
        imageBack: "/assets/images/img/Rectangle_36.png",
        description:
          "As a startup, we needed a technology partner who could help us bring our vision to life. Itsafe exceeded our expectations with their innovative solutions and proactive approach. They guided us through every step of the process, our journey together.",
      },
      {
        client: {
          img: "/assets/images/img/Ellipse_10.png",
          name: "John Doe 2",
          rate: 4,
        },
        imageBack: "/assets/images/img/Rectangle_37.png",
        description:
          "As a startup, we needed a technology partner who could help us bring our vision to life. Itsafe exceeded our expectations with their innovative solutions and proactive approach. They guided us through every step of the process, our journey together.",
      },
    ],
  },
  // Top Skilled Experts
  section_6: {
    subTitle: "{{Our Expert}} Team Members",
    title: "Top Skilled Experts",
    cards: [
      {
        name: "August Everest",
        subName: "SYSTEMS ENGINEER",
        image: "/assets/images/img/Rectangle 11.png",
        contact: {
          facebook: "/",
          instagram: "/",
          twitter: "/",
          linked: "/",
        },
      },
      {
        name: "August Everest",
        subName: "SYSTEMS ENGINEER",
        image: "/assets/images/img/Rectangle 11.png",
        contact: {
          facebook: "/",
          instagram: "/",
          twitter: "/",
          linked: "/",
        },
      },
      {
        name: "August Everest",
        subName: "SYSTEMS ENGINEER",
        image: "/assets/images/img/Rectangle 11.png",
        contact: {
          facebook: "/",
          instagram: "/",
          twitter: "/",
          linked: "/",
        },
      },
      {
        name: "August Everest",
        subName: "SYSTEMS ENGINEER",
        image: "/assets/images/img/Rectangle 11.png",
        contact: {
          facebook: "/",
          instagram: "/",
          twitter: "/",
          linked: "/",
        },
      },
      {
        name: "August Everest",
        subName: "SYSTEMS ENGINEER",
        image: "/assets/images/img/Rectangle 11.png",
        contact: {
          facebook: "/",
          instagram: "/",
          twitter: "/",
          linked: "/",
        },
      },
    ],
    cta: { name: "Explore More", link: "/team_member" },
  },
  //  Latest Articles Postss
  section_7: {
    subTitle: "{{Blog}} Updates",
    title: "Latest Articles Posts",
    blogs: [
      {
        comments: "35",
        image: "/assets/images/img/post_02-600x350.jpg",
        title: "The Benefits of IT Consulting Services",
        description:
          "IT consulting services can help businesses improve their IT strategies, streamline their operations, and increase their efficiency. Here are some of the benefits of IT consulting services.",
        date: "Jan 12, 2021",
        category: ["Consultation", "Strategy"],
      },
      {
        comments: "35",
        image: "/assets/images/img/portfolio_item_image_8-800x600.webp",
        title: "The Benefits of IT Consulting Services",
        description:
          "IT consulting services can help businesses improve their IT strategies, streamline their operations, and increase their efficiency. Here are some of the benefits of IT consulting services.",
        date: "Jan 12, 2021",
        category: ["Consultation", "Strategy"],
      },
      {
        comments: "35",
        image: "/assets/images/img/portfolio_item_image_2.webp",
        title: "The Benefits of IT Consulting Services",
        description:
          "IT consulting services can help businesses improve their IT strategies, streamline their operations, and increase their efficiency. Here are some of the benefits of IT consulting services.",
        date: "Jan 12, 2021",
        category: ["Consultation", "Strategy"],
      },
    ],
    cta: "read more",
  },
};
// About Page
const about = {
  banner: {
    title: "About Us",
    highlightName: "Techco",
    subTitle: "About More",
  },
  Top_Banner_Images: [
    "/assets/images/img/Rectangle 15.png",
    "/assets/images/img/Rectangle 16.png",
  ],
  title: "About Us",
  subTitle: "About {{Techco}}",
  description:
    "At Techco, we pride ourselves on offering dynamic and IT to suit your specific requirements. Our flexible approach means we can adjust our offerings to accommodate your evolving needs, whether you require comprehensive IT infrastructure support, strategic consultancy, software development",
  cards: [
    {
      image: "/assets/images/elemants/elemants (12).png",
      title: "Our History",
      description:
        "Since 1997 we have been a visionary and a reliable software engineering partner for world-class brands. abbreviated as co.",
    },
    {
      image: "/assets/images/elemants/elemants (16).png",
      title: "Our Mission",
      description:
        "A mission statement clarifies what the company wants to achieve, who they want to support, and why they want to support them. On the other hand",
    },
    {
      image: "/assets/images/elemants/elemants (17).png",
      title: "Our Vision",
      description:
        "A vision statement for a company or organization focuses on the potential inherent in the company's future; it's about what they intend to be how you",
    },
  ],
};
// Pricing Plan page
const price = {
  banner: {
    title: "Pricing Plan",
    highlightName: "Pricing",
    subTitle: "Our",
  },
  title: "Celebrating Features Discover What Sets Us",
  subTitle: "Apart From The Competition",
  description:
    "We take pride in celebrating the features that set us apart and make us a leader in the IT solutions. What truly distinguishes us is our unwavering commitment to innovation, excellence, and client satisfaction.",
  cards: [
    {
      name: "Rich Documentation",
      description: "Rich Documentation refers to comprehensive and detailed",
    },
    {
      name: "Fastest Delivery",
      description:
        "Fastest Delivery typically refers to service or process that emphasizes",
    },
    {
      name: "Lifetime Support",
      description:
        "Lifetime Support refers to a by a product or service provider",
    },
  ],
  section_1: {
    subTitle: "Our Pricing",
    title: "Best Plane for Business",
    offers: [
      {
        name: "Billed Monthly",
        discount: "-10%",
      },
      {
        name: "Billed Yearly",
        discount: "-30$",
      },
    ],
    plans: [
      {
        title: "Pro Package",
        des: "Make your work easier with an integrated properly together.",
        price: {
          month: "$48.6",
          year: "$453.6",
        },
        discount: {
          month: "$54",
          year: "$648",
        },
        save: {
          month: "$5.4",
          year: "$194.4",
        },
        features: [
          {
            name: "Software Development.",
          },
          {
            name: "Digital Product Design",
          },
          {
            name: "IT Consulting.",
          },

          {
            name: "Cybersecurity Services.",
          },
          {
            name: "Cloud Services",
          },
        ],
        cta: {
          name: "pruchase up",
          link: "/",
        },
      },
      {
        title: "Team Package",
        des: "Make your work easier with an integrated properly together.",
        price: {
          month: "$54",
          year: "$504",
        },
        discount: {
          month: "$60",
          year: "$720",
        },
        save: {
          month: "$6",
          year: "$216",
        },
        features: [
          {
            name: "Software Development.",
          },
          {
            name: "Digital Product Design",
          },
          {
            name: "IT Consulting.",
          },
          {
            name: "Website Development.",
          },
          {
            name: "Cybersecurity Services.",
          },
          {
            name: "Cloud Services",
          },
        ],
        cta: {
          name: "pruchase up",
          link: "/",
        },
      },
    ],
  },
};
// portfoli page
const portfolio = {
  banner: {
    title: "Our Portfolio",
    highlightName: "Portfolio",
    subTitle: "Our",
  },
  categorys: [
    { name: "SEE ALL", active: true },
    { name: "Technology", active: false },
    { name: "Analysis", active: false },
    { name: "Helpdesk", active: false },
    { name: "Marketing", active: false },
  ],
  portfolios: [
    {
      img: "/assets/images/img/portfolio_item_image_6-800x600.webp",
      category: "Helpdesk",
      title:
        "Explore Our IT Solutions Portfolio for Public Sector Organizations",
    },
    {
      img: "/assets/images/img/portfolio_item_image_8-800x600.webp",
      category: "Technology",
      title:
        "Revolutionizing IT Strategies A Closer Look at Our Dynamic IT Solutions",
    },
    {
      img: "/assets/images/img/portfolio_item_image_9-800x600.webp",
      category: "Helpdesk",
      title: "Cloud Migration and Integration Project IT Solutions Portfolio",
    },
    {
      img: "/assets/images/img/portfolio_item_image_11-800x600.webp",
      category: "Marketing",
      title: "Unlocking Potential Explore Our Comprehensive IT Portfolio",
    },
  ],
};
// portfoli Detaile page
const portfolioData = {
  banner: {
    title:
      "Driving Digital Transformation Explore the Depth of Our IT Projects",
    highlightName: "Portfolio",
    subTitle: "Our",
  },
  mainImage: {
    src: "/assets/images/img/portfolio_item_image_9-800x600.webp",
    alt: "",
    width: 1000,
    height: 800,
  },
  mainContent: {
    networkInfrastructure: {
      title: "Network Infrastructure and Design",
      description: [
        'The "Cloud Migration and Integration Project" represents a pivotal step for our client\'s digital transformation journey. By transitioning from traditional on-premises infrastructure to cloud-based solutions, we are unlocking a world of possibilities, from scalability and flexibility to enhanced security and cost efficiency. Our meticulous planning and execution ensure a smooth migration process, with minimal disruption to business operations. From assessing the current environment to preparing the infrastructure, migrating data and applications.',
        "providing comprehensive training and support, we leave no stone unturned in ensuring the success of this project. With our expertise and dedication, we empower our client to embrace the full potential of cloud computing, driving innovation.",
      ],
    },
    projectDetails: {
      services: "Cloud Migration",
      client: "Techco",
      location: "New York,NY,USA",
      completedDate: "20-12-2024",
    },
    projectRequirement: {
      title: "Project Requirement",
      description:
        "In this phase of the Cloud Migration and Integration project, our focus is on executing robust data migration strategies to ensure the seamless transfer of data from on-premises servers to cloud storage solutions. Leveraging advanced techniques and tools,",
      requirements: Array(6).fill("Comprehensive Assessment Phase"),
    },
    solutions: [
      {
        title: "Solution & Result",
        description: [
          "The successful execution of robust data migration strategies ensures the seamless transfer of data from on-premises servers to cloud storage solutions. Data integrity, security, and regulatory compliance are prioritized throughout the migration process. Rigorous testing and validation verify the accuracy and completeness of data migration, minimizing downtime and data loss risks.",
          "To achieve successful data migration, our solution includes a comprehensive approach that encompasses meticulous planning, advanced techniques, and thorough testing. We leverage industry-leading tools and expertise.",
        ],
      },
      {
        title: "Solution & Result",
        description: [
          "The successful execution of robust data migration strategies ensures the seamless transfer of data from on-premises servers to cloud storage solutions. Data integrity, security, and regulatory compliance are prioritized throughout the migration process. Rigorous testing and validation verify the accuracy and completeness of data migration, minimizing downtime and data loss risks.",
          "To achieve successful data migration, our solution includes a comprehensive approach that encompasses meticulous planning, advanced techniques, and thorough testing. We leverage industry-leading tools and expertise.",
        ],
      },
    ],
    similarProjects: {
      title: "Our Similar Projects",
      projects: portfolio.portfolios.slice(0, 2),
    },
  },
};
// servicesData Page
const servicesData = {
  banner: {
    title: "Our Services",
    highlightName: "Details",
    subTitle: "Team",
  },
  hero: {
    highlight: "IT Guidance😍",
    title: "Tailored IT Solutions for Your Success",
    description:
      "we understand that every business is unique, with its own set of challenges, goals, and aspirations. That's why we offer tailored IT solutions designed.",
    mainImage: "/assets/images/elemants/elemants (23).png",
    bgImage: "/assets/images/elemants/elemants (13).png",
  },
  whyUs: {
    subtitle: "Why Us better",
    title: "Why Our Services are Better Than Others?",
    features: [
      {
        icon: "/assets/images/elemants/elemants (2).png",
        title: "Quality Comes First",
      },
      {
        icon: "/assets/images/elemants/elemants (24).png",
        title: "Flexible Cooperation",
      },
      {
        icon: "/assets/images/elemants/elemants (25).png",
        title: "On-time Delivery",
      },
      {
        icon: "/assets/images/elemants/elemants (26).png",
        title: "Transparent Costs",
      },
      {
        icon: "/assets/images/elemants/elemants (27).png",
        title: "Qualified Developers",
      },
      {
        icon: "/assets/images/elemants/elemants (28).png",
        title: "Quick Scale-up",
      },
    ],
    bottomImage: "/assets/images/elemants/elemants (14).png",
  },
};
// servicesData Page details
const servicesDataDetals = {
  banner: {
    title:
      "Driving Digital Transformation Explore the Depth of Our IT Projects",
    highlightName: "Portfolio",
    subTitle: "Our",
  },
  mainImage: {
    src: "/assets/images/img/portfolioImage.png",
    width: 1000,
    height: 1000,
  },
  content: {
    title: "Network Infrastructure and Design",
    description: [
      "Network infrastructure and design are the backbone of modern businesses, serving as the foundation upon which all digital operations rely. At our IT solution agency, we specialize in crafting robust and reliable network architectures tailored to meet the unique needs of our clients. From small businesses to large enterprises, we understand the critical importance of a well-designed network infrastructure in driving efficiency, security, and scalability. Our team of experienced professionals works closely with clients.",
      "We take a holistic approach to network design, considering factors such as bandwidth requirements, security protocols, scalability, and future growth potential. By leveraging industry best practices and cutting-edge technologies,",
    ],
  },
  serviceProcess: {
    title: "Service Process",
    steps: [
      {
        id: "item-1",
        title: "01. Listening to Your Needs",
        content:
          "Data - driven diagnostic and predictive app for improving outcomes Data driven diagnostic and predictive app for improving.",
      },
      {
        id: "item-2",
        title: "02. Tailored Solutions",
        content:
          "Data - driven diagnostic and predictive app for improving outcomes Data driven diagnostic and predictive app for improving.",
      },
      {
        id: "item-3",
        title: "03. Tactical Alignment",
        content:
          "Data - driven diagnostic and predictive app for improving outcomes Data driven diagnostic and predictive app for improving.",
      },
      {
        id: "item-4",
        title: "04. Measurable Results",
        content:
          "Data - driven diagnostic and predictive app for improving outcomes Data driven diagnostic and predictive app for improving.",
      },
    ],
    image: "/assets/images/elemants/elemants (30).png",
  },
  outcomes: {
    title: "Services Outcome",
    description:
      "Here are six key points that can be associated with a digital Transformation gallery case global Digital Systems Engineer Services leader helping Fortune 500 companies on their innovation agenda:",
    items: [
      "Scalability and Flexibility",
      "User Experience",
      "Security and Compliance",
      "Security and Compliance",
      "Performance Optimization",
      "Training and Education",
    ],
  },
};
// blog detalis page
const blogPostDetals = {
  banner: {
    title: "Leading the Digital Age with Groundbreaking IT Technologies",
    backgroundImage: "/assets/images/backgrounds/Rectangle 14.png",
    breadcrumb: {
      company: "Techco",
      category: "Cybersecurity",
    },
  },
  post: {
    mainImage: "/assets/images/img/Rectangle_37.png",
    author: "John Doe 3", // Replace with actual author
    date: "January 2, 2025", // Replace with actual date
    Comments: 3,
    content: {
      introduction: [
        "Gain exclusive insights into the world of IT solutions with Techco's distinguished thought leaders. With years of experience and a deep understanding of industry trends, our thought leaders offer invaluable perspectives that illuminate the path to technological excellence. From emerging technologies to innovative strategies, they provide unique insights that inform and inspire. Join us as we delve into the inner workings of IT solutions, exploring the challenges.",
        "Embark on an illuminating journey into the world of IT solutions with Techco's esteemed thought leaders. Delve deep into the inner workings of technology as our seasoned experts share their wealth of knowledge and experience. With a finger on the pulse of industry trends and a keen eye for innovation, our thought leaders offer unparalleled insights that illuminate",
      ],
      featureImage: "/assets/images/elemants/elemants (16).png",
      listItems: [
        "Item 1", // Replace with actual items
        "Item 2",
        "Item 3",
        "Item 4",
      ],
      quote: {
        text: "Your quote text here", // Replace with actual quote
        author: "Quote Author",
      },
      conclusion: [
        "The technological advancements of 2024 offer unprecedented opportunities for businesses to innovate and thrive. By embracing AI and ML, edge computing, advanced cybersecurity, hybrid cloud environments, 5G technology, remote work solutions, and quantum computing, businesses can stay ahead of the curve and drive sustainable growth. Stay informed and be proactive in adopting these technologies to transform your business and achieve.",
        "Though still in its nascent stages, quantum computing holds promise for solving complex problems beyond the capabilities of classical computers. Industries such as pharmaceuticals, finance, and logistics are exploring quantum computing for its potential to accelerate research, optimize processes, and enhance cryptographic security.",
      ],
    },
    tags: ["Technology", "Innovation", "Digital"], // Replace with actual tags
  },
  pagination: {
    currentPage: 2,
    totalPages: 3,
  },
};
// Team Page
const teamPageData = {
  banner: {
    title: "Team Member",
    highlightName: "Members",
    subTitle: "Team",
  },
  intro: {
    mainText: "Our Dedicated Team",
    highlightedText: "Team",
    heading: "Get to Know Our Expert Techco Team",
    description:
      "Get acquainted with the powerhouse behind Techco – our expert team of professionals dedicated to revolutionizing the IT landscape.",
    buttonText: "Talk to an Expert",
    buttonIcon: IoIosArrowRoundForward,
    introImage: "/assets/images/elemants/elemants (23).png",
    animatedBackgroundImage: "/assets/images/elemants/elemants (13).png",
  },
  section: {
    subHeading: "Our Expert Team",
    highlightedSubHeading: "Members",
    heading: "Top Skilled Experts",
    teamCards: home.section_6.cards, // Assuming this is pre-defined in your code
    animatedBackgroundImages: [
      "/assets/images/elemants/elemants (14).png",
      "/assets/images/elemants/elemants (13).png",
    ],
  },
};
// team details page
const teamDetails = {
  banner: {
    title: "Team Details",
    highlightName: "Details",
    subTitle: "Team",
  },
  personalInfo: {
    image: "/assets/images/img/Rectangle 11.png",
    name: "August Everest",
    details: {
      responsibility: "Systems Engineer",
      experience: "18 Years",
      email: "August@example.com",
      phone: "+91590 0574 258",
    },
    skills: [
      { name: "Product Development", value: "98%" },
      { name: "Problem-Solving", value: "98%" },
      { name: "Communication Skills", value: "98%" },
      { name: "Passion for Helping", value: "98%" },
    ],
  },
  professionalSkills: {
    title: "Professional Skills",
    description: `
      Since joining Techco in 1993, Matilda has been instrumental in transforming the company 
      into a world-renowned leader in Digital Systems Engineering Services, catering to Fortune 500 enterprises. 
    `,
  },
  educationalExperience: {
    title: "Educational Experience",
    degrees: [
      {
        level: "Bachelor's",
        field: "Computer Science",
        university: "University of XYZ",
        specialization: ["Data Structures", "Algorithms", "Networks"],
      },
      {
        level: "Master's",
        field: "Information Technology Management",
        university: "ABC University",
      },
    ],
    highlights: [
      "Proficiency in systems analysis, design, implementation, and maintenance.",
      "Strong knowledge of network protocols, hardware, and software components.",
      "Experience with virtualization technologies (VMware, Hyper-V).",
      "Skilled in cloud computing platforms (AWS, Azure, Google Cloud).",
      "Proficient in scripting languages (Python, PowerShell).",
      "Experience in system security and disaster recovery planning.",
    ],
  },
};
// Contact Page
const contactPageData = {
  banner: {
    title: "Contact Us",
    subTitle: "Contact",
    highlightName: "Us 🥰",
  },
  contactInfo: [
    {
      icon: MapPin,
      title: "Location",
      details: ["Sunshine Business Park Sector-94, Poland"],
    },
    {
      icon: Phone,
      title: "Contact",
      details: ["+88(0) 555-0108", "+88(0) 555-01117"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Techco@example.com", "gmail.@example.com"],
    },
    {
      icon: Clock,
      title: "Visit Between",
      details: ["Mon - Sat: 8.00-5.00", "Sunday: Closed"],
    },
  ],
  form: {
    heading: "Send Us A Message",
    description: "Give us chance to serve and bring magic to your brand.",
    placeholders: {
      name: "Full Name*",
      email: "Your Email*",
      phone: "Your Phone*",
      message: "Message*",
    },
    button: {
      text: "SEND MESSAGE",
      className:
        "rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700",
    },
  },
  map: {
    src: "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
    className: "h-full w-full",
  },
};
const footerData = {
  heroSection: {
    heading: "Ready to Work, Let's Chat",
    description:
      "Our team of experts is ready to collaborate with you every step of the way, from initial consultation to implementation.",
    buttonText: "Contact Us Today",
  },
  socialIcons: [
    { icon: BiLogoFacebook, link: "#" },
    { icon: BiLogoInstagram, link: "#" },
    { icon: BiLogoLinkedin, link: "#" },
  ],
  contactInfo: [
    {
      icon: MdEmail,
      title: "Write to us",
      content: "Techco@gmail.com",
    },
    {
      icon: BiPhoneCall,
      title: "Call Us (USA)",
      content: "+(1) 1230 452 8597",
    },
    {
      icon: BiCurrentLocation,
      title: "Our Office",
      content: "Waterloo, Park, Australia",
    },
  ],
  links: [
    {
      name: "Services",
      links: [
        {
          name: "It Consultation",
          link: "/",
        },
        {
          name: "Cloud Services",
          link: "/",
        },
        {
          name: "AI Machine Learning",
          link: "/",
        },
        {
          name: "Data Security",
          link: "/",
        },
        {
          name: "Software Development",
          link: "/",
        },
        {
          name: "Cyber Security",
          link: "/",
        },
      ],
    },
    {
      name: "Information",
      links: [
        {
          name: "About Techco",
          link: "/",
        },
        {
          name: "Investors",
          link: "/",
        },
        {
          name: "Contact",
          link: "/",
        },
        {
          name: "Affiliate Program",
          link: "/",
        },
        {
          name: "Career",
          link: "/",
        },
        {
          name: "Pricing Plan",
          link: "/",
        },
      ],
    },
    {
      name: "Product",
      links: [
        {
          name: "Case Studies",
          link: "/",
        },
        {
          name: "Our Pricing",
          link: "/",
        },
        {
          name: "Features",
          link: "/",
        },
        {
          name: "Overview",
          link: "/",
        },
        {
          name: "New Releases",
          link: "/",
        },
        {
          name: "Solutions",
          link: "/",
        },
      ],
    },
  ],
  newsletter: {
    title: "Newsletter",
    description:
      "Sign up to Techco weekly newsletter to get the latest updates.",
    placeholder: "Enter your Email",
  },
  footerBottom: {
    copyright: "Copyright © 2024",
    companyName: "TechFocus",
  },
};
// list of images
const Brands = [
  "/assets/images/brandes/client_logo_1.webp",
  "/assets/images/brandes/brand_1.webp",
  "/assets/images/brandes/client_logo_1.webp",
  "/assets/images/brandes/client_logo_2.webp",
  "/assets/images/brandes/client_logo_3.webp",
  "/assets/images/brandes/client_logo_4.webp",
  "/assets/images/brandes/client_logo_9.webp",
  "/assets/images/brandes/client_logo_2.webp",
  "/assets/images/brandes/client_logo_4.webp",
];

export {
  home,
  Brands,
  about,
  price,
  portfolio,
  portfolioData,
  servicesData,
  servicesDataDetals,
  blogPostDetals as blogPostDetails,
  teamDetails,
  teamPageData,
  contactPageData,
  footerData,
  Settings,
};
