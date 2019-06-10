import React from "react";
import { TabControl, TabHeaderPanel, TabContent } from "./styles";
import { TabHeaderItem } from "./tab-header-item";

export class MainTabControl extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
    this.getOnSelectedChanged = this.getOnSelectedChanged.bind(this);
  }

  render() {
    const { children, headerWidth, headerBackground } = this.props;

    return (
      <TabControl>
        <TabHeaderPanel
          headerWidth={headerWidth || "200px"}
          headerBackground={headerBackground || "white"}
        >
          {children.map((item, index) => (
            <div key={index} onClick={this.getOnSelectedChanged(index)}>
              <TabHeaderItem
                isSelected={this.state.selectedIndex === index}
              >
                {item.props.header}
              </TabHeaderItem>
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
