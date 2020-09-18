module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': [
        'plugin:react/recommended',
        'google',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 11,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
    ],
    'rules': {
        'indent': ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['error', { 'ignoreComments': true }, { 'code': 120 }],
        'require-jsdoc': 0,
        'valid-jsdoc': 0,
        'no-unused-vars': 0,
    },
};
