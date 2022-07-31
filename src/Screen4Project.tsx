import { Component, For } from 'solid-js';
import { PageTitle } from '@/components/PageTitle';
import { appConfig } from '@/config';
import { ProjectItem } from './components/ProjectItem';
import { LinkItem } from './components/LinkItem';

export const Screen4Project: Component = () => {
  return (
    <div class='bg-amber-50' id='anchor4'>
      <PageTitle title='我的项目' summary='学习、实践、做自己喜欢的事情' />

      <div class='flex flex-col md:flex-row flex-wrap justify-between my-0 mx-[10%] md:mx-[10%] xl:mx-[15%]'>
        <For each={appConfig.projects}>
          {item => <ProjectItem {...item} />}
        </For>
      </div>

      <div class='text-xl md:text-2xl'>
        你可以在以下网站找到我的发布
      </div>

      <div class='my-0 mx-[10%] p-8 flex flex-row flex-wrap justify-center'>
        <For each={appConfig.releaseLinks}>
          {item => <LinkItem {...item} />}
        </For>
      </div>
    </div>
  );
};
