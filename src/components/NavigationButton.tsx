import { Component, JSXElement } from 'solid-js';

interface Props {
  selected?: boolean
  onClick: () => void
  children: JSXElement
}

export const NavigationButton: Component<Props> = (props) => {
  return (
    <div class={
        'group font-bold w-[70px] h-8 p-5 box-content text-white cursor-pointer relative flex justify-center ' +
        (props.selected ? 'bg-[#666]' : 'bg-black')
      }
      onclick={props.onClick}
    >
      <div class='transition leading-8 relative z-20 group-hover:scale-125'>
        {props.children}
      </div>
      <div class='absolute w-0 group-hover:w-full h-full bg-[#666] transition-w top-0 left-0'></div>
    </div>
  );
};
