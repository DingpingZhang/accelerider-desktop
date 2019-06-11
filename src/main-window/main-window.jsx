import React, { useState } from 'react';
import {
  Window,
  WindowTitleBar,
  WindowTitleBarIcon,
  WindowTitleBarTitle,
  WindowCommandButton,
  WindowContent
} from './styles.js';
import '../fonts/iconfont.css';

export function MainWindow(props) {
  const [isMaximized, setIsMaximized] = useState(false);
  const { icon, title, children } = props;

  return (
    <Window>
      <WindowTitleBar>
        <WindowTitleBarIcon src={icon} />
        <WindowTitleBarTitle>{title}</WindowTitleBarTitle>
        <div className="window-commands">
          <WindowCommandButton>
            <span className="iconfont icon-minimize" />
          </WindowCommandButton>
          {isMaximized ? (
            <WindowCommandButton onClick={() => setIsMaximized(false)}>
              <span className="iconfont icon-restore" />
            </WindowCommandButton>
          ) : (
            <WindowCommandButton onClick={() => setIsMaximized(true)}>
              <span className="iconfont icon-maximize" />
            </WindowCommandButton>
          )}
          <WindowCommandButton className="close">
            <span className="iconfont icon-close" />
          </WindowCommandButton>
        </div>
      </WindowTitleBar>
      <WindowContent>{children}</WindowContent>
    </Window>
  );
}
