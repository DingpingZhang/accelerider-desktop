import React from "react";
import { TabControl, TabHeaderPanel, TabContent } from "./styles";
import { MainTabHeaderItem } from "./main-tab-header-item";

export class MainTabControl extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    this.getOnSelectedChanged = this.getOnSelectedChanged.bind(this);
  }

  render() {
    const { children } = this.props;
    console.log(children[0].props.children);
    return (
      <TabControl>
        <TabHeaderPanel>
          {children.map((item, index) => (
            <div key={index} onClick={this.getOnSelectedChanged(index)}>
              <MainTabHeaderItem
                isSelected={this.state.selectedIndex === index}
              >
                {item.props.header}
              </MainTabHeaderItem>
            </div>
          ))}
        </TabHeaderPanel>
        <TabContent>
          {children[this.state.selectedIndex].props.children}
        </TabContent>
      </TabControl>
    );
  }

  getOnSelectedChanged(index) {
    return () => {
      this.setState({
        selectedIndex: index
      });
    };
  }
}
