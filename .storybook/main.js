module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    // '@react-theming/storybook-addon',
  ],
  framework: '@storybook/react',

  /**
   * @info
   * refer to this page for more documentation on typescript configuration:
   * https://storybook.js.org/docs/ember/configure/typescript#mainjs-configuration
   */
  // * Hides all extended props *
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      // propFilter: prop => {
      //   console.log('prop', prop.parent);
      //   return prop && prop.parent
      //     ? /@fluentui/.test(prop.parent.fileName) ||
      //         (!/node_modules/.test(prop.parent.fileName) &&
      //           (prop.parent.name !== 'DOMAttributes' ||
      //             prop.parent.name !== 'HTMLAttributes' ||
      //             prop.parent.name !== 'AriaAttributes'))
      //     : true;
      // },
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      }
    }
  } // * Enables you to see all extended props *
  // typescript: {
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //       esModuleInterop: false,
  //     },
  //   }
  // }
  ,
  core: {
    builder: "webpack5"
  }
};
