/* config-overrides.js */
const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require('./theme.config.js');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const pages = require('./src/Page/Pages.json');
const fs = require("fs");
const path = require("path");

const vdir = 'HaoQiLab/';
//获取后缀名
function getFileExt(url) {
    var arr = url.split('.');
    var len = arr.length;
    return arr[len - 1];
}
//读取文件目录
function readDir(filePath, fileExt, fn) {
    var files = fs.readdirSync(filePath);

    var count = files.length;
    var results = {};
    files.forEach(function (filename) {
        //filePath+"/"+filename不能用/直接连接，Unix系统是”/“，Windows系统是”\“
        var stats = fs.statSync(path.join(filePath, filename));

        if (fileExt === "**") {
            if (!stats.isFile()) {
                fn(filename, filePath);
            }
        } else {
            if (stats.isFile()) {
                var ext = getFileExt(filename);
                if (fileExt === '*' || ext === fileExt) {
                    fn(filename, filePath, ext);
                }
            }
        }

    });
}
function makeNewEntry(config, env) {

    const entry = config.entry = {};
    const helper = {
        addEntry(keyAndPath, min, ext) {

            if (min) {
                entry[keyAndPath] = [
                    require.resolve("./src/" + keyAndPath + ext),
                ]
            } else {

                if (env === 'production') {
                    entry[keyAndPath] = [
                        require.resolve('react-scripts-ts/config/polyfills'),
                        require.resolve("./src/" + keyAndPath + ext),
                    ]
                } else {
                    entry[keyAndPath] = [
                        require.resolve('react-scripts-ts/config/polyfills'),
                        require.resolve('react-dev-utils/webpackHotDevClient'),
                        require.resolve("./src/" + keyAndPath + ext),
                    ]
                }
            }

        },
        addEntrys(keyAndPath) {
            readDir('src/' + keyAndPath, 'tsx', function (name, basepath, ext) {
                helper.addEntry(keyAndPath + '/' + name.replace('.' + ext, ''), true, '.tsx');
            });
        }
    }
    return helper;

}
const reset = {
    tsloader(config, env) {
        const tsLoader = getLoader(
            config.module.rules,
            rule =>
                rule.loader &&
                typeof rule.loader === 'string' &&
                rule.loader.includes('ts-loader')
        );

        tsLoader.options = {
            getCustomTransformers: () => ({
                before: [tsImportPluginFactory({
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: false,
                })]
            })
        };
        config = rewireLess.withLoaderOptions({
            modifyVars: {/*  "@primary-color":"#1DA57A" */ },
        })(config, env);
        return config;
    },
    output(config) {

        config.output.libraryTarget = 'umd';
        config.output.filename = vdir + 'static/js/[name].js';
        config.output.chunkFilename = vdir + 'static/js/[name].js';
        return config;
    },
    entrys(config, env) {

        // region 二次修改webpack.config.js的结果

        let prod = '';
        if (env === 'production') {
            prod = '.prod';
        }
        const helper = makeNewEntry(config, env);
        helper.addEntry("Lib/Antd.Base", false, '.ts');
        helper.addEntry("Lib/Antd.Ex", true, '.ts');
        helper.addEntry("Lib/Mobx", true, '.ts');
        helper.addEntry("Template/Default/App", true, '.tsx');

        //根据json注册入口
        for (var i = 0; i < pages.length; i++) {
            helper.addEntry("Page/" + pages[i][1] + '/Index' + prod, true, '.ts');
        }

        helper.addEntrys("Page/Document/Content");
        helper.addEntrys("Page/ReactEx/Content");
        helper.addEntrys("Page/CPN/Content");
        console.dir(config.entry);
        return config;
    },
    externals(config) {
        config.externals = {
            "antd": "Antd",
            'Mobx': "Mobx",
            react: {
                amd: 'react',
                root: 'React',
                commonjs: 'react',
                commonjs2: 'react'
            },
            'react-dom': {
                amd: 'react-dom',
                root: 'ReactDOM',
                commonjs: 'react-dom',
                commonjs2: 'react-dom'
            }
        }
        return config;
    },
    module(config) {
        const rules = config.module.rules;


        for (var j = 0; j < rules.length; j++) {
            const rule = rules[j];
            const oneOf = rule.oneOf;
            if (oneOf) {
                for (var k = 0; k < oneOf.length; k++) {
                    const oneOfRule = oneOf[k];
                    if (oneOfRule.test) {
                        if (oneOfRule.test.source === '\\.(ts|tsx)$') {
                            oneOfRule.loader = require.resolve('awesome-typescript-loader');
                            // } else if (oneOfRule.test.source === '\\.css$') {

                        }
                    }
                    if (oneOfRule.options && oneOfRule.options.name !== undefined) {
                        oneOfRule.options.name = vdir + oneOfRule.options.name;
                    }

                }
                break;
            }
        }
        return config;
    },
    resolve(config) {
        config.resolve.plugins.push(new TsConfigPathsPlugin());
        return config;
    },
    plugins(config, env) {
        const plugins = config.plugins;
        let plugin;
        var index = 0;
        for (; index < plugins.length; index++) {
            plugin = plugins[index];
            if (plugin instanceof HtmlWebpackPlugin) {

                if (env === 'production') {
                    plugin.options.filename = 'allEntry.html';
                    plugin.options.hash = true;
                    plugin.options.theme = theme;
                    break;
                }
                plugins.splice(index);
                break;
                // index--;
            }
            plugin = null;
        }
        for (var ii = 0; ii < plugins.length; ii++) {
            const plugin2 = plugins[ii];
            if (plugin2.constructor.name === 'ExtractTextPlugin') {
                plugin2.filename = vdir + plugin2.filename;
            }
        }

        // throw new Error('\n\n\n\n\nxxxxxxxxxxxxxxxxxxxxxx')
        function addHtmlWebpackPlugin(chunk, filename) {
            const prop = {
                inject: true,
                chunks: chunk,
                template: 'public/index.html',
                hash: true,
                chunksSortMode: function (chunk1, chunk2) {
                    var order1 = chunk.indexOf(chunk1.names[0]);
                    var order2 = chunk.indexOf(chunk2.names[0]);
                    return order1 - order2;  
                }
            }
            if (filename !== undefined) {
                prop.filename = filename
            }
            if (env === 'production') {
                prop.minify = {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                };
            }
            const newPlugin = new HtmlWebpackPlugin(prop);
            newPlugin.options.theme = theme;
            plugins.splice(index, 0, newPlugin);
        }


        let prod = '';
        if (env === 'production') {
            prod = '.prod';
        }
        for (i = 0; i < pages.length; i++) {
            if (pages[i][3]) {
                addHtmlWebpackPlugin(['Lib/Antd.Base', 'Lib/Antd.Ex', 'Lib/Mobx', "Page/" + pages[i][1] + '/Index' + prod], pages[i][2])
            } else {
                addHtmlWebpackPlugin(['Lib/Antd.Base', 'Lib/Mobx', "Page/" + pages[i][1] + '/Index' + prod], pages[i][2])
            }
        }
        return config;
    }
}
module.exports = {
    webpack: function override(config, env) {

        config = reset.tsloader(config, env);

        config = reset.entrys(config, env);

        config = reset.output(config);

        config = reset.externals(config);

        config = reset.module(config);

        config = reset.resolve(config);

        config = reset.plugins(config, env);


        return config;
    },
    devserver: function (config, env) {
        return function () {
            var result = config.apply(this, arguments);
            var rewrites = [{ from: /^\/(default\.html)?/, to: '/default.html' }];

            for (var i = 0; i < pages.length; i++) {
                rewrites.push({ from: new RegExp(`^\/` + pages[i][2].replace('.', '\\.')), to: '/' + pages[i][2] })
            }
            console.dir(rewrites);
            result.historyApiFallback.rewrites = rewrites;

            return result
        }
    }

}