const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
            // use ts-loader on any file that ends with .ts inside the src folder
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}
