/* A simpler implementation of Redial (https://github.com/markdalgleish/redial) */

export const provideHooks = (hooks) => (ComposedComponent) => Object.assign(ComposedComponent, {hooks});

export const trigger = (hookName, matchs, dispatch) =>
  matchs.forEach(({match, route}) => {
    const {hooks} = route.component;
    const {params} = match;

    if (hooks && hooks[hookName]) {
      const hook = hooks[hookName];

      hook({params, dispatch});
    }
  });
