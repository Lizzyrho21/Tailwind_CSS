
// Tailwind CSS requires a build process which is processing CSS files and making sure that the Tailwind CSS code is inserted according to the directives used and the Tailwind configuration in place.

// To setup a build process one option is to use PostCSS. PostCSS is a tool for transforming CSS with JavaScript. It works with plugins, so it’s easy to perform the TailwindCSS processing steps by using the TailwindCSS PostCSS plugin. 





module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}