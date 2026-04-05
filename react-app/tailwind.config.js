/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#10221C',
        'bg-card': '#1E293B', // using a nicer card color as fallback
        'bg-card-hover': '#1E293B',
        'border-color': '#263430',
        'accent-green': '#10B981',
        'accent-green-dim': 'rgba(0, 219, 122, 0.15)',
        'accent-yellow': '#FACC15',
        'accent-yellow-dim': 'rgba(250, 204, 21, 0.15)',
        'text-main': '#FFFFFF',
        'text-muted': '#94A3B8',
        'text-danger': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
