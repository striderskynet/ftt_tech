import './cookieconsent.umd.js';

CookieConsent.run({

    // root: 'body',
    // autoShow: true,
    // disablePageInteraction: true,
    // hideFromBots: true,
    // mode: 'opt-in',
    // revision: 0,

    cookie: {
        name: 'ftt_cookie',
        domain: location.hostname,
        path: '/',
        // sameSite: "Lax",
        expiresAfterDays: 182,
    },

    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    guiOptions: {
        consentModal: {
            layout: 'cloud inline',
            position: 'bottom center',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false
        }
    },

    onFirstConsent: ({ cookie }) => {
        // console.log('onFirstConsent fired', cookie);
    },

    onConsent: ({ cookie }) => {
        // console.log('onConsent fired!', cookie)
    },

    onChange: ({ changedCategories, changedServices }) => {
        // console.log('onChange fired!', changedCategories, changedServices);
    },

    onModalReady: ({ modalName }) => {
        // console.log('ready:', modalName);
    },

    onModalShow: ({ modalName }) => {
        // console.log('visible:', modalName);
    },

    onModalHide: ({ modalName }) => {
        // console.log('hidden:', modalName);
    },

    categories: {
        // necessary: {
        //     enabled: true,  // this category is enabled by default
        //     readOnly: true  // this category cannot be disabled
        // },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/,   // regex: match all cookies starting with '_ga'
                    },
                    // {
                    //     name: '_gid',   // string: exact cookie name
                    // }
                ]
            },

            // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
            services: {
                ga: {
                    label: 'Google Analytics',
                    onAccept: () => { },
                    onReject: () => { }
                },
                // youtube: {
                //     label: 'Youtube Embed',
                //     onAccept: () => { },
                //     onReject: () => { }
                // },
            }
        },
        // ads: {}
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'We use Google Analytics to collect basic, anonymous data about how visitors use our site',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences',
                    // closeIconLabel: 'Reject all and close modal',
                    footer: `
                      
                        <a href="/privacy" target="_blank">Privacy Policy</a>
                        <a href="/disclaimer" target="_blank">Disclaimer</a>
                    `,
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    serviceCounterLabel: 'Service|Services',
                    sections: [
                        {
                            title: 'Your Privacy Choices',
                            description: `We use cookies only to power Google Analytics, which helps us analyze anonymous traffic and improve your experience on our website. No personal data is stored or shared for other purposes`,
                        },
                        // {
                        //     title: 'Strictly Necessary',
                        //     description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                        //     //this field will generate a toggle linked to the 'necessary' category
                        //     linkedCategory: 'necessary'
                        // },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Description'
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: location.hostname,
                                        desc: 'Google Analytics cookie used to distinguish users.',
                                    },
                                    // {
                                    //     name: '_gid',
                                    //     domain: location.hostname,
                                    //     desc: 'Description 2',
                                    // }
                                ]
                            }
                        },
                        // {
                        //     title: 'Targeting and Advertising',
                        //     description: 'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                        //     linkedCategory: 'ads',
                        // },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                        }
                    ]
                }
            }
        }
    }
});