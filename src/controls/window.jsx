import React, { useState } from 'react';
import {
  WindowWrapper,
  WindowTitleBar,
  WindowTitleBarIcon,
  WindowTitleBarTitle,
  WindowCommandButton,
  WindowContent
} from './window.style';
import '../fonts/iconfont.css';

export function Window(props) {
  const [isMaximized, setIsMaximized] = useState(false);
  const { icon, title, children } = props;

  return (
    <WindowWrapper>
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
    </WindowWrapper>
  );
}
