# Github Action Renovatebot

<!-- prettier-ignore-start -->
<!-- action-docs-all source="action.yaml" project="open-turo/action-renovate" version="v1" -->
## Description

GitHub Action that runs renovatebot with a very opinionated runner configuration.  It supports configuring it to talk to private registries for Artifactory, Docker, NPM and Terraform.

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


## Runs

This action is a `composite` action.

## Usage

```yaml
- uses: open-turo/action-renovate@v1
  with:
    dry-run:
    # Whether to run the action in dry-run mode
    #
    # Required: false
    # Default: ""

    checkout-repo:
    # Perform checkout as first step of action
    #
    # Required: false
    # Default: true

    artifactory-username:
    # Username to authenticate against a maven artifactory
    #
    # Required: false
    # Default: ""

    artifactory-password:
    # Password to authenticate against a maven artifactory
    #
    # Required: false
    # Default: ""

    artifactory-username-property-name:
    # Name of the gradle property to use for the artifactory username
    #
    # Required: false
    # Default: artifactoryUsername

    artifactory-password-property-name:
    # Name of the gradle property to use for the artifactory password
    #
    # Required: false
    # Default: artifactoryAuthToken

    artifactory-match-host:
    # A domain name, host name or base URL to match maven artifactory libraries with (see https://docs.renovatebot.com/configuration-options/#matchhost)
    #
    # Required: false
    # Default: ""

    artifactory-registry-urls:
    # A comma separate list of extra registry URLs to tell renovate to use to find new versions of packages (e.g a jfrog registry)
    #
    # Required: false
    # Default: ""

    artifactory-package-prefixes:
    # Package prefix to tell renovate to look for dependencies in the artifactory-registry-urls (e.g com.openTuro)
    #
    # Required: false
    # Default: ""

    env-regex:
    # Override the environment variables which will be passsed into the renovate container. Defaults to `^(?:RENOVATE_\\w+|LOG_LEVEL|GITHUB_COM_TOKEN|NODE_OPTIONS|(?:HTTPS?|NO)_PROXY|(?:https?|no)_proxy)# Github Action Renovatebot

<!-- prettier-ignore-start -->

    #
    # Required: false
    # Default: ""

    extra-config:
    # Extra configuration to pass to renovate. It has to be a valid JSON object. Use with caution as this could override the default configuration created by this action
    #
    # Required: false
    # Default: {}

    docker-username:
    # Username to authenticate against docker hub
    #
    # Required: false
    # Default: ""

    docker-password:
    # Password to authenticate against docker hub
    #
    # Required: false
    # Default: ""

    github-token:
    # GitHub token that can checkout the repository as well as create tags/releases against it. e.g. 'secrets.GITHUB_TOKEN'
    #
    # Required: true
    # Default: ${{ github.token }}

    git-ignored-authors:
    # Additional Git authors which are ignored by Renovate. Must conform to RFC5322
    #
    # Required: false
    # Default: []

    log-level:
    # Log level to use for renovate
    #
    # Required: false
    # Default: info

    npm-token:
    # NPM token to use for authentication
    #
    # Required: false
    # Default: ""

    npm-username:
    # Username to authenticate against the NPM registry
    #
    # Required: false
    # Default: ""

    npm-password:
    # Password to authenticate against the NPM registry
    #
    # Required: false
    # Default: ""

    npm-scope:
    # Scope of the packages to use the custom NPM authentication (e.g @open-turo)
    #
    # Required: false
    # Default: ""

    npm-registry:
    # URL of the NPM registry to use the custom authentication for
    #
    # Required: false
    # Default: ""

    terraform-token:
    # Token to authenticate against terraform registry
    #
    # Required: false
    # Default: ""
```
<!-- action-docs-all source="action.yaml" project="open-turo/action-renovate" version="v1" -->
<!-- prettier-ignore-end -->
