import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { experiences } from '@/data/experience';

export default function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver(0.1);
  const { ref: timelineRef, isVisible: timelineVisible } = useIntersectionObserver(0.05);

  return (
    <section id="experience" className="experience-section">
      <div className="section-aura experience-aura" aria-hidden="true" />
      <div className="section-inner">
        <div ref={headerRef as React.RefObject<HTMLDivElement>}>
          <p
            className="section-eyebrow"
            data-animate
            data-visible={headerVisible ? 'true' : undefined}
          >
            Work History
          </p>
          <h2
            className="section-title"
            data-animate
            data-visible={headerVisible ? 'true' : undefined}
            data-delay="1"
          >
            Experience
          </h2>
        </div>

        <div
          className="timeline"
          ref={timelineRef as React.RefObject<HTMLDivElement>}
          data-visible={timelineVisible ? 'true' : undefined}
        >
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`timeline-item${exp.featured ? ' timeline-item--featured' : ''}`}
              data-animate
              data-visible={timelineVisible ? 'true' : undefined}
              data-delay={String(Math.min(i + 1, 7))}
            >
              <p
                className="timeline-date"
                data-animate-left
                data-visible={timelineVisible ? 'true' : undefined}
                data-delay={String(Math.min(i + 1, 7))}
              >{exp.period}</p>
              <div>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-role">{exp.role}</p>
                {exp.highlight && (
                  <p className="timeline-highlight">{exp.highlight}</p>
                )}
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
