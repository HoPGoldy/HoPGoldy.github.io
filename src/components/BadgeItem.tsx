import type { Component } from 'solid-js';

export interface BadgeItemProps {
  label: string
  value: string
  color?: string
}

export const BadgeItem: Component<BadgeItemProps> = (props) => {
  return (
    <div class='text-badge'>
      <span class='px-1 py-[1px] inline-block text-white bg-gray-600'>
        {props.label}
      </span>
      <span class={'px-1 py-[1px] inline-block text-white ' + (props.color || 'bg-green-600')}>
        {props.value}
      </span>
    </div>
  );
};
