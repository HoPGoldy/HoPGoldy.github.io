import type { Component } from 'solid-js';

export interface LinkItemProps {
  icon: string
  src: string
  label: string
}

export const LinkItem: Component<LinkItemProps> = (props) => {
  return (
    <a
      class='cursor-pointer flex py-2 px-3 my-0 md:mx-8 transition hover:bg-gray-200 hover:rounded-md'
      href={props.src}
    >
      <img src={props.icon} alt="link-icon" />
      <div class='ml-4 text-gray-500'>{props.label}</div>
    </a>
  );
};
