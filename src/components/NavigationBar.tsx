import { Component, createEffect, createSignal, For, onCleanup, onMount } from 'solid-js';
import { NavigationButton } from './NavigationButton';
import IconDown from '@/assets/icon/down.svg';

const menus = [
  { label: '介 绍', value: '#anchor1' },
  { label: '履 历', value: '#anchor2' },
  { label: '能 力', value: '#anchor3' },
  { label: '项 目', value: '#anchor4' },
]

/**
 * 递归获取导航条到页面流顶端的距离
 * 
 * @param {object} el 要获取高度的 html 元素
 * @returns {number} 元素到页面顶端的距离
 * @see https://blog.csdn.net/u013764814/article/details/83825479
 */
const getElementToPageTop = (el: HTMLElement): number => {
  if (el.parentElement) {
    return getElementToPageTop(el.parentElement) + el.offsetTop
  }
  return el.offsetTop
}

export const NavigationBar: Component = () => {
  const [selectedPageIndex, setSelectedPageIndex] = createSignal(0);
  const [fixed, setFixed] = createSignal(false);

  let menusOffsetTop: number[];
  let navBarOffsetTop: number;
  let barRef: HTMLDivElement;

  const onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

    for (let i in menusOffsetTop) {
      const index = Number(i)
      // 当前滚动到的页面高度要大于某个信息页的高
      if (scrollTop >= menusOffsetTop[index]) {
        const nextOffset = menusOffsetTop[index + 1]
        // 如果是最后一个页面的话就i直接高亮最后一个
        // 或者当前滚动到的高度要小于下个信息页的高度，这样才算在某个页的区间内
        if (!nextOffset || scrollTop < nextOffset) {
          setSelectedPageIndex(index)
          break
        }
      }
    }

    setFixed(scrollTop >= navBarOffsetTop)
  }

  onMount(() => {
    window.addEventListener('scroll', onScroll)

    menusOffsetTop = menus.map(menu => {
      return getElementToPageTop(document.querySelector(menu.value))
    })
    navBarOffsetTop = getElementToPageTop(barRef)
  })

  onCleanup(() => {
    window.removeEventListener('scroll', onScroll)
  })

  /**
   * 返回首页
   */
  const backTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  /**
   * 跳转到指定元素
   */
  const jumpTo = (selector) => {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={barRef} 
      class={'hidden lg:block top-0 bottom-0 right-14 rel z-40 ' + (fixed() ? ' fixed' : 'absolute')}
    >
      <div class='flex flex-col flex-nowrap mt-14'>
        <For each={menus}>
          {(menu, index) => (
            <NavigationButton selected={selectedPageIndex() === index()} onClick={() => jumpTo(menu.value)}>
              {menu.label}
            </NavigationButton>
          )}
        </For>
      </div>

      <div class='mt-9'>
        <NavigationButton onClick={backTop}>
          <img class='rotate-180' src={IconDown} alt="back-to-top" />
        </NavigationButton>
      </div>
    </nav>
  );
};
