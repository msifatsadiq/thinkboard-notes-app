import { Link } from "react-router"

const NotesNotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            color: '#fff',
            fontFamily: 'Montserrat, Arial, sans-serif',
        }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '24px' }}>
                <circle cx="12" cy="12" r="10" stroke="#00eaff" strokeWidth="2" fill="none" />
                <path d="M8 9.5C8 8.11929 9.11929 7 10.5 7H13.5C14.8807 7 16 8.11929 16 9.5V14.5C16 15.8807 14.8807 17 13.5 17H10.5C9.11929 17 8 15.8807 8 14.5V9.5Z" stroke="#00eaff" strokeWidth="2" />
                <line x1="9" y1="12" x2="15" y2="12" stroke="#00eaff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h2 style={{
                fontWeight: 700,
                fontSize: '2rem',
                letterSpacing: '2px',
                marginBottom: '12px',
                background: 'linear-gradient(90deg, #00eaff 0%, #fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>
                Note Not Found
            </h2>
            <p style={{
                fontSize: '1rem',
                color: '#b0b0b0',
                marginBottom: '24px',
                textAlign: 'center',
                maxWidth: '320px',
            }}>
                We couldn't find the note you're looking for.<br />Try searching again or create a new note.
            </p>
            <button style={{
                padding: '10px 28px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(90deg, #00eaff 0%, #005bea 100%)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,234,255,0.15)',
                transition: 'background 0.3s',
            }}>
                <Link to="/create" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Create New Note
                </Link>
            </button>
        </div>
    )
}

export default NotesNotFound