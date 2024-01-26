import {
  SiHeadlessui,
  SiMongodb,
  SiNextdotjs,
  SiPlanetscale,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTrpc,
  SiUpstash,
} from 'react-icons/si';

const Icons: { [key: string]: React.ComponentType } = {
  NextJS: SiNextdotjs,
  Tailwind: SiTailwindcss,
  HeadlessUI: SiHeadlessui,
  ReactJS: SiReact,
  RadixUI: SiRadixui,
  MongoDB: SiMongodb,
  ReactQuery: SiReactquery,
  Trpc: SiTrpc,
  Upstash: SiUpstash,
  PlanetScale: SiPlanetscale,
};
interface IconProps extends React.HTMLProps<SVGSVGElement> {
  icon: keyof typeof Icons;
}
export const Icon = ({ icon, ...props }: IconProps) => {
  const IconComponent = Icons[icon];
  return <IconComponent {...props} />;
};
