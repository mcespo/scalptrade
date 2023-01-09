module.exports = {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md'
    ],
    theme: {
        extend: {
            colors: {
                'green': {
                    'scalp': '#136B09',
                    'scalp-light': '#1da40e'
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
