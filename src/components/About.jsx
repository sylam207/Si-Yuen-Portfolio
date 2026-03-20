import about from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { ABOUT_TEXT_2 } from "../constants";

const About = () => {
    return (
        <section id="About">
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={about} alt="about"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT_2}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;