# practice-jest-docker-compose-ci

## 概要

コンテナ内テスト結果をワークフローに連携するGitHub Actions実装例

## 構成

| ファイル/ディレクトリ | 説明 |
|-------------------|------|
| [Dockerfile](Dockerfile) | テスト環境構築 |
| [jest.config.cjs](jest.config.cjs) | Jestの設定ファイル<br>- HTML形式のテスト結果出力を行うように設定<br>- テスト結果の出力先を設定 |
| [compose.test.success.yaml](compose.test.success.yaml) | テスト実行用compose.yaml【成功】 |
| [compose.test.failure.yaml](compose.test.failure.yaml) | テスト実行用compose.yaml【失敗】 |
| [test/success.test.js](test/success.test.js) | テストコード【成功】 |
| [test/failure.test.js](test/failure.test.js) | テストコード【失敗】 |
| [.github/workflows/test-with-docker-success.yml](.github/workflows/test-with-docker-success.yml) | テスト実行用ワークフロー【成功】 |
| [.github/workflows/test-with-docker-failure.yml](.github/workflows/test-with-docker-failure.yml) | テスト実行用ワークフロー【失敗】 |

## テスト実行方法

**成功**
```shell
docker compose -f compose.test.success.yaml up --build
```

**失敗**
```shell
docker compose -f compose.test.failure.yaml up --build
```

## ワークフローの流れ

1. コードのチェックアウト
2. イメージのビルド
3. Docker Composeでテストの実行
4. テスト結果のファイルをArtifactにアップロード
5. テスト結果の判定をWorkflowに反映

## テスト結果の出力

テスト結果は`test-result/`ディレクトリに生成され、GitHub Actionsのアーティファクトとしてアップロード

- HTMLレポート: `test-result/result.html`

## 学んだこと

- `Jest`, `jest-html-reporters`
  - 実行方法
  - 設定ファイル(jest.config.cjs)
  - テスト結果の出力方法
- `Docker Compose`
  - コマンドオプション(`docker compose up --exit-code-from`)
- `Github Actions`
  - Workflowの**成功**/**失敗**判定の条件