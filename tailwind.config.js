/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

module.exports = {
    content: [
        './src/App.js',
        './src/components/*.js',
        './src/components/**/*.js',
        './src/components/**/**/*.js',
        './src/components/**/**/**/*.js',
    ],
    options: {
        whitelist: ['.grid', '.grid-cols-3', '.gap-x-5']
    },
    theme: {
        screens: {
            // adding xs to the rest
            xs: "400px",
            // if you did not add this, you would have only "xs"
            ...defaultTheme.screens,
        },
        listStyleType: {
            none: 'none',
            square: 'square',
            roman: 'upper-roman'
        },
        colors: {
            ...colors,

            main: {
                0: '#541DB9',
                20: '#E2D5FA',
                40: '#C6ACF6',
                60: '#A982F1',
                80: '#8C58EC',
                100: '#6F2EE8',
            },

            Basic: {
                0: '#FFFFFF',
                50: '#495057',
                100: '#0C0C1E',
                300: '#373751',
            },
            Moodsand: {
                0: '#FFFFFF',
                300: '#969696',
                400: '#727272'

            },
            Gray: {
                40: '#FCFCFC',
                50: '#F9F9FB',
                60: '#EFF2F7',
                90: '#F8F8FB',
                100: '#F5F4F4',
                101: '#F3F3F9',
                150: '#F5F5F5',
                180: '#FCFCFC',
                200: '#EEECEC',
                201: '#DFE0EB',
                250: '#CED4DA',
                300: '#DFDEDE',
                301: '#A6B0CF',
                302: '#D0D5DD',
                400: '#BCBBBB',
                401: '#8894B7',
                500: '#9D9C9C',
                501: '#676D8D',
                550: '#979797',
                600: '#747373',
                601: '#4B4B63',
                650: '#ABABAB',
                700: '#605F5F',
                701: '#344054',
                702: '#373751',
                750: '#A6B0CF',
                800: '#414040',
                900: '#201F1F',
                901: '#14142B',
                1000: '#14142B'

            },

            primary: {
                50: '#FEF8E2',
                100: '#FDEDB5',
                200: '#FCE185',
                300: '#FCD755',
                400: '#FBCC32',
                500: '#FBC31D',
                501: '#F5B91A',
                600: '#FBB616',
                800: '#FA930F',
                900: '#FA740A'

            },

            secondary: {
                50: '#E7F3FF',
                100: '#C5E0FF',
                200: '#A2CDFF',
                300: '#83B9FF',
                400: '#70A9FF',
                500: '#679AFF',
                600: '#638BEF',
                700: '#5D78DB',
                800: '#5867C8',
                900: '#4E47A7'
            },

            green: {
                50: '#',
                100: '#DEFEF2',
                101: '#34C38F',
                200: '#D6F3E9',
                300: '#',
                400: '#',
                500: '#1F7556',
                600: '#0DA76F',
                700: '#',
                800: '#00CF8D',
                900: '#'
            },

            red: {
                50: '#',
                100: '#',
                200: '#FDE1E1',
                300: '#',
                400: '#',
                500: '#924040',
                600: '#',
                700: '#',
                800: '#F46A6A',
                900: '#'
            },
            yellow: {
                200: '#FCF0DB',
                500: '#916C2E'
            },
            orange: {
                100: '#FCF0E4',
                500: '#F67905'
            },

            error: {
                100: '#A20B00',
                200: '#F46A6A'
            },

            surface: {
                'overlay-60': '#00000099',
                'overlay-40': '#00000066',
                'overlay-20': '#00000033',
                background: '#DEDEDE'
            }

        },
        maxHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            '90': '90vh'
        },
        extend: {

            backgroundImage: {
                CustomerquotationcardBg: 'url(\'/images/Bg.jpg\')'
            },
            padding: {
                3.5: '0.875rem',
            },
            height: {
                5.5: '1.375rem',
                15: '3.75rem',
                35.75: '8.9375rem',
                208.75: '52.1875rem',
                29.75: '7.4375rem'

            },
            width: {
                10.5: '2.625rem',
                51.75: '12.9375rem',
                99: '24.75rem',
                107: '26.75rem'

            },
            inset: (theme) => ({
                128: '32rem'
            }),
            fontWeight: (theme) => ({
                normal: '400'
            }),

            fontSize: (theme) => ({
                '2.5xl': '1.75rem',
                'xs-625': '0.625rem',
                1.5: '0.375rem'
            })
        },
        variants: {
            extend: {
                backgroundColor: ['checked'],
                borderColor: ['checked'],
                translate: ['group-hover'],
                pointerEvents: ['group-hover'],
                display: ['group-hover']
            }
        },
        plugins: []
    }
};
