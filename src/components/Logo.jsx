import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <span className="logo-mark">
        <svg width="26" height="26" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8C20 20 13 29.5 13 40a19 19 0 0 0 38 0c0-10.5-7-20-19-32Z" fill="#22A35D" />
          <path d="M32 18c-7 8-11 14-11 21a11 11 0 0 0 22 0c0-7-4-13-11-21Z" fill="#8CE0B2" />
        </svg>
      </span>
      <span className="logo-text">
        <span>Tailored</span>
        <span>Pros</span>
      </span>
    </Link>
  )
}
