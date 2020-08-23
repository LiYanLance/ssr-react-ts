webpack 配置

build 脚本

```cmd
"build": "webpack --config=./config/webpack.server.config.js",
"clean:dist": "rm -rf dist",
"start": "node ./dist/server/serverApp.js",
"start:dev": "yarn run clean:dist && yarn run build && yarn run start"
```

在 server 端打的包里去掉 node modules 中的内容.

```js
externals: [nodeExternals()]
```
