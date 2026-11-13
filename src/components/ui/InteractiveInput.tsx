'use client';

import type { InputHTMLAttributes } from 'react';

declare global {
  interface Window {
    /** referenced by the reference markup but never defined there (it throws a silent ReferenceError) */
    checkNumberOnly?: (event: KeyboardEvent) => unknown;
  }
}

type Props = InputHTMLAttributes<HTMLInputElement> & {
  /** reference: onfocus="this.placeholder = ''" */
  clearPlaceholderOnFocus?: boolean;
  /** reference: onblur="this.placeholder = '<original placeholder>'" */
  restorePlaceholderOnBlur?: boolean;
  /** reference: onkeydown="checkNumberOnly(event);" (a no-op unless the page defines that global) */
  numericOnly?: boolean;
};

/**
 * The reference attaches inline DOM handlers to a few inputs. This leaf client component reproduces
 * them with React handlers while rendering the identical <input> markup.
 */
export function InteractiveInput({ clearPlaceholderOnFocus, restorePlaceholderOnBlur, numericOnly, ...rest }: Props) {
  const original = rest.placeholder;
  return (
    <input
      {...rest}
      onFocus={
        clearPlaceholderOnFocus
          ? (e) => {
              e.currentTarget.placeholder = '';
            }
          : undefined
      }
      onBlur={
        restorePlaceholderOnBlur
          ? (e) => {
              e.currentTarget.placeholder = original ?? '';
            }
          : undefined
      }
      onKeyDown={numericOnly ? (e) => window.checkNumberOnly?.(e.nativeEvent) : undefined}
    />
  );
}
