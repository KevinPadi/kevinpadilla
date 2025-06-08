import { Magnetic } from "./magnetic";
export function MagneticBasic() {
  return (
    <Magnetic actionArea="global" range={170}>
      <a
        href="mailto:kevpadilla01@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className='inline-flex items-center rounded-xl md:rounded-3xl border border-zinc-100 bg-blue-600 p-2 md:p-5 transition-all duration-300 hover:bg-blue-500 shadow-lg shadow-blue-500/50 hover:scale-110 hover:shadow-xl text-white hover:text-white'
      >
        <span className="font-semibold text-2xl md:text-4xl">
          Escribime!
        </span>
      </a>
    </Magnetic>
  );
}
