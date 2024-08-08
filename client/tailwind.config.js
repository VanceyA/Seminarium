/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-300',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-gray-500',
    'bg-red-600',
    'bg-orange-500',
    'bg-indigo-500',
    'bg-rose-500',
    'bg-teal-400',
  ],
}

