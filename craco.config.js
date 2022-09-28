// craco.config.js
module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
};

// export default {
//     style: {
//                 postcss: {
//                     plugins: [require('tailwindcss'), require('autoprefixer')],
//                 },
//             },
// };