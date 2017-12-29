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
module.exports = {
    webpack: function override(config, env) {


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


        // region 二次修改webpack.config.js的结果
        const entry = {};

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
        function addEntry(keyAndPath, min, ext) {

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

        }
        function addEntrys(keyAndPath) {
            readDir('src/' + keyAndPath, 'tsx', function (name, basepath, ext) {
                addEntry(keyAndPath + '/' + name.replace('.' + ext, ''), true, '.tsx');
            });
        }

        let prod = '';
        if (env === 'production') {
            prod = '.prod';
        }

        addEntry("Lib/Antd.Base", false, '.ts')
        addEntry("Lib/Antd.Ex", true, '.ts')
        addEntry("Template/Default/App", true, '.tsx')

        //根据json注册入口
        for (var i = 0; i < pages.length; i++) {
            addEntry("Page/" + pages[i][1] + '/Index' + prod, true, '.ts')
        }


        addEntrys("Page/Document/Content");
        addEntrys("Page/ReactEx/Content");

        const vdir = 'HaoQiLab/';

        config.entry = entry;
        config.output.libraryTarget = 'umd';
        config.output.filename = vdir + 'static/js/[name].js';
        config.output.chunkFilename = vdir + 'static/js/[name].js';


        config.externals = {
            "antd": "Antd",
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
                        } else if (oneOfRule.test.options) {
                            oneOfRule.test.options.name = vdir + oneOfRule.test.options.name;
                        // }else if (oneOfRule.test.source === '\\.css$') {
                        //     console.log(oneOfRule);
                        //     throw new Error('xxxxxxxxxxxxxxxxxxxxxx')
                        }
                    }

                }
                break;
            }
        }
        config.resolve.plugins.push(new TsConfigPathsPlugin());
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
        for (var ii=0; ii < plugins.length; ii++) {
            const plugin2 = plugins[index];
            if (plugin2 instanceof ExtractTextPlugin) {
                plugin.options.filename = vdir + plugin.options.filename;
                
            }
        }
        
        function addHtmlWebpackPlugin(chunk, filename) {
            const prop = {
                inject: true,
                chunks: chunk,
                template: 'public/index.html',
                hash: true
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


        for (i = 0; i < pages.length; i++) {
            if (pages[i][3]) {
                addHtmlWebpackPlugin(['Lib/Antd.Base', 'Lib/Antd.Ex', "Page/" + pages[i][1] + '/Index' + prod], pages[i][2])
            } else {
                addHtmlWebpackPlugin(['Lib/Antd.Base', "Page/" + pages[i][1] + '/Index' + prod], pages[i][2])
            }
        }
        // endregion
        console.dir(entry);

        return config;
    },
    devserver: function (config, env) {
        return function () {
            var result = config.apply(this, arguments);
            var rewrites = [{ from: /^\/(index\.html)?/, to: '/index.html' }, { from: /^\//, to: '/default.html' }];

            for (var i = 0; i < pages.length; i++) {
                rewrites.push({ from: new RegExp(`^\/` + pages[i][2].replace('.', '\\.')), to: '/' + pages[i][2] })
            }
            console.dir(rewrites);
            result.historyApiFallback.rewrites = rewrites;

            return result
        }
    }

}