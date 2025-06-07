// BadgeList.tsx
import {
  React,
  Git,
  GitHub,
  Tailwind,
  JavaScript,
  Express,
  Node,
  TypeScript,
  Api,
  Router,
  Vercel
} from './Icons';

type BadgeListProps = {
  items: string[];
};

const icons = [
  { name: 'react', component: <React /> },
  { name: 'git', component: <Git /> },
  { name: 'github', component: <GitHub /> },
  { name: 'tailwind', component: <Tailwind /> },
  { name: 'javascript', component: <JavaScript /> },
  { name: 'express', component: <Express /> },
  { name: 'node', component: <Node /> },
  { name: 'typescript', component: <TypeScript /> },
  { name: 'api', component: <Api /> },
  { name: 'react router', component: <Router /> },
  { name: 'vercel', component: <Vercel /> },
];

export const BadgeList = ({ items }: BadgeListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const icon = icons.find((i) => i.name === item.toLowerCase());
        console.log(icon)
        if (!icon) return null;
        return (
          <div key={item} className="flex items-center justify-center gap-1 bg-neutral-900 border border-neutral-800 text-white rounded-full px-2 py-1 text-sm pointer-events-none">
            <div className='size-4 border border-transparent rounded-full flex items-center justify-center'>
              {icon.component}
            </div>
            <span className="capitalize">{item}</span>
          </div>
        );
      })}
    </div>
  );
};

