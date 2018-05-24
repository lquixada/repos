/* A simpler implementation of Redial (https://github.com/markdalgleish/redial) */

export const provideHooks = (hooks) => (ComposedComponent) => Object.assign(ComposedComponent, {hooks});

export const trigger = (name, component, params) => component.hooks[name](params);