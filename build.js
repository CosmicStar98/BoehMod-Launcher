const builder = require('electron-builder')
const Platform = builder.Platform

function getCurrentPlatform(){
    switch(process.platform){
        case 'win32':
            return Platform.WINDOWS
        case 'darwin':
            return Platform.MAC
        case 'linux':
            return Platform.linux
        default:
            console.error('Cannot resolve current platform!')
            return undefined
    }
}

builder.build({
    targets: (process.argv[2] != null && Platform[process.argv[2]] != null ? Platform[process.argv[2]] : getCurrentPlatform()).createTarget(),
    config: {
        appId: 'cclauncher',
        productName: 'CounterCraftLauncher',
        artifactName: '${productName}-${version}.${ext}',
        copyright: 'Copyright © 2019 BoehMod',
        directories: {
            buildResources: 'build',
            output: 'dist'
        },
        win: {
            target: [
                {
                    target: 'nsis',
                    arch: 'x64'
                }
            ],
            icon: 'build/icon.ico'
        },
        nsis: {
            oneClick: false,
            perMachine: true,
            allowElevation: true,
            installerIcon: 'build/icon.ico',
            uninstallerIcon: 'build/icon.ico',
            installerSidebar: 'build/installer-sidebar.png',
            uninstallerSidebar: 'build/installer-sidebar.png',
            allowToChangeInstallationDirectory: true
        },
        mac: {
            target: [
                'dmg'
            ],
            category: 'public.app-category.games',
            icon: 'build/icon.icns'
        },
        dmg: {
            icon: 'build/disk.icns',
            background: 'build/dmg-background.png',
            contents: [
                {
                    x: 151,
                    y: 179
                },
                {
                    x: 446,
                    y: 179,
                    type: 'link',
                    path: '/Applications'
                }
            ]
        },
        linux: {
            target: 'AppImage',
            maintainer: 'JacksonPlayz, Daniel Scalzi',
            vendor: 'BoehMod',
            synopsis: 'Official CounterCraft Launcher',
            description: 'Custom launcher which allows users to CounterCraft.',
            category: 'Game'
        },
        compression: 'maximum',
        files: [
            '!{dist,.gitignore,.vscode,docs,dev-app-update.yml,.travis.yml,.nvmrc,.eslintrc.json,build.js}'
        ],
        extraResources: [
            'libraries'
        ],
        asar: true
    }
}).then(() => {
    console.log('Build complete!')
}).catch(err => {
    console.error('Error during build!', err)
})