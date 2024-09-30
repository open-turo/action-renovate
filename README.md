# GitHub Action Renovatebot

<!-- prettier-ignore-start -->
<!-- action-docs-description source="action.yaml" -->
## Description

GitHub Action that runs renovatebot with a very opinionated runner configuration.  It supports configuring it to talk to private registries for Artifactory, Docker, NPM and Terraform.
<!-- action-docs-description source="action.yaml" -->
## Description

GitHub Action that lints a Terraform based repository via [action-pre-commit](https://github.com/open-turo/action-pre-commit)
<!-- action-docs-description -->
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<!-- action-docs-inputs source="action.yaml" -->
## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `dry-run` | <p>Whether to run the action in dry-run mode</p> | `false` | `""` |
| `checkout-repo` | <p>Perform checkout as first step of action</p> | `false` | `true` |
| `artifactory-username` | <p>Username to authenticate against a maven artifactory</p> | `false` | `""` |
| `artifactory-password` | <p>Password to authenticate against a maven artifactory</p> | `false` | `""` |
| `artifactory-username-property-name` | <p>Name of the gradle property to use for the artifactory username</p> | `false` | `artifactoryUsername` |
| `artifactory-password-property-name` | <p>Name of the gradle property to use for the artifactory password</p> | `false` | `artifactoryAuthToken` |
| `artifactory-match-host` | <p>A domain name, host name or base URL to match maven artifactory libraries with (see https://docs.renovatebot.com/configuration-options/#matchhost)</p> | `false` | `""` |
| `artifactory-registry-urls` | <p>A comma separate list of extra registry URLs to tell renovate to use to find new versions of packages (e.g a jfrog registry)</p> | `false` | `""` |
| `artifactory-package-prefixes` | <p>Package prefix to tell renovate to look for dependencies in the artifactory-registry-urls (e.g com.openTuro)</p> | `false` | `""` |
| `env-regex` | <p>Override the environment variables which will be passsed into the renovate container. Defaults to <code>^(?:RENOVATE_\\w+|LOG_LEVEL|GITHUB_COM_TOKEN|NODE_OPTIONS|(?:HTTPS?|NO)_PROXY|(?:https?|no)_proxy)$</code></p> | `false` | `""` |
| `extra-config` | <p>Extra configuration to pass to renovate. It has to be a valid JSON object. Use with caution as this could override the default configuration created by this action</p> | `false` | `{}` |
| `docker-username` | <p>Username to authenticate against docker hub</p> | `false` | `""` |
| `docker-password` | <p>Password to authenticate against docker hub</p> | `false` | `""` |
| `github-token` | <p>GitHub token that can checkout the repository as well as create tags/releases against it. e.g. 'secrets.GITHUB_TOKEN'</p> | `true` | `${{ github.token }}` |
| `git-ignored-authors` | <p>Additional Git authors which are ignored by Renovate. Must conform to RFC5322</p> | `false` | `[]` |
| `log-level` | <p>Log level to use for renovate</p> | `false` | `info` |
| `npm-token` | <p>NPM token to use for authentication</p> | `false` | `""` |
| `npm-username` | <p>Username to authenticate against the NPM registry</p> | `false` | `""` |
| `npm-password` | <p>Password to authenticate against the NPM registry</p> | `false` | `""` |
| `npm-scope` | <p>Scope of the packages to use the custom NPM authentication (e.g @open-turo)</p> | `false` | `""` |
| `npm-registry` | <p>URL of the NPM registry to use the custom authentication for</p> | `false` | `""` |
| `terraform-token` | <p>Token to authenticate against terraform registry</p> | `false` | `""` |
<!-- action-docs-inputs source="action.yaml" -->
## Inputs

| parameter | description | required | default |
| --- | --- | --- | --- |
| checkout-repo | Perform checkout as first step of action | `false` | true |
| github-token | GitHub token that can checkout the consumer repository. e.g. 'secrets.GITHUB_TOKEN' | `true` |  |
<!-- action-docs-inputs -->

<!-- action-docs-outputs source="action.yaml" -->

<!-- action-docs-outputs source="action.yaml" -->

<!-- action-docs-outputs -->

<!-- action-docs-runs source="action.yaml" -->
## Runs

This action is a `composite` action.
<!-- action-docs-runs source="action.yaml" -->
## Runs

This action is a `composite` action.
<!-- action-docs-runs -->

<!-- action-docs-usage source="action.yaml"  -->
<!-- action-docs-usage -->
<!-- prettier-ignore-end -->
