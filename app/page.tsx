import Image from "next/image";
import heroImageMain from "../public/images/hero-image-main.png";
import heroImageSmallOne from "../public/images/hero-image-small-one.png";

export default function Home() {
  return (
    <main className="bg-(--color-beige) p-6">
      <section>
        <h1 className="flex flex-wrap items-center justify-center">
          <span className="font-sans font-light text-[40px] tracking-tighter leading-[0.8]">Hello, I&apos;m </span>
          <span className="font-serif italic font-bold text-7xl tracking-tight">Dwyane. </span>
          <svg width="110" height="61" viewBox="0 0 110 61" fill="none">
            <path d="M64.3238 35.6705L110 30.5L64.3238 25.3295L55 0L45.6762 25.3295L0 30.5L45.6762 35.6705L55 61L64.3238 35.6705Z" fill="#1A1A1A"/>
          </svg>
        </h1>
        <h2 className="text-center leading-none">
          <span className="font-serif font-medium text-2xl">Visual Artist / </span>
          <span className="font-sans text-[22px]">Software Engineer</span>
          <span className="font-serif font-medium text-2xl"> / Graphics Designer</span>
        </h2>
        <div className="py-6 grid grid-cols-[repeat(3,1fr)] gap-2">
          <div className="col-span-2 row-span-2">
            <Image
              src={heroImageMain}
              alt="hero image"
            />
          </div>
          <div className="">
            <Image 
              src={heroImageSmallOne}
              alt="hero image"
            />
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="hero-text">
          <h3>Welcome to my website.</h3>
          <p>
            I’m currently a 20 y.o. college student learning the wonderfully
            volatile life of a software engineer.
          </p>
          <p>
            Aspiring to become a professional in the sphere of computer
            technology, I’m hoping to earn a sizeable enough living to laze
            around all day without regret.
          </p>
          <p className="text-light">I hope you enjoy your time here.</p>
        </div>
      </section>
    </main>
  );
}
