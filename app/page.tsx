import Marquee from './marquee';
import Orbite from './orbiting';
import SmoothCursorDemo from './smoothCursor';
import DotPattern from '@/components/magicui/dot-pattern';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Terminal } from '@/components/magicui/terminal';
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedList } from "@/components/magicui/animated-list";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { Ripple } from "@/components/magicui/ripple";
import { MorphingText } from "@/components/magicui/morphing-text";
import { WarpBackground } from "@/components/magicui/warp-background";

export default function Home() {
  return (
    <div>

      <WarpBackground className='p-2'>



<div className="fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-between p-2 bg-white/50 backdrop-blur-sm z-50 shadow-sm rounded-3xl w-1/2">
           <SparklesText className='text-[35px] p-1'>Pritam.</SparklesText>
          <div>
            <RainbowButton className='mt-3 mr-3'>Let's gooo!💪🏻</RainbowButton>
          </div>
        </div>




        <div className="min-h-screen flex flex-col items-center gap-4 mt-50">

          <MorphingText texts={["Pritam", "Pramanik"]} />
          <div><Terminal className='bg-gray-100 w-3xl'><pre className="text-gray-950">
            pnpm dlx shadcn@latest init<br />

            ✔ Preflight checks.<br />

            ✔ Verifying framework. Found Next.js.<br />

            ✔ Validating Tailwind CSS.<br />

            ✔ Validating import alias.<br />

            ✔ Writing components.json.<br />

            ✔ Checking registry.<br />

            ✔ Updating tailwind.config.ts<br />

            ✔ Updating app/globals.css<br />

            ✔ Installing dependencies.<br />

            i Updated 1 file:<br />

            - lib/utils.ts<br />

            Success! Project initialization completed.<br />
            You may now add components.</pre>
          </Terminal></div>



        </div>




        <div>
          <Marquee />
        </div>

        <div className="relative flex items-center justify-center mt-2">
          {/* Ripple as background */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <Ripple />
          </div>

          {/* Orbit on top */}
          <Orbite />
        </div>
      </WarpBackground>


      {/* <div>
        <div>
        <DotPattern/>
        </div>


      </div>
      <SmoothCursorDemo /> */}
    </div>




  );
}
