"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Samantha",
    avatar: "S",
    title: "Senior Frontend Developer",
    description:
      "The Chatbot feature is a lifesaver for me as a frontend developer. It answers my queries instantly, helping me overcome roadblocks. The Photo Generation functionality sparks creativity, providing stunning images for my designs. And the Code Generation tool accelerates my coding process, turning complex tasks into a breeze.",
  },
  {
    name: "Alexander",
    avatar: "A",
    title: "Data Scientist",
    description:
      "As a data scientist, I'm amazed by the capabilities of this AI application. The Music Generation feature adds a harmonious touch to my experiments, inspiring new avenues of research. Code Generation accelerates my algorithm implementations, saving valuable time. The Video Generation tool transforms data visualizations into captivating stories.",
  },
  {
    name: "Emily",
    avatar: "E",
    title: "UX/UI Designer",
    description:
      "The AI application has revolutionized my design process. Photo Generation generates visuals that breathe life into my user interfaces. The Code Generation feature bridges the gap between design and functionality, making user interactions intuitive. And Video Generation transforms my design concepts into dynamic narratives that captivate users.",
  },
  {
    name: "Max",
    avatar: "M",
    title: "Backend Engineer",
    description:
      "Being a backend engineer, I value efficiency. The Chatbot feature instantly troubleshoots issues in our systems, ensuring seamless operations. Code Generation saves me time on routine tasks, enabling me to focus on optimizing our backend architecture. Video Generation helps me create informative demos for complex backend systems.",
  },
  {
    name: "Isabella",
    avatar: "I",
    title: "Product Manager",
    description:
      "This AI application is a game-changer for product managers. The Chatbot ensures smooth communication with our user base, addressing concerns promptly. Music Generation ignites innovation during brainstorming sessions, fostering creative product ideas. Code Generation empowers our development team to swiftly bring new features to life.",
  },
  {
    name: "Ethan",
    avatar: "E",
    title: "Mobile App Developer",
    description:
      "As a mobile app developer, I rely on the AI application's versatility. The Chatbot enhances user experiences with interactive dialogues. Code Generation boosts my productivity by automating repetitive coding tasks. Video Generation brings my app designs to life, showcasing their functionality and features seamlessly.",
  },
  {
    name: "Olivia",
    avatar: "O",
    title: "Data Analyst",
    description:
      "For data analysts like me, the AI application is a treasure trove of insights. The Chatbot dives into datasets to extract real-time insights, expediting our analysis. Photo Generation adds informative visuals to our reports, making data more accessible. Code Generation facilitates data processing, enabling quicker decision-making.",
  },
  {
    name: "Liam",
    avatar: "L",
    title: "DevOps Engineer",
    description:
      "The AI application seamlessly integrates into our DevOps workflow. The Chatbot provides instant troubleshooting, ensuring smooth operations. Code Generation expedites scripting tasks, enhancing our automation capabilities. Video Generation helps us showcase our projects' success, fostering transparent communication across teams.",
  },
];

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className='bg-[#192339] border-none text-white'
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-zinc-400 text-sm'>{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0 line-clamp-4'>
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
