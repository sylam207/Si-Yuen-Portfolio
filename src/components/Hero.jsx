import { HERO_CONTENT } from "../constants";
import { HERO_CONTENT_2 } from "../constants";
import profile from "../assets/profile.png";
import resume from "../assets/Resume.pdf"

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Si Yuen Lam</h1>
                        <span className="bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
                        text-4xl tracking-tight text-transparent">Software Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light">{HERO_CONTENT}</p>
                        <p className="my-2 max-w-xl py-6 font-light">{HERO_CONTENT_2}</p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a href={resume} 
                                className="
                                w-full sm:w-auto text-center
                                rounded-xl px-6 sm:px-10 py-3 text-lg font-medium text-white
                                bg-linear-to-r from-pink-300 via-slate-500 to-purple-500
                                transition duration-300
                                hover:scale-105
                                hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                                Resume
                                </a>
                            </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                    <div className="flex justify-center">
                        <img src={profile} alt="profile" className="h-190 object-cover rounded-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;