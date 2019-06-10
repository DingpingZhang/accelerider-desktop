import React from "react";
import {
  TabHeaderWrapper,
  TabHeaderDecorativeLine,
  TabHeaderContent
} from "./styles";

export class TabHeaderItem extends React.Component {
  render() {
    return (
      <TabHeaderWrapper>
        <TabHeaderDecorativeLine
          className={this.props.isSelected ? "selected" : ""}
        />
        <TabHeaderContent>{this.props.children}</TabHeaderContent>
      </TabHeaderWrapper>
    );
  }
}
