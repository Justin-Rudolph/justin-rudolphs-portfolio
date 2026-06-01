import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section id="skills" className="skills-section">
      <div className="section-aura skills-aura" aria-hidden="true" />
      <div
        className="section-inner"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <p
          className="section-eyebrow"
          data-animate
          data-visible={isVisible ? 'true' : undefined}
        >
          Tech Stack
        </p>
        <h2
          className="section-title"
          data-animate
          data-visible={isVisible ? 'true' : undefined}
          data-delay="1"
        >
          Skills
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => {
            const groupOffset = skillGroups
              .slice(0, gi)
              .reduce((acc, g) => acc + g.skills.length, 0);

            return (
              <div key={group.label}>
                <p
                  className="skill-group-label"
                  data-animate
                  data-visible={isVisible ? 'true' : undefined}
                  data-delay={String(Math.min(gi + 2, 7))}
                >
                  {group.label}
                </p>
                <div className="skill-pills">
                  {group.skills.map((skill, si) => (
                    <div
                      key={skill}
                      className="skill-pill"
                      data-animate-pill
                      data-visible={isVisible ? 'true' : undefined}
                      style={isVisible ? { transitionDelay: `${(groupOffset + si) * 0.042 + 0.18}s` } : undefined}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
