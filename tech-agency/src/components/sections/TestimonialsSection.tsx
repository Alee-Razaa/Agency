interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
}

export function TestimonialsSection({
  headline,
  testimonials,
}: {
  headline: string;
  testimonials: Testimonial[];
}) {
  return (
    <section className="section">
      <h2 className="text-center mb-12">{headline}</h2>

      <div className="grid-testimonials">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="card border-l-4 border-color-primary"
          >
            <blockquote className="mb-6 italic text-color-text-secondary">
              "{testimonial.quote}"
            </blockquote>

            <div className="flex items-center gap-3">
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <p className="font-semibold text-color-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-color-text-secondary">
                  {testimonial.title} at {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
