const config = {
    "verbose": true,
    "roots": [
        "./../src"
    ],
    "testRegex": "\\.test\\.jsx?$",
    "transform": {
        "\\.jsx?$": "babel-jest"
    },
    "moduleDirectories": [
        "node_modules"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/../__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/../__mocks__/styleMock.js"
    },
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
        "<rootDir>/setupTests.js"
    ]
}

module.exports = config;