import React from 'react';
import { useApp } from '../context/AppContext';

export default function ProgramDetailModal() {
  const { selectedProgram, isProgramModalOpen, setIsProgramModalOpen, openCheckout } = useApp();

  if (!isProgramModalOpen || !selectedProgram) return null;

  // Mock data additions based on program
  const programDetails = {
    'BODYBUILDING': {
      duration: '12 Weeks',
      intensity: 'VERY HIGH',
      frequency: '5 Days / Week',
      calories: '650 kcal / Session',
      instructor: 'Marcus Vance',
      description: 'Master the principles of muscle growth, progressive overload, and mechanical tension. This training protocol focuses on heavy compound lifts combined with targeted accessory movements to maximize hypertrophy, symmetry, and raw strength.',
      schedule: [
        { day: 'Mon/Wed/Fri', time: '07:00 AM - 09:00 AM' },
        { day: 'Tue/Thu', time: '06:00 PM - 08:00 PM' }
      ]
    },
    'CROSSFIT': {
      duration: 'Ongoing',
      intensity: 'EXTREME',
      frequency: '4-6 Days / Week',
      calories: '800 kcal / Session',
      instructor: 'Elena Rostova',
      description: 'Prepare to forge absolute functional work capacity. Combining olympic lifting, metabolic conditioning, gymnastics, and high-intensity structural endurance. Every workout is scaled but designed to push your psychological and physiological limits.',
      schedule: [
        { day: 'Daily (Mon-Sat)', time: '06:00 AM, 08:00 AM, 05:30 PM' }
      ]
    },
    'H.I.I.T.': {
      duration: '8 Weeks',
      intensity: 'HIGH',
      frequency: '3-4 Days / Week',
      calories: '750 kcal / Session',
      instructor: 'Elena Rostova',
      description: 'Relentless intervals designed for maximum caloric burn and metabolic conditioning. Using sprints, rowing, kettlebells, and bodyweight plyometrics under strict work-to-rest ratios to spike your VO2 max and trigger the afterburn effect.',
      schedule: [
        { day: 'Tue/Thu/Sat', time: '09:00 AM - 10:00 AM' },
        { day: 'Mon/Wed', time: '07:00 PM - 08:00 PM' }
      ]
    },
    'PERSONAL TRAINING': {
      duration: 'Custom',
      intensity: 'TAILORED',
      frequency: 'Flexible',
      calories: 'Customizable',
      instructor: 'David Chen / Marcus Vance',
      description: 'Our ultimate premium offering. Work 1-on-1 with an elite practitioner to analyze your movement, calibrate your nutrition, and program specifically for your unique biomechanics and goals. Accelerate progress with direct spotting and absolute accountability.',
      schedule: [
        { day: 'By Appointment', time: '05:00 AM - 10:00 PM Daily' }
      ]
    }
  };

  const name = selectedProgram.title.toUpperCase();
  const info = programDetails[name] || {
    duration: 'N/A',
    intensity: 'HIGH',
    frequency: 'Custom',
    calories: 'N/A',
    instructor: 'Staff Expert',
    description: selectedProgram.description,
    schedule: [{ day: 'Flexible', time: 'Contact for scheduling' }]
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={() => setIsProgramModalOpen(false)}
      ></div>

      {/* Container */}
      <div className="relative w-full max-w-2xl bg-surface-container border border-outline-variant/30 z-10 flex flex-col max-h-[90vh] overflow-y-auto rounded-none animate-scale-up">
        
        {/* Close Button */}
        <button
          onClick={() => setIsProgramModalOpen(false)}
          className="absolute top-4 right-4 text-on-secondary-container hover:text-primary transition-colors focus:outline-none z-20"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        {/* Banner Image */}
        <div className="relative h-64 w-full">
          <img
            src={selectedProgram.image}
            alt={selectedProgram.title}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:left-8">
            <span className="bg-primary text-white text-[11px] font-bold px-3 py-1 uppercase tracking-widest">
              {selectedProgram.category}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider mt-2">
              {selectedProgram.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            {info.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-background border border-outline-variant/20 text-center text-xs font-body">
            <div>
              <span className="text-on-secondary-container uppercase block font-semibold">DURATION</span>
              <span className="text-white font-bold block mt-1 uppercase">{info.duration}</span>
            </div>
            <div>
              <span className="text-on-secondary-container uppercase block font-semibold">INTENSITY</span>
              <span className="text-primary font-bold block mt-1 uppercase">{info.intensity}</span>
            </div>
            <div>
              <span className="text-on-secondary-container uppercase block font-semibold">FREQUENCY</span>
              <span className="text-white font-bold block mt-1 uppercase">{info.frequency}</span>
            </div>
            <div>
              <span className="text-on-secondary-container uppercase block font-semibold">CALORIES</span>
              <span className="text-white font-bold block mt-1 uppercase">{info.calories}</span>
            </div>
          </div>

          {/* Schedule & Trainer details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="font-display text-lg uppercase text-primary tracking-wide mb-3">INSTRUCTOR</h4>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-grey-dark flex items-center justify-center border border-outline-variant/30">
                  <span className="material-symbols-outlined text-on-secondary-container">sports_gymnastics</span>
                </div>
                <div>
                  <span className="font-display text-base text-white uppercase block">{info.instructor}</span>
                  <span className="font-body text-[10px] text-on-secondary-container uppercase">FIT KIT CERTIFIED ELITE COACH</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg uppercase text-primary tracking-wide mb-3">WEEKLY SCHEDULE</h4>
              <div className="space-y-1.5 font-mono text-[11px] text-on-surface-variant">
                {info.schedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-outline-variant/10 pb-1">
                    <span className="font-bold text-white uppercase">{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setIsProgramModalOpen(false)}
              className="w-1/3 border border-outline-variant text-on-surface font-bold py-4 uppercase tracking-wider hover:border-primary hover:text-primary transition-colors focus:outline-none"
            >
              CLOSE
            </button>
            <button
              onClick={() => {
                setIsProgramModalOpen(false);
                openCheckout({
                  id: `prog-${selectedProgram.title.toLowerCase()}`,
                  title: `${selectedProgram.title} Program Admission`,
                  price: selectedProgram.title.toLowerCase().includes('personal') ? 129 : 59,
                  type: 'PROGRAM',
                  quantity: 1
                });
              }}
              className="w-2/3 bg-primary text-white font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 border border-primary hover:border-white focus:outline-none"
            >
              REGISTER FOR PROGRAM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
