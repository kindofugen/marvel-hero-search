export const changeCssVariables = (theme) => {
  const root = document.querySelector(':root');
  root.style.setProperty('--theme-default-text', `var(--theme-${theme}-text)`);
  root.style.setProperty('--theme-default-background', `var(--theme-${theme}-background)`);
  root.style.setProperty('--theme-default-card-background', `var(--theme-${theme}-card-background)`);
  root.style.setProperty('--theme-default-card-border-left', `var(--theme-${theme}-card-border-left)`);
  root.style.setProperty('--theme-default-card-border-bottom', `var(--theme-${theme}-card-border-bottom)`);
  root.style.setProperty('--theme-default-card-text', `var(--theme-${theme}-card-text)`);
};
