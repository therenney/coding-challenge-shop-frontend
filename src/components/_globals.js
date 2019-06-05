import Vue from 'vue';
import components from '@components/_components';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// Globally register all core components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.
// https://webpack.js.org/guides/dependency-management/#require-context

/* eslint-disable no-undef */
const requireComponent = require.context(
    // Look for files in the current directory
    '.',
    // Do not look in subdirectories
    false,
    // Only include "_core-" prefixed .vue files
    /_core-[\w-]+\.vue$/
);

// For each matching file name...
requireComponent.keys().forEach(fileName => {
    // Get the component config
    const componentConfig = requireComponent(fileName);
    // Get the PascalCase version of the component name
    const componentName = upperFirst(
        camelCase(
            fileName
                // Remove the "./_" from the beginning
                .replace(/^\.\/_/, '')
                // Remove the file extension from the end
                .replace(/\.\w+$/, '')
        )
    );
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig);
});

// TODO: Integrate with global registration
// Register Components - non Global-Core Components
(function registerComponents(Vue) {
    for (let component in components) {
        Vue.component(component, components[component]);
    }
})(Vue);
