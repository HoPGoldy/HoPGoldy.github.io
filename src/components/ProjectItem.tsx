import { Component, For } from 'solid-js';
import IconCmd from '@/assets/icon/cmd.svg';
import { BadgeItem, BadgeItemProps } from './BadgeItem';

export interface ProjectItemProps {
  title: string
  content: string
  badges: BadgeItemProps[]
  type: string
  src: string
  pic: string
  class?: string
}

export const ProjectItem: Component<ProjectItemProps> = (props) => {
  return (
    <div class='mb-6 md:mb-9 md:my-5 md:mx-0 group relative bg-white shadow hover:shadow-lg overflow-hidden md:w-[47%] h-[250px] cursor-default transition'>
      <div class='relative w-0 lg:w-[150px] group-hover:w-full h-full bg-orange-300 overflow-hidden z-10 transition-w'>
        <div class='hidden lg:block lg:w-[150px] h-full float-left'>
          <a href={props.pic} target='_blank'>
            <img
              class='mx-auto my-4 group-hover:my-0 group-hover:w-full group-hover:h-full w-[120px] h-[120px] object-cover transition-all bg-orange-400'
              src={props.pic}
              alt='cover-img'
            />
          </a>
          <div class='mt-[75px] text-white text-sm'>{props.type}</div>
        </div>
        <div class='absolute left-0 lg:left-[150px] top-0 right-0 h-full'>
          <div class='text-white text-left font-bold text-xl m-4'>{props.title}</div>

          <div class='text-left mx-4 flex flex-wrap gap-2'>
            <For each={props.badges}>
              {item => <BadgeItem {...item} />}
            </For>
          </div>

          <a
            class='absolute left-4 bottom-4 right-4 bg-white bg-opacity-30 py-1 px-4 text-white hover:bg-opacity-40 cursor-pointer transition text-sm'
            href={props.src}
            target='_blank'
          >查 看</a>
        </div>
      </div>

      <div class='absolute left-0 lg:left-[150px] top-0 right-0 h-full z-0 text-left'>
        <div class='font-bold text-xl m-4'>{props.title}</div>

        <hr />
        <div class='m-4 text-sm leading-6'>{props.content}</div>

        <a
          class='md:hidden absolute left-4 bottom-4 right-4 bg-black bg-opacity-30 py-1 px-4 text-white hover:bg-opacity-40 cursor-pointer transition text-center text-sm'
          href={props.src}
          target='_blank'
        >查 看</a>
      </div>
    </div>
  );
}
