# action-renovate

GitHub Action: run [renovate bot](https://renovatebot.com) with an opinionated runner configuration. It supports
configuring it to talk to private registries for:

- Artifactory
- Docker
- NPM
- Terraform

## Usage

```yaml
jobs:
  build:
    steps:
      - name: Update dependencies
        uses: open-turo/action-renovate@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

| parameter              | description                                                                                                                                        | required | default             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------- |
| dry-run                | Whether to run the action in dry-run mode                                                                                                          | `false`  | false               |
| artifactory-username   | Username to authenticate against a maven artifactory                                                                                               | `false`  |                     |
| artifactory-password   | Password to authenticate against a maven artifactory                                                                                               | `false`  |                     |
| artifactory-match-host | A domain name, host name or base URL to match maven artifactory libraries with (see https://docs.renovatebot.com/configuration-options/#matchhost) | `false`  |                     |
| docker-username        | Username to authenticate against docker hub                                                                                                        | `false`  |                     |
| docker-password        | Password to authenticate against docker hub                                                                                                        | `false`  |                     |
| github-token           | GitHub token that can checkout the repository as well as create tags/releases against it. e.g. 'secrets.GITHUB_TOKEN'                              | `false`  | ${{ github.token }} |
| log-level              | Log level to use for renovate                                                                                                                      | `false`  | info                |
| npm-token              | NPM token to use for authentication                                                                                                                | `false`  |                     |
| npm-username           | Username to authenticate against the NPM registry                                                                                                  | `false`  |                     |
| npm-password           | Password to authenticate against the NPM registry                                                                                                  | `false`  |                     |
| npm-scope              | Scope of the packages to use the custom NPM authentication (e.g @open-turo)                                                                        | `false`  |                     |
| npm-registry           | URL of the NPM registry to use the custom authentication for                                                                                       | `false`  |                     |
| terraform-token        | Token to authenticate against terraform registry                                                                                                   | `false`  |                     |

## Runs

This action is an `composite` action.

## Development

Install [pre-commit](https://pre-commit.com/) and the commit hooks:

```shell
pre-commit install
pre-commit install --hook-type commit-msg
```

## Get Help

Please review Issues, post new Issues against this repository as needed.

## Contributions

Please see [here](https://github.com/open-turo/contributions) for guidelines on how to contribute to this project.
