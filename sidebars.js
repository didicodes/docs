/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    {
      type: "category",
      label: "Overview",
      items: [
        "overview/index",
        "overview/what-is-zuplo",
        "overview/how-does-zuplo-work",
        "overview/should-you-use-zuplo",
        "overview/handlers",
        "overview/policies",
      ],
    },
    {
      type: "category",
      label: "Quick Starts",
      link: { type: "doc", id: "quickstarts/index" },
      items: [
        "quickstarts/setup-your-api-proxy",
        "quickstarts/use-api-key-authentication",
        "quickstarts/configure-rate-limiting",
        "quickstarts/publish-developer-portal",
      ],
    },
    {
      type: "category",
      label: "Policies",
      link: { type: "doc", id: "policies/index" },
      items: [
        {
          type: "category",
          label: "Authentication",
          items: [
            "policies/api-key-auth",
            "policies/auth0-jwt-auth",
            "policies/aws-cognito-auth",
            "policies/basic-auth",
            "policies/open-id-jwt",
          ],
        },
        "policies/rate-limit",
        {
          type: "category",
          label: "Request Filtering",
          items: [
            "policies/access-control-lists",
            "policies/geo-location",
            "policies/ip-restrictions",
          ],
        },
        {
          type: "category",
          label: "Validation",
          items: ["policies/json-schema-validation"],
        },
        {
          type: "category",
          label: "Request Modification",
          items: ["policies/request-body-rewrite"],
        },
        {
          type: "category",
          label: "Response Modification",
          items: ["policies/response-body-rewrite"],
        },
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/proxy-public-api",
        "examples/hello-world-api",
        "examples/proxy-aws-lambda",
        "examples/archiving-requests-to-storage",
        "examples/gateway-over-airtable",
        "examples/gateway-over-salesforce",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/proxy-a-request-with-body",
        "guides/proxy-a-simple-get-request",
        "guides/reusing-code",
        "guides/safely-clone-a-request-or-response",
        "guides/setup-jwt-auth-with-salesforce",
        "guides/testing-your-api",
      ],
    },
    {
      type: "category",
      label: "Runtime",
      items: [
        "runtime/request-handler",
        "runtime/zuplo-request",
        "runtime/zuplo-context",
        "runtime/node-modules",
      ],
    },
  ],
};

module.exports = sidebars;