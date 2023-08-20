const path = require('path');

module.exports = {
    mode: 'development',

    entry: './index.js',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    module: { 
        "rules": [
            { 
                "test": /\.css$/, 
                "use": [ "style-loader", 
                        "css-loader" 
                ]
            },
            { 
                "test": /\.js$/, 
                "exclude": /node_modules/, 
                "use": { 
                    "loader": "babel-loader", 
                    "options": { 
                    "presets": [ "@babel/preset-env", ] 
                    } 
                } 
            }
        ] 
    },
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: '$',
        libraryTarget: 'umd',
    }
}