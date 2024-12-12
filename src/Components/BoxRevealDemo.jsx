import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import { ButtonPrimary,ButtonOutline } from "./Button";

function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
            <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                        src="/images/avatar-1.jpg"
                        width={40}
                        height={40} 
                        alt="Aung portrait" className="img-cover"/>
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
            </div>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scalable Modern Websites for the Future
          </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
          <div className="flex items-center gap-3">
                    <ButtonPrimary
                      label="Download CV"
                      icon='download'
                    />
                    <ButtonOutline
                      href="#about"
                      label="Scroll down"
                      icon='arrow_downward'
                    />
          </div>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;
