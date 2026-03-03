import { db } from '../../common/utils/inMemoryDb.js';

export const listWorkers = ({ city, skill, name }) =>
  db.workers.filter((w) => {
    const cityOk = city ? w.city.toLowerCase() === city.toLowerCase() : true;
    const skillOk = skill ? w.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase())) : true;
    const nameOk = name ? w.name.toLowerCase().includes(name.toLowerCase()) : true;
    return cityOk && skillOk && nameOk && w.isActive;
  });

export const seedWorkers = () => {
  if (db.workers.length) return;
  db.workers.push(
    { id: 'w1', name: 'Ravi Cleaner', city: 'Lucknow', skills: ['cleaning', 'deep cleaning'], rating: 4.8, isActive: true, lat: 26.8467, lng: 80.9462 },
    { id: 'w2', name: 'Aman Electrician', city: 'Lucknow', skills: ['electrician', 'wiring'], rating: 4.6, isActive: true, lat: 26.85, lng: 80.93 },
    { id: 'w3', name: 'Seema Tutor', city: 'Kanpur', skills: ['home tutor', 'math'], rating: 4.7, isActive: true, lat: 26.45, lng: 80.35 }
  );
};
