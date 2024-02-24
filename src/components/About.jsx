import { useState } from "react";
import bannerImage from "../assets/rafiq_2.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & React Js Developer",
    desc1: `I am a proficient Java Full Stack Developer specializing in end-to-end web application development. My skills span both frontend and backend technologies, allowing me to create seamless and feature-rich experiences. From crafting responsive user interfaces with React.js to building robust backend systems using Java and Spring frameworks, I bring a comprehensive approach to software development. With a focus on clean code, scalability, and innovative solutions, I am dedicated to transforming ideas into high-performance, user-centric applications.`,
    desc2: ` Skills:
    My technical skill set includes proficiency in Java, Spring Boot, Hibernate, JavaScript, React, HTML, and CSS. I enjoy working on the entire software development life cycle, from concept and design to testing and deployment. My experience also extends to database design and management using SQL-based systems such as MySQL.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="S Mohamad Rafiq Basha"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
