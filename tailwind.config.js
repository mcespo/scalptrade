/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],
    theme: {
        fontFamily: {
            display: [
                'Oswald',
                'ui-serif',
                'Georgia',
                'Cambria',
                'Times New Roman',
                'Times',
                'serif',
            ],
            body: [
                'Source Serif Pro',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ],
        },
        extend: {
            colors: {
                green: {
                    scalp: '#136B09',
                    'scalp-light': '#1da40e',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
