import { Component, For } from 'solid-js';
import { PageTitle } from '@/components/PageTitle';
import { appConfig } from '@/config';
import { ExperienceItem } from './components/ExperienceItem';

export const Screen2Experiences: Component = () => {
  return (
    <div class='bg-amber-50 pb-8 md:pb-10' id='anchor2'>
      <PageTitle title='我的履历' summary='让热爱的事情，成为进步的阶梯' />
      <div class='px-[7%]  md:px-[16%] lg:px-[20%]'>
        <For each={appConfig.experiences}>
          {item => <ExperienceItem {...item} />}
        </For>
      </div>
    </div>
  );
};
