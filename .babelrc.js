module.exports = {
  "presets": [
    "@babel/react",
    [
      "@babel/env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ],
  
  "env": {
    "client": {
      "presets": [
        "@babel/react",
        ["@babel/env", {
          "targets": {
            "browsers": ["last 2 versions", "not ie <= 10"]
          },
          "modules": false
        }]
      ],
      "plugins": ["react-hot-loader/babel"]
    }
  }
}
