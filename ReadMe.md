# mocha & power-assertでCode Kata

## 環境整備

```sh
npm init
mkdir test
npm install --save-dev mocha
npm install intelli-espower-loader --save-dev
npm install --save-dev power-assert
npm install -g mocha # mochaコマンドが使えなかったので
```

## 実行

`mocha --require intelli-espower-loader`

## 参考

- https://qiita.com/gitseitanaka/items/ea47d261284879a1d774