'use client';

import type { InputHTMLAttributes } from 'react';

declare global {
  interface Window {
    /** Called by the original inline handlers but defined nowhere, so it is a no-op unless a page script adds it. */
    checkNumberOnly?: (event: KeyboardEvent) => unknown;
  }
}

type Props = InputHTMLAttributes<HTMLInputElement> & {
  /** Clear the placeholder while the field has focus. */
  clearPlaceholderOnFocus?: boolean;
  /** Put the original placeholder back when the field loses focus. */
  restorePlaceholderOnBlur?: boolean;
  /** Forward keydown to window.checkNumberOnly when a page script defines it. */
  numericOnly?: boolean;
};

/**
 * The original site attaches inline DOM handlers to a few inputs. This leaf client component reproduces
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
