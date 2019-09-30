#!/bin/sh

# シンボリックリンク
# root に configがある方が 自動で読み込みしてくれて設定が楽

ln -s configs/jest.config.js .
ln -s configs/.huskyrc.js .
ln -s configs/.eslintrc.js .
ln -s configs/.eslintignore .
ln -s configs/babel.config.js
ln -s configs/tsconfig/tsconfig.json .
ln -s configs/.jscpd.json .
ln -s configs/webpack/webpack.config.ts .
ln -s configs/wallaby.js .
ln -s configs/commitlint.config.js .
ln -s configs/lintush-config.js .
