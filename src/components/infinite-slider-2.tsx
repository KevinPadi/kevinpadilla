import { React, Git, Tailwind, GitHub, JavaScript, Express, Node, TypeScript } from "./Icons"
import { InfiniteSlider } from "./inifinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

const tech = [
  {
    icon: <React />,
    label: 'React',
  },
  {
    icon: <TypeScript />,
    label: 'TypeScript',
  },
  {
    icon: <JavaScript />,
    label: 'JavaScript',
  },
  {
    icon: <Git />,
    label: 'Git',
  }, 
  {
    icon: <GitHub />,
    label: 'GitHub',
  },
  {
    icon: <Tailwind />,
    label: 'TailwindCSS',
  },
  {
    icon: <Express />,
    label: 'Express.js',
  },
  {
    icon: <Node />,
    label: 'Node.js',
  },
];

export default function InfiniteSlider2() {
  return (
    <div className='relative h-40 w-full'>
      <InfiniteSlider gap={30} speedOnHover={20}  className='relative flex h-full w-full items-center before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-gradient-to-r before:from-neutral-900 before:to-transparent before:content-[""] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-gradient-to-r after:from-neutral-900 after:to-transparent after:content-[""]' >
      {
        tech.map((src, index) => {
          console.log(src.icon)
          return (
          <div key={index} className="flex flex-col gap-2 items-center justify-center aspect-square">
            <span className="w-10 sm:w-20 p-2 sm:p-4 bg-neutral-800 rounded-xl aspect-square flex items-center justify-center">
              {src.icon}
            </span>
            <span className="text-sm text-center text-neutral-100">
              {src.label}
            </span>
          </div>
        )
        })
      }
      </InfiniteSlider>
      <ProgressiveBlur
        className='pointer-events-none absolute bottom-full left-0 h-full w-[50px] sm:w-[100px]'
        direction='left'
        blurIntensity={1}
      />
      <ProgressiveBlur
        className='pointer-events-none absolute bottom-80 left-full -translate-x-full h-full w-[50px] sm:w-[100px]'
        direction='right'
        blurIntensity={1}
      />
    </div>
  );
}
