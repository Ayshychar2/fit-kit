import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function TrainerBookingModal() {
  const { selectedTrainer, isTrainerModalOpen, setIsTrainerModalOpen } = useApp();
  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    timeSlot: '08:00 AM',
    notes: ''
  });

  if (!isTrainerModalOpen || !selectedTrainer) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    if (!formData.date) return;
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      setIsTrainerModalOpen(false);
      setFormData({ date: '', timeSlot: '08:00 AM', notes: '' });
    }, 4000);
  };

  const timeSlots = [
    '06:00 AM', '08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={() => !booked && setIsTrainerModalOpen(false)}
      ></div>

      {/* Container */}
      <div className="relative w-full max-w-lg bg-surface-container border border-outline-variant/30 z-10 flex flex-col rounded-none animate-scale-up">
        
        {/* Close Button */}
        {!booked && (
          <button
            onClick={() => setIsTrainerModalOpen(false)}
            className="absolute top-4 right-4 text-on-secondary-container hover:text-primary transition-colors focus:outline-none z-20"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        )}

        {/* Content */}
        <div className="p-8 space-y-6">
          {booked ? (
            <div className="text-center py-8 space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 border border-primary flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-primary text-4xl animate-bounce">event_available</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-3xl text-white uppercase tracking-wider">SESSION SCHEDULED</h3>
                <p className="font-body text-sm text-on-secondary-container">
                  Your workout with <span className="text-white font-bold">{selectedTrainer.name}</span> is booked.
                </p>
              </div>
              <div className="bg-brand-grey-dark p-4 border border-outline-variant/30 w-full font-mono text-xs text-on-surface-variant text-center space-y-1">
                <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span className="uppercase text-on-secondary-container">TRAINER:</span>
                  <span className="text-white font-bold">{selectedTrainer.name.toUpperCase()}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span className="uppercase text-on-secondary-container">DATE:</span>
                  <span className="text-white font-bold">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase text-on-secondary-container">TIME:</span>
                  <span className="text-primary font-bold">{formData.timeSlot}</span>
                </div>
              </div>
              <p className="font-body text-[10px] text-primary animate-pulse uppercase tracking-widest pt-2">
                A CONFIRMATION HAS BEEN LINKED TO YOUR ACCESS PASS.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <span className="font-display text-xs text-primary uppercase tracking-widest">— BOOK COACHING</span>
                <h3 className="font-display text-4xl text-on-surface uppercase mt-1">
                  TRAIN WITH {selectedTrainer.name.split(' ')[0]}
                </h3>
                <p className="font-body text-xs text-on-secondary-container mt-1">
                  Select a session slot below. Sessions are 60 minutes of intensive personal training.
                </p>
              </div>

              {/* Trainer Brief Card */}
              <div className="flex items-center gap-4 p-4 bg-background border border-outline-variant/20">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 flex-shrink-0">
                  <img
                    src={selectedTrainer.image}
                    alt={selectedTrainer.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-display text-base text-white uppercase">{selectedTrainer.name}</h4>
                  <p className="font-body text-[10px] text-on-secondary-container uppercase">
                    {selectedTrainer.role}
                  </p>
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-4 font-body text-sm">
                <div className="space-y-1">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider block">CHOOSE DATE</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface focus:outline-none rounded-none uppercase"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider block">CHOOSE TIMESLOT</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className={`py-2 text-[10px] font-bold border font-mono transition-colors text-center focus:outline-none ${
                          formData.timeSlot === slot
                            ? 'bg-primary text-white border-primary'
                            : 'border-outline-variant/50 hover:border-primary text-on-secondary-container'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider block">SESSION GOAL / NOTES</label>
                  <textarea
                    rows="2"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="E.G. FORM ANALYSIS, MAX DEADLIFT TESTING, INJURY RECOVERY..."
                    className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface placeholder-on-secondary-container/30 focus:outline-none rounded-none uppercase text-xs"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsTrainerModalOpen(false)}
                  className="w-1/3 border border-outline-variant text-on-surface font-bold py-4 uppercase tracking-wider hover:border-primary hover:text-primary transition-colors focus:outline-none"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-primary text-white font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 border border-primary hover:border-white focus:outline-none"
                >
                  CONFIRM BOOKING
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
