import React from 'react';
import { useApp } from '../context/AppContext';

export default function Home() {
  const { navigateTo, openCheckout, openProgramModal } = useApp();

  const handleProgramClick = (title, category, image) => {
    openProgramModal({ title, category, image, description: '' });
  };

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Muscular male athlete lifting a heavy barbell in a dark, gritty gym environment."
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC12kpIMtE3SKGIWU9BfmYNSMKRrRWkSkEw-PosHRevRPETKVJQzUAN7ltoA1PHIt0vTosw0v3SpSKtnhBknISV2LeRrEc4RdtpLpvjU9SjKJfQaUaAlcVZPDvHweVumReEXJP161kAmuDwJQqWp4lqoromXVn1b4Qcs-0GLLZBbmVGVkybr2l4Tp0WDAVIEq0M1steb97yp-64RItznz4L2Huxgd2jLaU5np1UghER5KGgDq_u0qHMit4iFnOmriz552JnF4e-zZec"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute bottom-0 w-full h-1/2 gradient-overlay"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-container-margin-mobile md:px-container-margin-desktop w-full max-w-7xl mx-auto mt-16 md:mt-0">
          <p className="font-body text-[11px] md:text-sm font-bold text-primary uppercase tracking-[0.25em] mb-4">
            Unleash Your Potential
          </p>
          <h1 className="font-display text-[60px] md:text-[120px] leading-[0.85] text-on-surface uppercase tracking-tighter mb-8 max-w-5xl mx-auto">
            FORGE YOUR <span className="text-stroke-red">LIMITS</span>
          </h1>
          <p className="font-body text-sm md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Elite performance training for those who refuse to settle. Join a community built on discipline, sweat, and raw power.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openCheckout()}
              className="bg-primary text-on-primary font-bold text-sm px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest min-w-[200px] text-center w-full sm:w-auto focus:outline-none border-2 border-primary hover:border-white shadow-[6px_6px_0px_0px_rgba(255,85,64,0.15)] hover:shadow-none"
            >
              JOIN NOW
            </button>
            <button
              onClick={() => navigateTo('programs')}
              className="border-2 border-white/20 text-on-surface font-bold text-sm px-10 py-5 hover:border-primary hover:text-primary transition-all duration-300 uppercase tracking-widest min-w-[200px] text-center w-full sm:w-auto focus:outline-none"
            >
              EXPLORE PROGRAMS
            </button>
          </div>
        </div>

        {/* Scrolling Text Marquee */}
        <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none">
          <div className="animate-marquee font-display text-[60px] text-stroke tracking-widest uppercase">
            STRENGTH • ENDURANCE • POWER • DISCIPLINE • FOCUS • STRENGTH • ENDURANCE • POWER • DISCIPLINE • FOCUS • 
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-container-margin-mobile md:px-container-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="px-4">
            <h3 className="font-display text-[60px] md:text-[80px] text-primary mb-1">10+</h3>
            <p className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="px-4 border-l border-outline-variant/30">
            <h3 className="font-display text-[60px] md:text-[80px] text-primary mb-1">500+</h3>
            <p className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-wider">Elite Members</p>
          </div>
          <div className="px-4 border-l border-outline-variant/30">
            <h3 className="font-display text-[60px] md:text-[80px] text-primary mb-1">50+</h3>
            <p className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-wider">Pro Trainers</p>
          </div>
          <div className="px-4 border-l border-outline-variant/30">
            <h3 className="font-display text-[60px] md:text-[80px] text-primary mb-1">15k+</h3>
            <p className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-wider">Workouts Done</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-container-margin-mobile md:px-container-margin-desktop bg-black relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl relative z-10">
              <span className="font-body text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-3">
                The Fit Kit Advantage
              </span>
              <h2 className="font-display text-[40px] md:text-[64px] leading-tight text-on-surface uppercase tracking-tighter">
                NOT JUST A GYM. <br /> A <span className="text-primary">PROVING GROUND.</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative z-10">
            {/* Card 1 */}
            <div className="glass-panel p-8 hover:bg-surface-variant transition-colors duration-300 group flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary">
                    fitness_center
                  </span>
                </div>
                <h3 className="font-display text-[32px] text-on-surface uppercase mb-3">Premium Equipment</h3>
                <p className="text-on-secondary-container font-body text-sm leading-relaxed mb-6">
                  State-of-the-art strength and cardio gear curated for serious athletes. No compromises on quality.
                </p>
              </div>
              <button
                onClick={() => navigateTo('programs')}
                className="inline-flex items-center text-xs font-bold text-primary hover:text-on-surface transition-colors uppercase tracking-wider group/link focus:outline-none text-left"
              >
                Learn More 
                <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-8 hover:bg-surface-variant transition-colors duration-300 group border-b-4 border-b-primary flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary">
                    sports_gymnastics
                  </span>
                </div>
                <h3 className="font-display text-[32px] text-on-surface uppercase mb-3">Expert Coaching</h3>
                <p className="text-on-secondary-container font-body text-sm leading-relaxed mb-6">
                  Train with industry veterans who push you beyond what you thought was physically possible.
                </p>
              </div>
              <button
                onClick={() => navigateTo('trainers')}
                className="inline-flex items-center text-xs font-bold text-primary hover:text-on-surface transition-colors uppercase tracking-wider group/link focus:outline-none text-left"
              >
                Meet Trainers 
                <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="glass-panel p-8 hover:bg-surface-variant transition-colors duration-300 group flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary">
                    monitoring
                  </span>
                </div>
                <h3 className="font-display text-[32px] text-on-surface uppercase mb-3">Performance Tracking</h3>
                <p className="text-on-secondary-container font-body text-sm leading-relaxed mb-6">
                  Data-driven progress. We measure everything so you can see exactly how far you've come.
                </p>
              </div>
              <button
                onClick={() => navigateTo('programs')}
                className="inline-flex items-center text-xs font-bold text-primary hover:text-on-surface transition-colors uppercase tracking-wider group/link focus:outline-none text-left"
              >
                View Tech 
                <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs (Bento Grid) */}
      <section className="py-24 px-container-margin-mobile md:px-container-margin-desktop bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-[40px] md:text-[64px] text-on-surface uppercase tracking-tighter mb-4">
              Popular <span className="text-primary">Programs</span>
            </h2>
            <p className="font-body text-sm md:text-base text-on-secondary-container max-w-2xl mx-auto leading-relaxed">
              Specialized training modules designed to target specific goals, from brute strength to lean endurance.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main Feature (2x2) */}
            <div
              onClick={() =>
                handleProgramClick(
                  'Power Building',
                  'Hypertrophy',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDkTmesQFtNOJ2O5I7Goh4ywdGUH7KuvCCLZ33xrCJTQTkvpyEc4KXeLbQyg-qmPz_o7MODBy-FrDktN3CRkKrZO5bpu7ONfccuVO4U8HQLHufQ8UF2M1dMHphS94cHuj5XTGVDmdjxl_TAbpaKAZMZTaWaYnzIiFBFZ7lrJ5vbzy4NDWkr7pWGUfER_ghW6IvuEbFxLkU6aXG9YztSTfkxU8J1QeA7BhofqFlQJzl0MTBC-OpHcBtJn0teQwmR_Ct0K-yESTszl8gf'
                )
              }
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-surface-container min-h-[400px] cursor-pointer"
            >
              <img
                alt="Power building class"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkTmesQFtNOJ2O5I7Goh4ywdGUH7KuvCCLZ33xrCJTQTkvpyEc4KXeLbQyg-qmPz_o7MODBy-FrDktN3CRkKrZO5bpu7ONfccuVO4U8HQLHufQ8UF2M1dMHphS94cHuj5XTGVDmdjxl_TAbpaKAZMZTaWaYnzIiFBFZ7lrJ5vbzy4NDWkr7pWGUfER_ghW6IvuEbFxLkU6aXG9YztSTfkxU8J1QeA7BhofqFlQJzl0MTBC-OpHcBtJn0teQwmR_Ct0K-yESTszl8gf"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="bg-primary text-on-primary font-bold text-[9px] uppercase px-2 py-1 w-max mb-3 tracking-widest">
                  Featured
                </span>
                <h3 className="font-display text-[40px] md:text-[48px] text-on-surface uppercase mb-2">
                  Power Building
                </h3>
                <p className="font-body text-xs md:text-sm text-on-secondary-container mb-4 max-w-md">
                  Hybrid program combining powerlifting strength with bodybuilding aesthetics.
                </p>
                <span className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:text-on-surface transition-colors">
                  View Program <span className="material-symbols-outlined ml-1 text-sm">arrow_outward</span>
                </span>
              </div>
            </div>

            {/* Top Right Feature (2x1) */}
            <div
              onClick={() =>
                handleProgramClick(
                  'Raw Strength',
                  'Strength',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuADhWxNnHjscyD874KbXUAFXduU7yCXd3nf5yyrNguNvRRaUuONUGSKWfItLXllQy8mULJ9DEtozBW5UCqH4e8s22AwOTG_laajynlxpTNHTB4SJw80JI3PNy4I2p98zXOoafqPS8oE6wnCTcORIhV16hcw-nBGZ0Kwa4rV8BuRmxgopKjbrZLWT4TWbS3tQAi85Mv-s5jdvh0FkEvYpndYs3788Cu9Q8wOyfeqmG6szjkrMRcO1ANcY-w98kRdZjnkYHlc4Ki6zBTR'
                )
              }
              className="md:col-span-2 relative group overflow-hidden bg-surface-container min-h-[200px] cursor-pointer"
            >
              <img
                alt="Raw strength training"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADhWxNnHjscyD874KbXUAFXduU7yCXd3nf5yyrNguNvRRaUuONUGSKWfItLXllQy8mULJ9DEtozBW5UCqH4e8s22AwOTG_laajynlxpTNHTB4SJw80JI3PNy4I2p98zXOoafqPS8oE6wnCTcORIhV16hcw-nBGZ0Kwa4rV8BuRmxgopKjbrZLWT4TWbS3tQAi85Mv-s5jdvh0FkEvYpndYs3788Cu9Q8wOyfeqmG6szjkrMRcO1ANcY-w98kRdZjnkYHlc4Ki6zBTR"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="bg-primary/20 border border-primary/30 text-primary font-bold text-[9px] uppercase px-2 py-0.5 w-max mb-2 tracking-widest">
                  Powerlifting
                </span>
                <h3 className="font-display text-[28px] md:text-[32px] text-on-surface uppercase mb-1">
                  Raw Strength
                </h3>
                <p className="font-body text-xs text-on-secondary-container max-w-sm">
                  Focus on the big three: Squat, Bench, Deadlift.
                </p>
              </div>
            </div>

            {/* Bottom Right 1 (1x1) */}
            <div
              onClick={() =>
                handleProgramClick(
                  'H.I.I.T.',
                  'Endurance',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDNUWQ0_tIcGl3_AAIcdeJKlu24TuF-7wXSKHiJ6Nflj9jHSXTNzpXr2luioSkMP__Ql60vol3qgrcFZ6BITWOPN1OAZ6XeSu1jOPCTyPEDr_vJs19Lf2KRRVvk6e5nSLQuQraIx8XiWXhnalUnONprZZgQ7NjNd-KkutLIPuI9GlwLi1XDo4vBm2gJDwm_dzyp1_kivhd_pEOuCfjS46d1SRLOGTvuO11KnpEHr3B_jueUcmw68CLoI-9PUYNFg-tn4hXOxaIu7HeE'
                )
              }
              className="relative group overflow-hidden bg-surface-container hover:bg-surface-variant transition-colors min-h-[180px] flex flex-col justify-center items-center text-center p-6 border border-outline-variant/10 cursor-pointer"
            >
              <span className="material-symbols-outlined text-5xl text-primary mb-3 group-hover:scale-110 transition-transform">
                sprint
              </span>
              <h3 className="font-display text-2xl text-on-surface uppercase mb-2">HIIT Burn</h3>
              <span className="material-symbols-outlined text-on-secondary-container group-hover:text-primary transition-colors text-xl">
                arrow_forward
              </span>
            </div>

            {/* Bottom Right 2 (1x1) */}
            <div
              onClick={() =>
                handleProgramClick(
                  'Personal Training',
                  '1-on-1',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuD4mzsoA8ARIRyWCndqNj5VGrM4CxvU8imB9lyJfYXsL9ORUjU_bvC-xlYybZmGSTbB2nceK56KCrj2mVi4pudoEbL2NsWzHe-0-aiA4PxsyWbvuQxtSveqQ2jVleokmlPO2o9vmEUNurfn1OcXMr9VeD7sx7UJbQZ-UEDuKiHf6kDF5QPGGyyYj0MbUQIEcyFH5PVlc34vXCchS_9X8oe59p9Bdd8r_61_Gba5BKOi3dSSgkKRewVEDpjLygblaGLe5DNGu2UZ6cTN'
                )
              }
              className="relative group overflow-hidden bg-brand-grey-dark hover:bg-surface-variant transition-all duration-300 border border-outline-variant/30 min-h-[180px] p-6 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="font-display text-2xl text-primary uppercase mb-1">Custom Plan</h3>
                <p className="font-body text-xs text-on-secondary-container leading-relaxed">
                  Tailored completely to your unique physiology.
                </p>
              </div>
              <span className="bg-transparent border border-primary text-primary text-center py-2 font-bold uppercase text-[10px] tracking-wider group-hover:bg-primary group-hover:text-white transition-colors block w-full mt-4">
                EXPLORE 1-ON-1
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 mix-blend-multiply opacity-20">
          <img
            alt="Abstract grit texture"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5HZckMVx898UdQ1GNO6tA1XQ3uDYp5T8ghbvHVxzwqPoesiQf_kQgbZrCDADRx3ZJAwPhHzJitLK8GHLLFrDVvaO8fGoz52VO6u9ynnzaLNj2iGitvLCLbbfRv49miJMGbNqti3yIaYWx36GdKlkeYdKfQ-8aJLPkGaORCBMizMYR_ppEIV_-8UYJaLWQh38JYf5BTI3d8jU4ng9r5795Tt29idIfeV8Zgq9K78Nogrmuz9xU5s0Srqa9LivU8NYhPRJuMoPs334z"
          />
        </div>
        <div className="max-w-4xl mx-auto px-container-margin-mobile md:px-container-margin-desktop text-center relative z-10">
          <h2 className="font-display text-[54px] md:text-[96px] text-white uppercase tracking-tighter mb-6 leading-none">
            STOP MAKING EXCUSES. <br /> START GRINDING.
          </h2>
          <p className="font-body text-sm md:text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Limited time offer. Get 20% off all annual memberships this month. Join the elite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => openCheckout({
                id: 'annual-offer',
                title: 'Annual Pro Gym Access (20% Off)',
                price: 47,
                type: 'MEMBERSHIP',
                quantity: 1
              })}
              className="bg-black text-white font-bold text-sm px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 focus:outline-none"
            >
              CLAIM OFFER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
