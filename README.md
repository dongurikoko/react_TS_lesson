# react_lesson
### reactの開発環境準備
create-react-appをダウンロードする  
`npx create-react-app 作成するフォルダ名 --template typescript`  
このフォルダをvscodeでひらけばいい

`npm start`でreactの開発環境起動

src : 開発を行っていくソースコード  
node_modules : npmからダウンロードされたパッケージ  
public : 開発完了後、オンライン上に公開する準備ができたファイルやデータ(ブラウザのタブ名など)  
.gitignore : コードを管理するgitで使われるファイル  
package.json : アプリのテクニカルな情報やインストールされているパッケージの情報  
packagelock.json : インストールされたパッケージ情報  
tsconfig.json : TypeScriptで開発を行う時の必須ファイルで、型のチェックをどれだけ厳しくするかなどを設定  

参考図書：初めて作るreactアプリwith typescript
