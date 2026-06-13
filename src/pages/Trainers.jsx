import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Trainers() {
  const { openTrainerModal } = useApp();
  const [filter, setFilter] = useState('ALL');

  const trainersData = [
    {
      id: 'marcus',
      name: 'Marcus Vance',
      role: 'Head Strength Coach',
      category: 'STRENGTH',
      bio: 'Specializing in raw powerlifting and hypertrophic conditioning. Marcus brings 15 years of competitive experience to forge unbreakable athletes.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrUbLAFFFxBTRaJO3n84pRiSv89KMekHrJMGKCK7bKD0Z7-uX2IYsIXpLDM5u9AfYDU_43TfKjVHUTueKjTefm5FN69zBEtIlxMyudLmbB74k8s4eHIdqmK9DJvsguILA4KIGmHSLbTI6tuIkxXpcibGP9ngAAqrbpDzKa36DzSQENFSdnMkyNfe6hEnPK8MiTCVUcz55kxNrNDkL2WBS_ND1jQQ1ufN6vsztTzAyV2VFxSpeFSv21ETHqz_OF3o0U70FRVTceEHFj'
    },
    {
      id: 'elena',
      name: 'Elena Rostova',
      role: 'HIIT & Agility Specialist',
      category: 'CONDITIONING',
      bio: 'Former Olympic sprinter turning everyday individuals into highly functional, explosive performers through relentless metabolic conditioning.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNgDR6M0TFejNAKGNaJ6BLmt7LQ72WFEFylKQ637Mrjr55v2Cq7IcBkdrpaJoUGiwv4GTuUDYKR5irWt7A0wg6aDIlnKoxq3KAKiHlrQQxki6T6ChT-t00vn-uA2gLLgUAo6FThtCRtvUuVPco-_2uj29xsXLK-oLaa7tMqeAqM04bPawzx9Ab3PXJrqkceyriUhVdEbZhVh--mcG45PsyH028sGvkdwmRIER4tTmjBWOrXIf6F5anznZYul-kDgHaujW9IYcXkXfA'
    },
    {
      id: 'david',
      name: 'David Chen',
      role: 'Nutrition & Bodybuilding',
      category: 'NUTRITION',
      bio: 'Mastering the science of muscle growth. David combines precise macronutrient strategies with intense isolation training for peak aesthetic results.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm57ed2jflYbweTm4ybzmkSKDR6yccYADzMTcZWgLJ4TebtLLotjraMAJmwh-iBTBplDVBQAhNpZeECH6eLOSCtHDAgTo0-bG7lp6iUC1Nm9ro42jWfHimzMXNjStOD94ckaKHvzzUIw-0EObjN_LS6N5PpZB877AbyStERCZj5T6bi1noZeNd9zilM1pV8f16QamsG8MrGIZKPl279ywvKBtQj65oCD39gTYEzH9eh8KJLUMmGczWlaGZCCS049v7-Cw9AASqHotv'
    }
  ];

  const filteredTrainers = filter === 'ALL'
    ? trainersData
    : trainersData.filter(t => t.category === filter);

  const filters = ['ALL', 'STRENGTH', 'CONDITIONING', 'NUTRITION'];

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Hero Header */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt="A wide shot of a dark, industrial gym setting with heavy weights and dramatic spotlighting"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUWuPCgGQ0nL0QrfrDXDWkeP76usAWgHY-DKMVdbQUvu1d0nkQ03CoK-iQHkBzewCsIfy5FD6oBJ3--AWcWYM1rLO6ZimMnqBVa_BX51uUd9JdCOQ_-zx3qfq56CxS0yx_73HfAyr5OGyxd-63wSJKMxtXr1DZeHYwH_HvAReSjE0g5lkVXS0m6HBskD_-cOpUA-yZ7QDPu6sVhHv1INrhMQAkfFQ5cHlFza2pXm26A2ucD6Wa7NvS6Vth7gUutPgwGfzskK97U-hV"
        />
        <div className="relative z-20 text-center px-container-margin-mobile md:px-container-margin-desktop">
          <span className="font-body text-xs font-bold text-primary uppercase tracking-[0.25em] block mb-3">— THE PROVING TEAM</span>
          <h1 className="font-display text-5xl md:text-80px leading-none text-on-surface uppercase tracking-wider">
            Meet The <span className="text-primary">Experts</span>
          </h1>
          <p className="font-body text-sm md:text-lg text-on-secondary-container max-w-2xl mx-auto mt-4 leading-relaxed">
            Elite professionals dedicated to forging your ultimate physique and potential.
          </p>
        </div>
      </section>

      {/* Roster Header & Filter Tabs */}
      <main className="py-20 px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end border-l-4 border-primary pl-6 gap-6">
          <div>
            <h2 className="font-display text-4xl text-on-surface uppercase tracking-wide">Our Roster</h2>
            <p className="font-body text-sm text-on-secondary-container mt-1">Uncompromising discipline. Unmatched expertise.</p>
          </div>

          {/* Specialty Filter */}
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-display text-xs md:text-sm px-4 py-2 uppercase tracking-widest ${
                  filter === f
                    ? 'bg-primary text-white border border-primary'
                    : 'border border-outline-variant/30 hover:border-primary text-on-secondary-container hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              onClick={() => openTrainerModal(trainer)}
              className="group relative rounded-none overflow-hidden bg-brand-grey-dark border border-outline-variant/20 hover:border-primary/40 cursor-pointer flex flex-col justify-between min-h-[460px] shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Photo Area */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  alt={trainer.name}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  src={trainer.image}
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-grey-dark via-transparent to-transparent"></div>
                
                {/* Book Session overlay button on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                  <span className="bg-primary text-white font-bold text-xs uppercase px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-colors">
                    BOOK 1-ON-1 SESSION
                  </span>
                </div>
              </div>

              {/* Bio Content */}
              <div className="p-6 bg-brand-grey-dark flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-primary uppercase mb-1 tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="font-body text-[10px] font-bold text-on-secondary-container uppercase tracking-widest mb-4">
                    {trainer.role}
                  </p>
                  <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>
                </div>
                
                <div className="flex gap-4 pt-6 text-on-secondary-container border-t border-outline-variant/10 mt-4">
                  <span className="material-symbols-outlined text-lg hover:text-primary transition-colors">link</span>
                  <span className="material-symbols-outlined text-lg hover:text-primary transition-colors">mail</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
