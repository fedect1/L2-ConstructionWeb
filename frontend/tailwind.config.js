/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        SoftOrange: '#ff6a00',
        GrayCustom: '#333333',
        VeryDarkBlue: '#1E202A',
        WhatsappGreen: '#25D366',
        WhatsappHover: '#075E54',
      },
    },
    plugins: [],
  },
};
