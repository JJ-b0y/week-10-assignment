import { CanDeactivateFn } from '@angular/router';

export const unsavedProgressGuard: CanDeactivateFn<any> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {

  if (component.progressUnsaved) {
    return confirm('Your progress is unsaved. Are you sure you want to exit this page?');
  }

  return true;
};
