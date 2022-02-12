module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '60vh': '60vh',
        '65vh': '65vh',
        '80vh': '80vh',
        '9/10': '90%'
      },
      animation: {
        blink: 'ping 2.7s linear infinite',
      },
      minWidth: {
        220: '220px',
      },

      borderRadius: {
        '10xl': '5rem',
      },

      colors: {
        green: {
          terminal: '#0f9b0f',
          lime: '#b2ff59',
        },
        black: {
          gradient: '#414141',
        },
        yellow: {
          //button: '#F09666'
          button: '#ff8f00',
        },
        gray: {
          body: '#121212',
          card: '#2B2B3D',
          banner: '#1f1f24',
        },
        white: {
          button: '#FEFDFD',
        },
        blue: {
          icon: '#4834d4',
        },
      },

      boxShadow: {
        card: '0px 17px 12px 3px rgba(0,0,0,0.84);',
      },
    },
    fontFamily: {
      carme: ['Carme'],
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
  },
  variants: {
    extend: {},
    plugins: [],
  },
}
