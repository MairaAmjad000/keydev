import type { FormOption } from '@/types';

/** <option> list for a <select>; the lists are shared CMS data (content/settings/forms.json). */
export function FormOptions({ options }: { options: FormOption[] }) {
  return (
    <>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </>
  );
}
