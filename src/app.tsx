import { Component } from 'solid-js';
import { Screen0Hello } from './Screen0Hello';
import { Screen1Detail } from './Screen1Detail';
import { Screen2Experiences } from './Screen2Experiences';
import { Screen3Ability } from './Screen3Ability';
import { Screen4Project } from './Screen4Project';
import { Screen5Footer } from './Screen5Footer';
import { appConfig } from './config'

const App: Component = () => {
  const randIndex = Math.floor(Math.random() * appConfig.bgImages.length);

  return (
    <div class='relative'>
      {/* 这里不能使用 background-attachment：fixed；不然在移动端上会出现一直抖动的问题 */}
      <img
        class='fixed top-0 left-0 w-screen h-screen object-cover -z-50'
        src={appConfig.bgImages[randIndex]}
        alt="bg"
      />
      <div class="flex flex-col">
        <Screen0Hello />
        <Screen1Detail />
        <Screen2Experiences />
        <Screen3Ability />
        <Screen4Project />
        <Screen5Footer />
      </div>
    </div>
  );
};

export default App;
