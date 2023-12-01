import Image from "next/image";
import CodeFill from "./icons/CodeFill";
import DesktopFill from "./icons/DesktopFill";
import { projectData } from "@/data/projectData";
import Link from "next/link";

const ProjectCard = ({ id, image, heading, paragraph, tools, url, repo }) => {

    return (
        <div className="bg-primary max-w-sm rounded-md shadow-md px-6 pt-5 pb-10">
            <div className="relative h-44">
                <Image src={'/avatar.jpeg'} alt="project-image" className="rounded-md" layout={'fill'} objectFit={'cover'} />
            </div>

            <h1 className="font-bold text-lg mt-4">{heading}</h1>

            <p className="mt-2 text-sm text-gray-500 leading-6">
                {paragraph}
            </p>

            <div className="mt-3 flex flex-wrap gap-y-3 gap-x-2">
                {tools.map(tool => (
                <div key={tool} className="inline-flex items-center px-3 py-0.5 text-sm rounded-full bg-red-400/25 whitespace-nowrap">
                    {tool}
                </div>
                ))}
            </div>

            <div className="flex items-center gap-5 mt-4">
                <Link href={url} className="flex gap-1 items-center">
                    <DesktopFill className="w-5 h-5 mt-0.5" />
                    <span className="text-sm">Demo</span>
                </Link>

                <Link href={repo} className="flex gap-1 items-center">
                    <CodeFill className="w-5 h-5 mt-0.5" />
                    <span className="text-sm">Repository</span>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard