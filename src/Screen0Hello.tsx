import type { Component } from 'solid-js';
import { appConfig } from '@/config';
import IconDown from '@/assets/icon/down.svg';

export const Screen0Hello: Component = () => {
  const jumpToSecondScreen = () => {
    document.querySelector('#anchor1')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div class='h-screen text-center md:font-bold text-white relative z-20' onClick={jumpToSecondScreen}>
      <div class='absolute top-0 bottom-0 left-0 right-0 bg-black opacity-20'></div>
      <div class='select-none absolute top-1/3 z-10 w-screen text-6xl'>{appConfig.name}</div>
      <div class='absolute opacity-70 w-full flex items-center flex-col bottom-20 cursor-pointer animate-bounce'>
        点击查看
        <img class='mt-2' src={IconDown} alt="down-icon" />
      </div>
    </div>
  );
};
