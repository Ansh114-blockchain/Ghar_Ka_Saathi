const services = [
  'Cleaning',
  'Security',
  'Driver',
  'Relocation',
  'Home Tutor',
  'Care Services',
  'Handyman'
];

export function ServicesPage() {
  return (
    <main>
      <h2>Services</h2>
      <div className="grid">
        {services.map((service) => (
          <article key={service} className="card">
            <h3>{service}</h3>
            <p>Verified partners with transparent pricing.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
