import type { Component } from 'solid-js';
import IconPosition from '@/assets/icon/position.svg';

export interface ExperienceItemProps {
  title: string
  date: string
  office: string
  content: string
  position: string
}

export const ExperienceItem: Component<ExperienceItemProps> = (props) => {

  return (
    <div class='group hover:bg-black hover:bg-opacity-5 rounded-lg flex flex-col md:flex-row flex-nowrap p-4 md:p-6 transition cursor-default'>
      <div class='md:text-left mt-2 md:w-[25%]'>
        <div class='my-2 text-2xl md:text-3xl font-bold'>{props.title}</div>
        <div class='my-2 text-xl'>{props.date}</div>
      </div>

      <div class='transition-opacity bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 h-[2px] md:w-[2px] md:h-auto my-0 md:mx-[5%]'></div>

      <div class='md:w-[65%] text-left'>
        <div class='m-3 text-xl md:text-2xl'>{props.office}</div>
        <div class='m-3 mr-0'>{props.content}</div>
        <img class='inline ml-2' src={IconPosition} alt="position-icon" />
        <span class='align-middle ml-2 text-gray-500'>{props.position}</span>
      </div>
    </div>
  );
};
