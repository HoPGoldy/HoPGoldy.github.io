import { Component, For } from 'solid-js';
import IconStar from '@/assets/icon/star.svg';
import IconUnstar from '@/assets/icon/unstar.svg';

export interface AbilityItemProps {
  title: string
  star: number
  class?: string
}

export const AbilityItem: Component<AbilityItemProps> = (props) => {
  const stars = Array.from({ length: 5 })
  return (
    <div class={'flex flex-row flex-nowrap justify-between py-2 px-3 transition rounded-lg group hover:bg-gray-200 ' + props.class}>
      <div
        class='text-left cursor-default shrink whitespace-nowrap text-ellipsis overflow-hidden'
        title={props.title}
      >{props.title}</div>
      <div class='flex flex-row flex-nowrap shrink-0'>
        <For each={stars}>
          {(_, index) => {
            const isStar = index() < props.star
            const src = isStar ? IconStar : IconUnstar
            const alt = isStar ? 'star-icon' : 'unstar-icon'

            return (
              <img
                class='transition-spacing group-hover:my-0 group-hover:mx-[2px]'
                width={24}
                height={24}
                src={src}
                alt={alt}
              />
            )
          }}
        </For>
      </div>
    </div>
  );
}
