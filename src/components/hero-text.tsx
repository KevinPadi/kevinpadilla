import { TextEffect } from './animated-text.tsx';

export function TextEffectWithExit() {

  const blurSlideVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.01 },
      },
      exit: {
        transition: { staggerChildren: 0.01, staggerDirection: 1 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px) brightness(0%)',
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px) brightness(100%)',
        transition: {
          duration: 0.4,
        },
      },
    },
  };

  return (
    <h1 className='w-full text-3xl md:text-6xl text-white flex flex-col items-start md:items-center font-medium'>
      <TextEffect
        className='inline-flex text-neutral-400'
        per='char'
        variants={blurSlideVariants}
      >
        ¡Hola! Soy Kevin
      </TextEffect>
      <TextEffect
        className=''
        per='char'
        variants={blurSlideVariants}
        delay={0.2}
      >
        Desarrollador Full Stack
      </TextEffect>
      <TextEffect
        className=''
        per='char'
        variants={blurSlideVariants}
        delay={0.4}
      >
        De Uruguay
      </TextEffect>
    </h1>
  );
}
