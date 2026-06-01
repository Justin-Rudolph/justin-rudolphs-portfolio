import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--jr-bg)',
        padding: '2rem',
        textAlign: 'center',
        gap: '1rem',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--jr-font-mono)',
          fontSize: '0.625rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--jr-accent)',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: 'var(--jr-font-display)',
          fontSize: 'clamp(48px, 8vw, 80px)',
          fontWeight: 900,
          letterSpacing: '-2px',
          color: 'var(--jr-text)',
          lineHeight: 0.95,
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          fontFamily: 'var(--jr-font-body)',
          fontSize: '0.9375rem',
          color: 'var(--jr-text-dim)',
          marginBottom: '1rem',
        }}
      >
        The page you're looking for doesn't exist.
      </p>
      <button className="btn-primary" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}
