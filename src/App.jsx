export default function App() {
  return (
    <main className="md:flex gap-5 m-auto md:w-full w-full md:p-5 sm:p-3 p-2 md:space-y-0 space-y-5 sm:text-xs text-xs md:text-sm">
      <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 gap-5 md:space-y-0 space-y-5">
        <section className="bg-[--Moderate-violet] text-[--Light-grayish-blue] relative col-span-2 space-y-3 px-5 py-2 rounded-xl shadow-2xl shadow-black/30 z-0">
          <img className="absolute md:mr-20 mr-5 -z-10 top-0 right-0" src="src/assets/images/bg-pattern-quotation.svg" alt="" />
          
          <div className="flex gap-3">
            <img className="w-10 h-10 rounded-full" src="src/assets/images/image-daniel.jpg" alt="" />
            <div>
              <h1 className="font-semibold">Daniel Clifford</h1>
              <h2 className="font-semibold opacity-50">Verified Graduate</h2>
            </div>
          </div>
          
          <p className="font-bold md:text-lg sm:text-base text-lg">
            I received a job offer mid-course, and the subjects I learned were current, if not more so,
            in the company I joined. I honestly feel I got every penny’s worth.
          </p>

          <p className="font-semibold opacity-70">
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
            transition and have heard some people who had an amazing experience here. I signed up
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
            The next 12 weeks was the best - and most grueling - time of my life. Since completing
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </p>
        </section>

        <section className="bg-[--Very-dark-grayish-blue] text-[--Light-grayish-blue] space-y-3 p-5 rounded-xl shadow-2xl shadow-black/30">
          <div className="flex gap-3">
            <img className="rounded-full w-10 h-10" src="src/assets/images/image-jonathan.jpg" alt="" />
            <div>
              <h1 className="font-semibold">Jonathan Walters</h1>
              <h2 className="font-semibold opacity-50">Verified Graduate</h2>
            </div>
          </div>
          
          <p className="font-bold md:text-lg sm:text-base text-lg">The team was very supportive and kept me motivated</p>
          
          <p className="font-semibold opacity-70">
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
            for a big company. This was one of the best investments I’ve made in myself. ”
          </p>
        </section>

        <section className="bg-[--Light-grayish-blue] text-[--Very-dark-grayish-blue] space-y-3 p-5 rounded-xl shadow-2xl shadow-black/30">
          <div className="flex gap-3">
            <img className="rounded-full w-10 h-10" src="src/assets/images/image-jeanette.jpg" alt="" />
            <div>
              <h1 className="font-semibold">Jeanette Harmon</h1>
              <h2 className="font-semibold opacity-50">Verified Graduate</h2>
            </div>
          </div>
          
          <p className="font-bold md:text-lg sm:text-base text-lg">An overall wonderful and rewarding experience</p>
          
          <p className="font-semibold opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
            while doing something I love. ”
          </p>
        </section>

        <section className="bg-[--Very-dark-blackish-blue] text-[--Light-grayish-blue] space-y-3 col-span-2 p-5 rounded-xl shadow-2xl shadow-black/30">
          <div className="flex gap-3">
            <img className="rounded-full w-10 h-10" src="src/assets/images/image-patrick.jpg" alt="" />
            <div>
              <h1 className="font-semibold">Patrick Abrams</h1>
              <h2 className="font-semibold opacity-50">Verified Graduate</h2>
            </div>
          </div>
          
          <p className="font-bold md:text-lg sm:text-base text-lg">
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
            learning from their experiences was easy.
          </p>
          
          <p className="font-semibold opacity-70">
            “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
            gave me the confidence necessary to be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the personal attention you need from
            an incredible community of smart and amazing people. ”
          </p>
        </section>
      </div>

      <section className="bg-[--Light-grayish-blue] text-[--Very-dark-grayish-blue] w-full space-y-3 p-5 rounded-xl shadow-2xl shadow-black/30">
        <div className="flex gap-3">
          <img className="rounded-full w-10 h-10" src="src/assets/images/image-kira.jpg" alt="" />
          <div>
            <h1 className="font-semibold">Kira Whittle</h1>
            <h2 className="font-semibold opacity-50">Verified Graduate</h2>
          </div>
        </div>
        
        <p className="font-bold md:text-lg sm:text-base text-lg">Such a life-changing experience. Highly recommended!</p>
        
        <p className="font-semibold opacity-70">
          “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
          could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
          100% recommend! ”
        </p>
      </section>
    </main>
  )
}