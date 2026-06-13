import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Programs() {
  const { openProgramModal } = useApp();
  const [filter, setFilter] = useState('ALL');

  const programsData = [
    {
      id: 'bodybuilding',
      title: 'Bodybuilding',
      category: 'HYPERTROPHY',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3SDIzO_sX3oOrlec3SimEzD8odhHFLgVetXNe9ElAkjFJsL4RxbxLjISwC7TQA79PSpB__Tq4BITW-U9IIX4XZng-H9KprUWtt5ftUt9gyVo66MEJE7ZVqYvGgdFyta30R2risbuAxhhf5UlyANbCD66QaGr46KJSCKIW2niSfVrIBDfTKpi8skMq5ei9xXQ-tNTac49wMt3sRHNqSE3NcQ6OriluCSBZHnIBgUPml5G65nNXdEyernLBpgfnHN6MSA2mrLAvRkg1',
      description: 'Sculpt your physique with focused hypertrophy training. Master isolation movements and heavy compound lifts to maximize muscle growth and definition.'
    },
    {
      id: 'crossfit',
      title: 'Crossfit',
      category: 'FUNCTIONAL',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNgcFSjADULEHRPFHONDhwrdVi7GH5RFHHJBUicK1ApnMfpM4bHyxWgIOpiERIQW1JATIEhJf2mh6aPeUWgK6yd3-jNY4Ldi1Mzk4rDQBXDByEh3pRW5cl62_biHvP_kYZD8CFj0dmoG5GusiL8bRsr0Z-6VkdSVEWMdyuqBGrj2Anpy1fQaezRbWrBbehwqNvJBRwyFwcE2y1Pn1DXty-pRFaUtRFQV_RchssOkJXoewEVm5BeRX5V5EkjXMenKMT2XIpuj8Supwc',
      description: 'Constantly varied, high-intensity functional movements. Combine gymnastics, weightlifting, and metabolic conditioning for ultimate overall fitness.'
    },
    {
      id: 'hiit',
      title: 'H.I.I.T.',
      category: 'ENDURANCE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNUWQ0_tIcGl3_AAIcdeJKlu24TuF-7wXSKHiJ6Nflj9jHSXTNzpXr2luioSkMP__Ql60vol3qgrcFZ6BITWOPN1OAZ6XeSu1jOPCTyPEDr_vJs19Lf2KRRVvk6e5nSLQuQraIx8XiWXhnalUnONprZZgQ7NjNd-KkutLIPuI9GlwLi1XDo4vBm2gJDwm_dzyp1_kivhd_pEOuCfjS46d1SRLOGTvuO11KnpEHr3B_jueUcmw68CLoI-9PUYNFg-tn4hXOxaIu7HeE',
      description: 'High-Intensity Interval Training designed to torch calories and build cardiovascular endurance rapidly through short, explosive work periods.'
    },
    {
      id: 'personal-training',
      title: 'Personal Training',
      category: '1-ON-1',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4mzsoA8ARIRyWCndqNj5VGrM4CxvU8imB9lyJfYXsL9ORUjU_bvC-xlYybZmGSTbB2nceK56KCrj2mVi4pudoEbL2NsWzHe-0-aiA4PxsyWbvuQxtSveqQ2jVleokmlPO2o9vmEUNurfn1OcXMr9VeD7sx7UJbQZ-UEDuKiHf6kDF5QPGGyyYj0MbUQIEcyFH5PVlc34vXCchS_9X8oe59p9Bdd8r_61_Gba5BKOi3dSSgkKRewVEDpjLygblaGLe5DNGu2UZ6cTN',
      description: 'Bespoke programming and dedicated coaching. Work directly with an elite trainer to address your specific weaknesses and accelerate your results.'
    }
  ];

  const filteredPrograms = filter === 'ALL' 
    ? programsData 
    : programsData.filter(p => p.category === filter);

  const filterTabs = ['ALL', 'HYPERTROPHY', 'FUNCTIONAL', 'ENDURANCE', '1-ON-1'];

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Hero Header */}
      <section className="relative w-full py-28 md:py-36 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            alt="Gym Background"
            className="w-full h-full object-cover object-center grayscale mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIuMPwMGXUUi9NkrWluWEGPJtInn_ryS23VpgCCD5yb1OM6eIRct_xnTfdJu3yJsH94cTDkm_pL5smmd5ILXhtmXFA3FllKZcuKQAFgp2b-MfCSBBGfKuu0vfKT5IyLQ507PW_gZPpiNVl2JqcBCdB62ocHTfZ_rD93mgFS-sL102ljkFaBQZT3DhKOxCosL1pkHM-SGToJ0RHmBcc-9nF9-PU6hbsX28tAor4qrNxTyWNFPZ-Q9UIG64O0kd5m6pjkrrhyWCtB54q"
          />
          <div className="absolute inset-0 bg-gritty-overlay"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="font-body text-xs font-bold text-primary uppercase tracking-[0.25em] block">— UNLEASH YOUR POTENTIAL</span>
          <h1 className="font-display text-[54px] md:text-[80px] leading-none text-on-surface uppercase tracking-tight">
            TRAINING PROGRAMS
          </h1>
          <p className="font-body text-sm md:text-lg text-on-secondary-container max-w-2xl mx-auto leading-relaxed">
            Select a discipline tailored to your goals. Our high-intensity programs are designed to push you beyond your limits, using proven methods and elite coaching.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-container-margin-mobile md:px-container-margin-desktop pt-16 flex flex-wrap justify-center gap-2 md:gap-4">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`font-display text-base md:text-lg px-6 py-2.5 transition-colors uppercase tracking-widest ${
              filter === tab
                ? 'bg-primary text-white border border-primary'
                : 'border border-outline-variant/30 hover:border-primary text-on-secondary-container hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Programs Grid */}
      <section className="py-16 px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              onClick={() => openProgramModal(program)}
              className="relative h-[450px] md:h-[500px] overflow-hidden group border border-outline-variant/20 hover:border-primary/40 cursor-pointer bg-brand-grey-dark flex flex-col justify-end transition-all duration-300 shadow-xl"
            >
              {/* Program Cover */}
              <img
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-75"
                src={program.image}
              />
              
              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-1"></div>
              
              {/* Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-primary text-white font-bold text-[10px] px-3 py-1 uppercase tracking-widest">
                  {program.category}
                </span>
              </div>

              {/* Program Details */}
              <div className="p-8 relative z-10 flex flex-col justify-end">
                <h2 className="font-display text-4xl text-on-surface uppercase mb-3 tracking-wide">
                  {program.title}
                </h2>
                <p className="font-body text-xs md:text-sm text-on-secondary-container mb-6 line-clamp-3 leading-relaxed">
                  {program.description}
                </p>
                <button
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-xs uppercase px-8 py-3 w-max transition-colors tracking-widest focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProgramModal(program);
                  }}
                >
                  EXPLORE PROGRAM
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
