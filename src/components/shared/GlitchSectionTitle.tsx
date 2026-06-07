interface GlitchSectionTitleProps {
  title: string;
  isVisible: boolean;
  delay?: string;
  className?: string;
}

function TitleLines({ title }: { title: string }) {
  return title.split('\n').map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {line}
    </span>
  ));
}

export default function GlitchSectionTitle({
  title,
  isVisible,
  delay = '1',
  className = 'section-title',
}: GlitchSectionTitleProps) {
  return (
    <h2
      className={`${className} section-title-glitch`}
      data-animate
      data-visible={isVisible ? 'true' : undefined}
      data-delay={delay}
    >
      <span className="section-title-glitch__base">
        <TitleLines title={title} />
      </span>
      {['red', 'green', 'blue'].map(channel => (
        <span
          key={channel}
          className={`section-title-glitch__rgb section-title-glitch__rgb--${channel}`}
          aria-hidden="true"
        >
          <TitleLines title={title} />
        </span>
      ))}
      <span className="section-title-glitch__slice section-title-glitch__slice--top" aria-hidden="true">
        <TitleLines title={title} />
      </span>
      <span className="section-title-glitch__slice section-title-glitch__slice--bottom" aria-hidden="true">
        <TitleLines title={title} />
      </span>
    </h2>
  );
}
