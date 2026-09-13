export default function Home() {
  return (
    <main className="bg-(--color-beige) p-6">
      <section>
        <h1 className="flex flex-wrap items-center justify-center">
          <span className="font-sans font-light text-[42px] tracking-[-3px]">Hello, I&apos;m </span>
          <span className="font-serif italic font-bold text-7xl tracking-[-3px]">Dwyane. </span>
          <svg width="110" height="61" viewBox="0 0 110 61" fill="none">
            <path d="M64.3238 35.6705L110 30.5L64.3238 25.3295L55 0L45.6762 25.3295L0 30.5L45.6762 35.6705L55 61L64.3238 35.6705Z" fill="#1A1A1A"/>
          </svg>
        </h1>
        <h2>
          <span className="heading-serif">Visual Artist / </span>
          <span className="heading-sans">Software Engineer</span>
          <span className="heading-serif"> / Graphics Designer</span>
        </h2>

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
