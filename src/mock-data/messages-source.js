import { range } from './helpers';
import { avatars } from './avatars';

export const MessagesSource = range(0, 100, i => {
  return {
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    sender: `Mock Nickname - ${i}`,
    createdTime: new Date().toLocaleString(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  };
});
