import { range } from './helpers';
import { avatars } from './avatars';

const MessagesSource = range(0, 100, i => {
  return {
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    sender: `Mock Nickname - ${i}`,
    createdTime: new Date(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  };
});

export const GroupsSource = range(0, 15, i => {
  return {
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    name: `Mock Nickname - ${i}`,
    messages: MessagesSource
  };
});
