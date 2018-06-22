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

最後のグローバルインストールは不要。package.jsonの`scripts`に記載することで、ローカルなmochaを利用できる。

```json
{
  .
  .
  .
  "scripts": {
    "mocha": "mocha --require intelli-espower-loader"
  },
  .
  .
  .
}
```

## 実行

プロジェクト全体をテスト

```sh
# グローバルインストールしたものを利用
mocha --require intelli-espower-loader
# ローカルのものを利用（package.json設定後）
npm run mocha
```

特定のファイルをテスト。変更検知モード。

```sh
# グローバルインストールしたものを利用
mocha --require intelli-espower-loader -w ./test/PrimeFactorsTest.js
# ローカルのものを利用（package.json設定後）
npm run mocha -w ./test/PrimeFactorsTest.js
```

## 参考

- [mocha + power-assert環境の構築](https://qiita.com/gitseitanaka/items/ea47d261284879a1d774)
- [僕がnpm installに-gをつけないわけ](https://qiita.com/Mic-U/items/cd456d6bea72937464f8)
- [node.jsのいろいろなモジュール22 – mochaでテストを書こう](https://dev.classmethod.jp/server-side/node-mocha/)