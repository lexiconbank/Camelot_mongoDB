module.exports =
[
    {
        key: 'documentation_landing',
        label: 'Introduction',
        icon: 'fa fa-question',
        route: 'documentation_landing',
    },
    {
        key: 'landing',
        label: 'Landing Page',
        icon: 'fa fa-home',
        sub:
        [
            { label: 'Login', route: 'documentation_login' },
            { label: 'Registration', route: 'documentation_registration' },
            { label: 'Web3', route: 'documentation_web3' },
        ]
    },
    // {
    //     key: 'user',
    //     label: 'User',
    //     icon: 'fa fa-user',
    //     sub:
    //     [
    //         { label: 'Wallet', route: 'documentation_login' },
    //     ]
    // },
]