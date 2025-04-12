import assets from "@/common/assets/img/_index";

export const ProjectsLinks = [
  {
    id: 1,
    name: "Flexwork App",
    description:
      "Is a platform that allows users to find remote jobs in Latin America. It is a platform that connects companies with professionals who want to work.",
    extendedDescription:
      "Flexwork App is a revolutionary platform designed to connect companies with professionals looking to work remotely in Latin America. The app not only makes it easy to search for job opportunities, but also provides advanced tools to customize searches, filter based on user preferences, and apply directly to the most relevant offers. With a modern and intuitive interface, Flexwork App prioritizes user experience, ensuring that both employers and candidates can interact efficiently. In addition, it offers additional resources such as remote work guides, recommendations for virtual interviews, and advice on building an attractive professional profile. Security is a priority, guaranteeing company verification and the protection of personal data. This platform is ideal for those looking for work flexibility, a better quality of life, and new opportunities in the dynamic labor market of the region. From freelancers to large companies, Flexwork App is positioned as the perfect bridge to build successful and sustainable work relationships.",
      projectTec: {
        front: {
          title: "Frontend Development",
          description: `
     Focused on creating user interfaces with React and TypeScript (TSX), using Sass for advanced styling and Redux for global state management.
     Developed reusable components and integrated third-party library components, customizing them to align with established designs.
     Implemented API integration by creating modular and reusable services to consume backend endpoints.
     Managed complex states using Redux and handled real-time data with RxJS.
          `,
        },
        backend: {
          title: "Backend Development",
          description: `
    Focused on creating services, routes, and integrating payment methods into the application.
    Integrated Cloudinary for managing and optimizing images, ensuring efficient storage and manipulation.
          `,
        },
      },
    year: "2024",
    href: "https://flexworklatam.pro/",
    className:
      "text-[var(--text-color-linkedIn)] border-[var(--border-primary)] hover:border-[var(--border-linkedIn)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25",
    img: `${assets.imgFlework}`,
  },
  {
    id: 2,
    name: "Flexwork whitelist",
    description:
      "Is a microproject that allows users to leave their details to receive information about the launch of the Flexwork App.",
    extendedDescription: "",
    projectTec: {
      front: {
        title: "Frontend Development",
        description: `
     Developed a user-friendly registration form where users could sign up to receive updates about the app's launch.
     Built using Next.js and TypeScript, ensuring a robust and scalable frontend.
     Styled with Sass to achieve advanced custom designs aligned with the app's future aesthetic.
     The design was crafted from scratch in Figma by team member Matias, focusing on consistency with the app's visual identity.`,
      },
      backend: {
        title: "Backend Development",
        description: `
     Implemented using Node.js to handle server-side functionality.
     Integrated Resend to manage email notifications, ensuring reliable communication with users.
     Created an admin panel with secure login functionality, providing HR with access.
      A user list displaying all registered individuals.
       Detailed information about each user.
       A counter to track the total number of registrations.
    Designed the backend to meet the needs of human resources, allowing precise management of client data.`,
      },
    },
    year: "2024",
    href: "https://flexwork-microproject.vercel.app/",
    className:
      "text-[var(--text-color-github)] border-[var(--border-primary)] hover:border-[var(--border-github)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25",
    img: `${assets.imgWhitelist}`,
  },
  {
    id: 3,
    name: "Coin Latam",
    description:
      "A real-time cryptocurrency reference site. It provides users with up to the minute crypto quotes.",
    extendedDescription: `The landing page is designed to serve as a real-time reference point for cryptocurrencies. Its primary goal is to provide users with up-to-the-minute information on cryptocurrency market quotes, ensuring accurate and easily accessible data at all times..`,
    projectTec: {
      front: {
        title: "Frontend Development",
        description: `
@emotion/react and @emotion/styled: Libraries for writing CSS styles with JavaScript, providing powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities.
@mui/material: A popular React UI framework with a robust set of components for building rich, interactive user interfaces.
@splinetool/react-spline: A library for creating 3D web experiences.
Axios: A promise-based HTTP client for making requests to external APIs.
Framer-motion: A library that provides animations and transitions for complex React components.
Next.js: A React framework that enables functionality such as server-side rendering and generating static websites.
Next-auth: A complete open source authentication solution for Next.js applications.
React and React-dom: React is a JavaScript library for building user interfaces. React-dom is the glue between React and the DOM.
Tailwind CSS: A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`,
      },
      backend: {
        title: "Backend Development",
        description: `Node.js: a JavaScript runtime built on Chrome's V8 JavaScript engine.
Express.js: a back-end web application framework for Node.js, designed for building web applications and APIs.
MongoDB: a document database, which enables working with large amounts of data efficiently and securely.
Axios: a promise-based HTTP client for the browser and Node.js.
Body-parser: Node.js body parsing middleware.
Cookie-parser: a middleware which parses cookies attached to the client request object.
Cors: a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
Dotenv: a zero-dependency module that loads environment variables from a .env file into process.env.
Express-rate-limit: a middleware for express routes that rate-limits incoming requests.
Express-session: a session middleware for Express.
Jsonwebtoken: an implementation of JSON Web Tokens.
Mongoose: a MongoDB object modeling tool designed to work in an asynchronous environment.
Passport: an authentication middleware for Node.js.
Passport-google-oauth20: a Passport strategy for authenticating with Google using OAuth 2.0.
Sequelize: a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.`,
      },
    },
    year: "2024",
    href: "https://github.com/julianvidela/coin-latam",
    className:
      "text-[var(--text-color-instagram)] border-[var(--border-primary)] hover:border-[var(--border-instagram)] p-2 rounded-full hover:bg-gradient-to-r hover:from-white/10 hover:via-black hover:to-black/25",
    img: `${assets.imgCoinLatam}`,
  },
];
