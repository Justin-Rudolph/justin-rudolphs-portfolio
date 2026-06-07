import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import GlitchSectionTitle from '@/components/shared/GlitchSectionTitle';
import { projects } from '@/data/projects';

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver(0.1);
  const { ref: gridRef, isVisible: gridVisible } = useIntersectionObserver(0.05);

  return (
    <section id="projects" className="projects-section">
      <div className="section-aura projects-aura" aria-hidden="true" />
      <div className="section-inner">
        <div ref={headerRef as React.RefObject<HTMLDivElement>}>
          <p
            className="section-eyebrow"
            data-animate
            data-visible={headerVisible ? 'true' : undefined}
          >
            Selected Work
          </p>
          <GlitchSectionTitle title="Projects" isVisible={headerVisible} />
        </div>

        <div
          className="projects-grid"
          ref={gridRef as React.RefObject<HTMLDivElement>}
        >
          {projects.map((project, i) => {
            const Card = project.link ? 'a' : 'div';
            const linkProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Card
                key={project.id}
                className="project-card"
                data-animate-3d
                data-visible={gridVisible ? 'true' : undefined}
                data-delay={String(Math.min(i + 1, 7))}
                {...linkProps}
              >
                <div className={`project-thumb ${project.thumbClass}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className={`project-thumb-img project-thumb-img--${project.imageFit ?? 'cover'}`}
                    />
                  ) : (
                    <span className="project-thumb-ghost" aria-hidden="true">
                      {project.name.split(' ').at(-1)!.toUpperCase()}
                    </span>
                  )}
                  <span className="project-thumb-badge">{project.badge}</span>
                </div>
                <div className="project-body">
                  <p className="project-name">{project.name}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
