const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => { // 由于我们修改了渲染进程目录，修改'@'的alias
        config.resolve.alias.set('@', resolve('src/renderer'))
    },
    pages: {
        index: {
            entry: 'src/renderer/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'vue-cli-electron',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            mainProcessFile: 'src/main/index.ts',
            mainProcessWatch: ['src/main'],
            builderOptions: {
                appId: process.env.VUE_APP_APPID,
                productName: process.env.VUE_APP_PRODUCTNAME,
                extraMetadata: {
                    name: process.env.VUE_APP_APPID.split('.').pop(),
                    version: process.env.VUE_APP_VERSION
                },

                asar: true,
                directories: {
                    output: "dist_electron",
                    buildResources: "build",
                    app: "dist_electron/bundled"
                },
                files: [
                    {
                        filter: [
                            "**"
                        ]
                    }
                ],
                extends: null,
                extraResources: [],
                electronDownload: {
                    mirror: "https://npm.taobao.org/mirrors/electron/"
                },
                dmg: {
                    contents: [
                        {
                            type: "link",
                            path: "/Applications",
                            x: 410,
                            y: 150
                        },
                        {
                            type: "file",
                            x: 130,
                            y: 150
                        }
                    ]
                },
                mac: {
                    icon: "public/icons/icon.icns"
                },
                nsis: {
                    oneClick: false,
                    perMachine: true,
                    allowToChangeInstallationDirectory: true,
                    warningsAsErrors: false,
                    allowElevation: false,
                    createDesktopShortcut: true,
                    createStartMenuShortcut: true
                },
                win: {
                    target: "nsis",
                    icon: "public/icons/icon.ico",
                    requestedExecutionLevel: "highestAvailable"
                },
                linux: {
                    "icon": "public/icons"
                },
                publish: {
                    provider: "generic",
                    url: "http://127.0.0.1"
                }
            }
        }
    },
    configureWebpack: config => {
        return {
            plugins: [
                AutoImport({
                    resolvers: [ElementPlusResolver()],
                }),
                Components({
                    resolvers: [ElementPlusResolver()],
                }),
            ]
        }
    }
};
