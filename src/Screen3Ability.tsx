import { Component, For } from 'solid-js';
import { PageTitle } from '@/components/PageTitle';
import { appConfig } from '@/config';
import { AbilityItem } from './components/AbilityItem';

export const Screen3Ability: Component = () => {
  return (
    <div class='pb-10 bg-white z-20' id='anchor3'>
      <PageTitle title='我的能力' summary='学习优秀的技术，使用优秀的工具' />
      <For each={appConfig.abilitys}>
        {item => (<>
          <div class='cursor-default text-2xl md:text-3xl'>{item.title}</div>
          <div class='flex flex-row flex-wrap justify-between content-start my-4 mx-[7%] md:mx-[20%]'>
            <For each={item.items}>
              {item => <AbilityItem class='w-[93%] md:w-[40%]' {...item} />}
            </For>
          </div>
          <hr class='my-4 mx-[15%] bg-[#727878] opacity-20 h-[2px]' />
        </>)}
      </For>
    </div>
  );
};
