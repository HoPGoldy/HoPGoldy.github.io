import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import { PageTitle } from '@/components/PageTitle';

export const Screen5Footer: Component = () => {
  const [maskHeight, setMaskHeight] = createSignal(0)
  const [visiable, setVisiable] = createSignal(false)
  let contentRef: HTMLDivElement

  // 监听当前高度，页面滚动到看不见首页背景图时就显示 footer
  const onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    const windowHeight = document.documentElement.clientHeight
    setVisiable(scrollTop >= windowHeight * 3)
  }

  onMount(() => {
    setMaskHeight(contentRef.clientHeight);
    window.addEventListener('scroll', onScroll);
  })

  onCleanup(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return (
    <div>
      <div
        class='shadow-[0_17px_40px_-5px_#2d2d2d_inset] pointer-events-none relative z-10'
        style={{ height: maskHeight() + 'px' }}
      ></div>
      <div
        ref={contentRef}
        class='bg-[#434242] fixed bottom-0 w-screen'
        style={{ opacity: visiable() ? 1 : 0 }}
      >
        <PageTitle title='致谢' color='#e8e8e8' />

        <div class='text-[#e8e8e8] mb-10 md:mb-14 text-base mx-6'>
          <div class='mt-3'>
            感谢我所使用软件的开源作者们, 因为你们, 我才能站在更高的地方继续攀登。
          </div>
          <div class='mt-3'>
            感谢和我一起工作过生活过的朋友同事们, 你们的指导对我的成长至关重要。
          </div>
          <div class='mt-3'>
            最后，感谢我的女友
          </div>
          <div class='mt-3 text-[#ff9898] text-3xl'>
            Leefoundy
          </div>
          <div class='mt-3'>
            遇见你，是最美丽的意外
          </div>
        </div>

        <div class='text-[#a2a2a2] text-sm'>
          <div class='my-2'>
            本网站基于 solidjs 制作, 创意灵感来源于 <a class='underline' href="http://www.pascalvangemert.nl/#/profile">Pascal van Gemert 的个人网站</a>。
          </div>
          <div class='my-2 mb-4'>
            网站已开源至 <a class='underline' href="https://github.com/HoPGoldy/HoPGoldy.github.io">github</a>, 欢迎 star。
          </div>
        </div>
      </div>
    </div>
  );
};
