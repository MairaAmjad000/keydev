import { Icon } from '@/components/icons';

/**
 * Wrapper that holds an icon. `icon` is a key of the icon registry (e.g. "svg-1a2b3c"), or inline SVG markup
 * (older content), so both kinds of CMS data render the same way.
 */
export function IconSlot({ icon, className }: { icon: string; className: string }) {
  if (icon.trimStart().startsWith('<')) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: icon }} />;
  }
  return (
    <div className={className}>
      <Icon name={icon} />
    </div>
  );
}
