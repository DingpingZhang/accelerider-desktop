import React from "react";
import {
  Window,
  WindowTitleBar,
  WindowTitleBarIcon,
  WindowTitleBarTitle,
  WindowCommandButton,
  WindowContent
} from "./styles.js";
import "../fonts/iconfont.css";

export class MainWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      isMaximized: false
    };
    this.maximizeOrRestoreWindow = this.maximizeOrRestoreWindow.bind(this);
  }

  render() {
    const { icon, title, children } = this.props;

    return (
      <Window>
        <WindowTitleBar>
          <WindowTitleBarIcon src={icon} />
          <WindowTitleBarTitle>{title}</WindowTitleBarTitle>
          <div className="window-commands">
            <WindowCommandButton>
              <span className="iconfont icon-minimize" />
            </WindowCommandButton>
            {this.state.isMaximized ? (
              <WindowCommandButton onClick={this.maximizeOrRestoreWindow}>
                <span className="iconfont icon-restore" />
              </WindowCommandButton>
            ) : (
              <WindowCommandButton onClick={this.maximizeOrRestoreWindow}>
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

  maximizeOrRestoreWindow() {
    this.setState(state => ({ isMaximized: !state.isMaximized }));
  }
}
