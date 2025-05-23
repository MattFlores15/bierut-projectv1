module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Helvetica Neue', 'Arial', 'sans-serif'], // Or any other sans-serif you prefer
        },
        colors: {
          'dark-gray': '#222', // For a clean, modern feel
          'light-gray': '#f0f0f0',
          'accent': '#007bff', // A subtle accent color,  Shifting Blue
        },
      },
    },
    plugins: [],
  }