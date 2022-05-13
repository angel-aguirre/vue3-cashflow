module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                'brand-green': '#04b500',
                'brand-blue': '#0689b0',
                'dark-light': '#e5e5e5',
                'soft-blue': '#e6f9ff',
            },
            boxShadow: {
                'slide-panel': '0 -8px 16px #e5e5e5',
            },
        },
    },
    plugins: [],
    purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
};
