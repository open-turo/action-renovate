/**
 * Return the NPM configuration if the NPM environment variables for NPM are set
 * Configure renovate to authenticate against the specified NPM registry and create a .npmrc file
 * that authenticates against the same registry for the specified scope.
 */
function configureNpm() {
  if (
    process.env.RENOVATE_NPM_USERNAME &&
    process.env.RENOVATE_NPM_PASSWORD &&
    process.env.RENOVATE_NPM_AUTH_TOKEN &&
    process.env.RENOVATE_NPM_REGISTRY &&
    process.env.RENOVATE_NPM_SCOPE
  ) {
    return {
      hostRules: [
        {
          hostType: "npm",
          matchHost: process.env.RENOVATE_NPM_HOST,
          username: process.env.RENOVATE_NPM_USERNAME,
          password: process.env.RENOVATE_NPM_PASSWORD,
        },
      ],
      name: "npm",
      config: {
        npmrc: [
          `${process.env.RENOVATE_NPM_SCOPE}:registry=${process.env.RENOVATE_NPM_REGISTRY}`,
          `${process.env.RENOVATE_NPM_REGISTRY}:_auth=${process.env.RENOVATE_NPM_AUTH_TOKEN}`,
          `${process.env.RENOVATE_NPM_REGISTRY}:always-auth=true`,
        ].join("\n"),
      },
    };
  }
}

/**
 * Configure renovate to authenticate against the specified Artifactory registry
 * if the environment variables are set
 */
function configureArtifactory() {
  if (
    process.env.RENOVATE_ARTIFACTORY_USERNAME &&
    process.env.RENOVATE_ARTIFACTORY_PASSWORD &&
    process.env.RENOVATE_ARTIFACTORY_MATCH_HOST &&
    process.env.RENOVATE_ARTIFACTORY_REGISTRY_URLS &&
    process.env.RENOVATE_ARTIFACTORY_PACKAGE_PREFIXES
  ) {
    return {
      hostRules: [
        {
          hostType: "maven",
          matchHost: process.env.RENOVATE_ARTIFACTORY_MATCH_HOST,
          username: process.env.RENOVATE_ARTIFACTORY_USERNAME,
          password: process.env.RENOVATE_ARTIFACTORY_PASSWORD,
        },
      ],
      name: "artifactory",
      config: {
        packageRules: [
          {
            matchDatasources: ["maven"],
            matchPackagePrefixes:
              process.env.RENOVATE_ARTIFACTORY_PACKAGE_PREFIXES.split(","),
            registryUrls:
              process.env.RENOVATE_ARTIFACTORY_REGISTRY_URLS.split(","),
          },
        ],
      },
    };
  }
}

/**
 * Configure renovate to authenticate against the default terraform registry
 * if the environment variables are set
 */
function configureTerraform() {
  if (process.env.RENOVATE_TERRAFORM_TOKEN) {
    return {
      hostRules: [
        {
          hostType: "terraform-module",
          token: process.env.RENOVATE_TERRAFORM_TOKEN,
        },
      ],
      name: "terraform",
      config: {},
    };
  }
}

/**
 * Configure renovate to authenticate against docker hub if the environment variables are set
 */
function configureDocker() {
  if (
    process.env.RENOVATE_DOCKERHUB_USERNAME &&
    process.env.RENOVATE_DOCKERHUB_PASSWORD
  ) {
    return {
      hostRules: [
        {
          hostType: "docker",
          username: process.env.RENOVATE_DOCKERHUB_USERNAME,
          password: process.env.RENOVATE_DOCKERHUB_PASSWORD,
        },
      ],
      name: "docker",
      config: {},
    };
  }
}

// Only keep provider configuration that is set
const providers = [
  configureArtifactory(),
  configureNpm(),
  configureDocker(),
  configureTerraform(),
].filter((provider) => provider !== undefined);

console.log(
  `Enabled providers: [${providers.map(({ name }) => name).join(", ")}]`,
);

module.exports = {
  branchPrefix: "c/renovate_",
  // Merge host rule for all the providers
  hostRules: providers.flatMap((provider) => provider.hostRules),
  logLevel: "info",
  onboarding: false,
  // Only run renovate against the repository the action is running on
  repositories: [`${process.env.RENOVATE_REPOSITORY_NAME}`],
  // Add any extra configuration a provider may need
  ...providers.reduce(
    (rules, provider) => ({
      ...rules,
      ...provider.config,
      packageRules: (rules.packageRules || []).concat(
        ...(provider.config.packageRules || []),
      ),
    }),
    {},
  ),
};
