import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoAngular } from 'react-icons/io';
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from 'react-icons/si';

const Tech = () => {
    const cardStyle ="flex h-28 w-28 items-center justify-center rounded-2xl border border-neutral-800 p-4 transition hover:scale-110 hover:border-neutral-700";
    return (

        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies & Tools</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className={cardStyle}>
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className={cardStyle}>
                    <TbBrandNextjs className="text-7xl"/>
                </div>
                <div className={cardStyle}>
                    <IoLogoAngular className="text-7xl text-red-700"/>
                </div>
                <div className={cardStyle}>
                    <SiExpress className="text-7xl"/>
                </div>
                <div className={cardStyle}>
                    <FaNodeJs className="text-7xl text-green-400"/>
                </div>
                <div className={cardStyle}>
                    <img alt src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"/>
                </div>
                <div className={cardStyle}>
                    <SiMongodb className="text-7xl text-green-400"/>
                </div>
                <div className={cardStyle}>
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </div>
                <div className={cardStyle}>
                    <img alt src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"/>
                </div>
                <div className={cardStyle}>
                    <img alt src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"/>
                </div>
                <div className={cardStyle}>
                    <img alt src="https://skillicons.dev/icons?i=docker&theme=dark"/>
                </div>
            </div>
        </div>
    );
};

export default Tech;