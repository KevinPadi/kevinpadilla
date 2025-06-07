import { Magnetic } from "./magnetic";
export function MagneticBasic() {
  return (
    <Magnetic actionArea="global" range={170}>
      <button
        type='button'
        className='inline-flex items-center rounded-xl md:rounded-3xl border border-zinc-100 bg-blue-500 md:bg-neutral-200 p-2 md:p-5 transition-all duration-300 hover:bg-blue-500 shadow-lg shadow-blue-500/50 md:shadow-white/20 hover:scale-105 hover:shadow-blue-500/50 hover:shadow-xl text-white md:text-black hover:text-white'
      >
        <span className="font-semibold text-2xl md:text-4xl">
          Escribime!
        </span>
      </button>
    </Magnetic>
  );
}
