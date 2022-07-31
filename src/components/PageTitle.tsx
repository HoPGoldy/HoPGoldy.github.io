import type { Component } from 'solid-js';

interface Props {
  title: string
  summary?: string
  color?: string
}

export const PageTitle: Component<Props> = (props) => {

  return (
    <div class='w-full cursor-default flex flex-col flex-nowrap mt-8 md:mt-16' style={{ color: props.color }}>
      <div class='text-3xl md:text-5xl py-3 md:py-5'>{props.title}</div>
      <div class='text-lg md:text-xl mb-4'>{props.summary}</div>
      
      <hr class='my-4 mx-[15%] bg-[#727878] opacity-20 h-[2px]' />
    </div>
  );
};
