import React from 'react';
import {
  WindowWrapper,
  WindowTitleBar,
  WindowTitleBarIcon,
  WindowTitleBarTitle,
  WindowCommandButton,
  WindowContent
} from './window.style';
import PropTypes from 'prop-types';
import '../fonts/iconfont.css';

export function Window({ windowState, setWindowState, icon, title, children }) {
  return (
    <WindowWrapper>
      <WindowTitleBar>
        <WindowTitleBarIcon src={icon} />
        <WindowTitleBarTitle>{title}</WindowTitleBarTitle>
        <div className="window-commands">
          <WindowCommandButton onClick={() => setWindowState('minimized')}>
            <span className="iconfont icon-minimize" />
          </WindowCommandButton>
          {windowState === 'maximized' ? (
            <WindowCommandButton onClick={() => setWindowState('normal')}>
              <span className="iconfont icon-restore" />
            </WindowCommandButton>
          ) : (
            <WindowCommandButton onClick={() => setWindowState('maximized')}>
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

Window.propTypes = {
  title: PropTypes.string,
  windowState: PropTypes.string.isRequired,
  setWindowState: PropTypes.func.isRequired
};

Window.defaultProps = {
  windowState: 'normal'
};
