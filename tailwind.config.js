/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', '"Cascadia Code"', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        paper: 'oklch(0.965 0.012 85)',
        'paper-deep': 'oklch(0.935 0.018 80)',
        ink: 'oklch(0.20 0.025 270)',
        'ink-muted': 'oklch(0.45 0.020 270)',
        hairline: 'oklch(0.82 0.018 80)',
        signal: 'oklch(0.55 0.22 28)',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
