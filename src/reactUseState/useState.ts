export const ReactX = (function () {
  let hooks: any[] = [];
  let index = 0;

  const useStateX = <T>(initialValue: T) => {
    const _idx = index;

    let state = hooks[_idx] || initialValue;
    const setState = (newValue: T) => {
      hooks[_idx] = newValue;
    };
    index++;
    return [state, setState];
  };

  const render = (component: any) => {
    index = 0;
    let currentComponent = component();
    currentComponent.render();
    return currentComponent;
  };

  return { useStateX, render };
})();
