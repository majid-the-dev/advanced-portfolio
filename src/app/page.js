"use client"

import RightArrow from "@/components/icons/RightArrow";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Code from "@/components/icons/Code";
import Desktop from "@/components/icons/Desktop";
import Backend from "@/components/icons/Backend";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import DesktopFill from "@/components/icons/DesktopFill";
import CodeFill from "@/components/icons/CodeFill";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/data/projectData";
import Send from "@/components/icons/Send";
import Close from "@/components/icons/Close";
import { useState } from "react";

export default function Home() {

  const logo = '< Majid Oladepo />'
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);


  return (
    <main>

      <section id="home" className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-0 items-center justify-center relative pt-36 pb-16 px-8 lg:px-20">

        <Image className="absolute" src={'/Vector.png'} alt="hero-image" width={60} height={60} />

        <div className="flex-1">
          <h1 className="text-5xl font-bold text-center lg:text-start">Majid Oladepo!</h1>

          <div className="flex gap-2 items-start justify-start max-w-lg mx-auto lg:max-w-none mt-5 relative">

            <div className="mt-3.5 w-20 lg:w-7 h-0.5 bg-black"></div>

            <p className="lg:max-w-[400px] leading-9">
              <span className="font-bold">Software developer</span>, with a mastery of cutting-edge web technologies and frameworks.
              I translate complex concepts into <span className="font-bold">innovative solutions</span> with <span className="font-bold">engaging user experiences</span>.
            </p>

            <Image src={'/Vector-2.png'} className="absolute -bottom-20" width={50} height={50} />

          </div>

          {/* <div className="flex items-center justify-center lg:justify-start">
          <button type="button" className="button-primary flex gap-3 mt-5 rounded-md px-5 py-3">
            <span>EXPLORE RESUME</span>
          </button>
          </div> */}

        </div>

        <div className="flex-1 flex items-center justify-center h-full">
          <div className="flex items-center justify-center relative h-full border-4 border-black p-2">
            <Image src={'/avatar.jpeg'} width={300} height={300} />
          </div>
        </div>

        <div className="absolute-item absolute hidden lg:block">
          <div className="flex flex-col gap-5">
            <Link href={'https://www.linkedin.com/in/majid-oladepo-gmcpn-017b06252/'} target="_blank" className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-3 rounded-sm">
              <FaLinkedinIn />
            </Link>
            <Link href={'https://github.com/majid-the-dev'} target="_blank" className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-3 rounded-sm">
              <FaGithub />
            </Link>
            <Link href={'https://instagram.com/majid_creativebox?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr'} target="_blank" className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-3 rounded-sm">
              <FaInstagram />
            </Link>
            <Link href={'https://wa.me/2347048505697'} target="_blank" className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-3 rounded-sm">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="bg-secondary mx-auto px-8 lg:px-20 py-16 relative scroll-m-10">
        <div className="text-center">
          <div className="relative inline-flex">
            <h1 className="text-3xl font-bold">About Me.</h1>
            <div className="absolute top-0 -right-2 h-8 w-10 bg-red-400/25"></div>
          </div>
        </div>

        <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row items-center mt-6 lg:mt-10">

          <div className="flex-1 flex items-center justify-center">
            <Image src={'/Vector-8.png'} className="" width={300} height={300} />
          </div>

          <div className="flex-1 -order-1 lg:order-1">
            <div className="flex gap-2 items-start justify-start max-w-lg mx-auto lg:max-w-none mt-5 relative">

              <div className="mt-3.5 w-8 h-0.5 bg-black"></div>

              <div>
                <p className="leading-9 max-w-lg relative">
                  With <span className="font-bold">2 years</span> of experience, my journey into the world of software development started when I realized how much I loved tinkering
                  with code to solve <span className="font-bold">real-world problems</span>. When I'm not coding,
                  you can usually find me exploring for new experiences
                  and perspectives that can inform my work and help me grow both personally and professionally.
                  <span>
                    <Image src={'/Vector-6.png'} className="absolute -bottom-20 right-0" width={120} height={120} />
                  </span>
                </p>
                <button type="button" onClick={() => setShowModal(true)} className="button-primary rounded-md flex gap-2 items-center px-4 py-2 mt-6">
                  Explore Skillset
                  <RightArrow />
                </button>
              </div>


            </div>
          </div>
        </div>

        {showModal &&
          (<div onClick={() => setShowModal(false)} className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div onClick={e => e.stopPropagation()} className="bg-primary w-full max-w-md p-8 mx-8 max-h-full overflow-y-scroll">

              <div className="flex items-center justify-between">
                <h1 className="font-bold">Tools and Technologies</h1>
                <button type="button" onClick={() => setShowModal(false)} className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-1 rounded-sm">
                  <Close className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-row items-center justify-center flex-wrap gap-9 mt-8">
                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/html.png'} alt="html" height={50} width={50} />
                  <p className="font-bold text-xs">HTML</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/css.png'} alt="css" height={50} width={50} />
                  <p className="font-bold text-xs">CSS</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/js.png'} alt="js" height={50} width={50} />
                  <p className="font-bold text-xs">JAVASCRIPT</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/bootstrap.png'} alt="bootstrap" height={50} width={50} />
                  <p className="font-bold text-xs">BOOTSTRAP</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/tailwind.png'} alt="tailwind" height={50} width={50} />
                  <p className="font-bold text-xs">TAILWIND</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/react.png'} alt="react" height={50} width={50} />
                  <p className="font-bold text-xs">REACT</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/next.png'} alt="next" height={50} width={50} />
                  <p className="font-bold text-xs">NEXT</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/ts.png'} alt="ts" height={50} width={50} />
                  <p className="font-bold text-xs">TYPESCRIPT</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/node.png'} alt="node" height={50} width={50} />
                  <p className="font-bold text-xs">NODE</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/express.png'} alt="express" height={50} width={50} />
                  <p className="font-bold text-xs">EXPRESS</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/mongodb.png'} alt="mongo" height={50} width={50} />
                  <p className="font-bold text-xs">MONGO DB</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/mysql.png'} alt="mysql" height={50} width={50} />
                  <p className="font-bold text-xs">MYSQL</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/git.png'} alt="git" height={50} width={50} />
                  <p className="font-bold text-xs">GIT</p>
                </div>

                <div className="inline-flex flex-col gap-2 items-center justify-center">
                  <Image src={'/figma.png'} alt="figma" height={50} width={50} />
                  <p className="font-bold text-xs">FIGMA</p>
                </div>
              </div>
            </div>
          </div>)
        }

      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 lg:px-20 scroll-m-10">
        <div className="text-center">
          <div className="relative inline-flex">
            <h1 className="text-3xl font-bold">Services.</h1>
            <div className="absolute top-0 -right-2 h-8 w-10 bg-red-400/25"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 mt-14">

          <ServiceCard
            icon={<Code className="w-7 h-7" />}
            header={'Frontend Development'}
            body={'I create intuitive and visually appealing user interfaces. From pixel-perfect designs to seamless interactions, I bring your vision to life on the client-side.'}
          />
          <ServiceCard
            icon={<Backend className="w-7 h-7" />}
            header={'Backend Development'}
            body={'I build robust and scalable server-side solutions while using efficient APIs and databases to ensure seamless data flow and management.'}
          />
          <ServiceCard
            icon={<Desktop className="w-7 h-7" />}
            header={'User Interface Design'}
            body={'From wireframes to interactive prototypes, I focus on creating aesthetically pleasing and user-friendly interfaces that enhance overall user experience.'}
          />

        </div>
      </section>

      <section id="projects" className="bg-secondary mx-auto px-8 lg:px-20 py-16 relative scroll-m-10">
        <div className="text-center">
          <div className="relative inline-flex">
            <h1 className="text-3xl font-bold">Projects.</h1>
            <div className="absolute top-0 -right-2 h-8 w-10 bg-red-400/25"></div>
          </div>
        </div>

        {/* <div className="tabs flex items-center lg:justify-center mt-6 lg:mt-10 overflow-x-scroll">
          <div className="inline-flex bg-gray-400/30 rounded-full">
            <button type="button" className="px-10 py-2 bg-black text-white font-semibold rounded-full">All</button>
            <button type="button" className="px-10 py-2 hover:bg-red-400/25 hover:font-semibold whitespace-nowrap rounded-full">React JS</button>
            <button type="button" className="px-10 py-2 whitespace-nowrap">Next JS</button>
            <button type="button" className="px-10 py-2 whitespace-nowrap">Node JS</button>
            <button type="button" className="px-10 py-2 whitespace-nowrap">Others</button>
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto flex flex-row items-center justify-center flex-wrap mt-12 gap-12">
          {projectData.map(card => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>

      </section>

      <section id="blog" className="max-w-7xl mx-auto px-8 lg:px-20 py-16 relative scroll-m-10">
        <div className="text-center">
          <div className="relative inline-flex">
            <h1 className="text-3xl font-bold">BLOG.</h1>
            <div className="absolute top-0 -right-2 h-8 w-10 bg-red-400/25"></div>
          </div>
        </div>

        <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row items-center mt-6 lg:mt-10">

          <div className="flex-1">
            <div className="flex gap-2 items-start justify-start max-w-lg mx-auto lg:max-w-none mt-5 relative">

              <div className="mt-3.5 w-8 h-0.5 bg-black"></div>

              <div>
                <p className="leading-9 max-w-lg relative">
                  I share my <span className="font-bold">insights</span> and <span className="font-bold">experiences</span> as a software developer, as well as <span className="font-bold">tips</span> and <span className="font-bold">tutorials </span>
                  for those who are just starting out in the field. I'm excited to share knowledge and
                  contribute my own perspectives to the conversation.
                  <span>
                    <Image src={'/Vector-6.png'} className="absolute -bottom-20 right-0" width={120} height={120} />
                  </span>
                </p>
                <button type="button" className="button-primary rounded-md flex gap-2 items-center px-4 py-2 mt-6">
                  Explore Blog
                  <RightArrow />
                </button>
              </div>


            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Image src={'/Vector-7.png'} className="" width={300} height={300} />
          </div>

        </div>



      </section>

      <section id="contact" className="bg-secondary mx-auto px-8 lg:px-20 py-16 relative scroll-m-10">
        <div className="text-center">
          <div className="relative inline-flex">
            <h1 className="text-3xl font-bold">Contact Me.</h1>
            <div className="absolute top-0 -right-2 h-8 w-10 bg-red-400/25"></div>
          </div>
        </div>

        <div className="flex justify-between flex-col gap-20 lg:gap-0 lg:flex-row items-center mt-6 lg:mt-10">

          <div className="flex-1 flex items-center justify-center">
            <div className="bg-black text-primary p-10 rounded-md max-lg:w-full">
              <h1 className="font-bold text-xl">Send Me a Message</h1>

              <form className="flex flex-col gap-4 mt-10 w-full">
                <div className="flex flex-col md:flex-row gap-4 md:gap-7 w-full">
                  <div className="flex flex-col w-full">
                    <label>Full Name </label>
                    <input type="text" />
                  </div>
                  <div className="flex flex-col w-full">
                    <label>Email Address</label>
                    <input type="email" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label>Subject</label>
                  <input type="text" />
                </div>

                <div className="flex flex-col">
                  <label>Message</label>
                  <textarea rows="5" cols=""></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="bg-red-400 flex items-center justify-center gap-1 px-4 py-3 rounded-sm">
                    <Send className="w-5 h-5 -rotate-45" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex-1 -order-1 lg:order-1">
            <div className="flex gap-2 items-start justify-start max-w-lg mx-auto lg:max-w-none mt-5 relative">

              <div className="mt-3.5 w-8 h-0.5 bg-black"></div>

              <div>
                <p className="leading-9 max-w-lg relative">
                  Excited about your <span className="font-bold">next big project</span> and ready to turn
                  your ideas into reality? Reach out, let's start the <span className="font-bold">conversation</span>.
                  <br />
                  Based in Lagos, I'm ready to collaborate <span className="font-bold">locally</span> or <span className="font-bold">virtually</span>, bringing a blend of
                  creativity and technical expertise to every project.
                  <span>
                    <Image src={'/Vector-6.png'} className="absolute -bottom-14 right-0" width={120} height={120} />
                  </span>
                </p>

                <div className="mt-3">
                  <Link href={'/'} className="flex items-center gap-1 font-bold underline underline-offset-2">
                    <span className="flex items-center gap-4">
                      {/* <span className="inline-flex ring-4 ring-red-400/25 ring-offset-22 bg-black text-white p-3 rounded-sm">
                        <FaEnvelope />
                      </span> */}
                      majidoladepo@yahoo.com
                    </span>
                    <span className="mt-1">
                      <RightArrow />
                    </span>
                  </Link>
                </div>

                <div className="inline-flex gap-5 mt-8">
                  <Link href={'https://www.linkedin.com/in/majid-oladepo-gmcpn-017b06252/'} target="_blank" className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-3 rounded-sm">
                    <FaLinkedinIn />
                  </Link>
                  <Link href={'https://github.com/majid-the-dev'} target="_blank" className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-3 rounded-sm">
                    <FaGithub />
                  </Link>
                  <Link href={'https://instagram.com/majid_creativebox?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr'} target="_blank" className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-3 rounded-sm">
                    <FaInstagram />
                  </Link>
                  <Link href={'https://wa.me/2347048505697'} target="_blank" className="inline-flex ring-4 ring-red-400/25 bg-black text-white p-3 rounded-sm">
                    <FaWhatsapp />
                  </Link>
                </div>
                {/* <button type="button" className="button-primary rounded-md flex gap-2 items-center px-4 py-2 mt-6">
                  Explore Blog
                  <RightArrow />
                </button> */}
              </div>


            </div>
          </div>

        </div>



      </section>

      <section className="bg-black text-primary mx-auto px-8 lg:px-20 py-10 relative flex justify-between scroll-m-10">
        <div className="font-bold">
          <Link href={'/'}>{logo}</Link>
        </div>

        <p>
          © {currentYear}.
          All rights reserved.
        </p>

      </section>



    </main>
  )
}
