/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-0': 'var(--primary-0)',
        'primary-1': 'var(--primary-1)',
        'primary-2': 'var(--primary-2)',
        'secondary-0': 'var(--secondary-0)',
        'secondary-1': 'var(--secondary-1)',
        'secondary-2': 'var(--secondary-2)',
        'tertiary-0': 'var(--tertiary-0)',
        'tertiary-1': 'var(--tertiary-1)',
        'tertiary-2': 'var(--tertiary-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'success-0': 'var(--success-0)',
        'success-1': 'var(--success-1)',
        'success-2': 'var(--success-2)',
        'error-0': 'var(--error-0)',
        'error-1': 'var(--error-1)',
        'error-2': 'var(--error-2)',
        'warning-0': 'var(--warning-0)',
        'warning-1': 'var(--warning-1)',
        'warning-2': 'var(--warning-2)',
      },
      width: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      padding: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      borderWidth: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      spacing: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      borderRadius: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
    },
  },
  plugins: [],
}
