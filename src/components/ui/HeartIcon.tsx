// HeartSVG.js
const HeartSVG = ({ filled }: {filled: boolean}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "red" : "gray"}
    width="50px"
    height="50px"
  >
    <path d="M0 0h40v40H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 7.02 4.02 5 6.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 16.98 5 19 7.02 19 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z" />
  </svg>
);
export default HeartSVG;
