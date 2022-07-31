import { Component, For } from 'solid-js';
import { PageTitle } from '@/components/PageTitle';
import { appConfig } from '@/config';
import { LinkItem } from '@/components/LinkItem';
import { NavigationBar } from './components/NavigationBar';

export const Screen1Detail: Component = () => {
  return (
    <div class='relative bg-white flex flex-col z-30' id='anchor1'>
      <PageTitle title='个人信息' summary='前端开发工程师' />
      <div class='md:w-screen py-4 md:py-9 px-9 md:px-12 flex flex-col md:flex-row justify-center items-center'>
        <div class='pb-4 md:pt-6 md:px-10 md:w-[26%] text-left'>
          <h3 class='text-2xl text-center md:text-left font-bold'>
            {appConfig.leftIntroduce.title}
          </h3>
          <p class='mt-5'>
            {appConfig.leftIntroduce.content}
          </p>
        </div>
        <div class='w-52 h-52 rounded-full border-8 border-gray-300 overflow-hidden'>
          <img src={appConfig.avatar} alt="avatar" />
        </div>
        <div class='pb-4 pt-4 md:px-10 md:w-[26%] md:ml-2 text-left'>
          <h3 class='text-2xl text-center md:text-left font-bold'>
            {appConfig.rightIntroduce.title}
          </h3>
          <p class='mt-5'>
            {appConfig.rightIntroduce.content}
          </p>
        </div>
      </div>

      <hr class='my-4 mx-[15%] bg-[#727878] opacity-20 h-[2px]' />

      <div class='text-2xl'>如何找到我？</div>
      <div class='mx-[10%] p-6 flex justify-center flex-row flex-wrap'>
        <For each={appConfig.links}>
          {item => <LinkItem {...item} />}
        </For>
      </div>
      <NavigationBar />
    </div>
  );
};
