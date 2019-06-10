import React from "react";
import {
  MainTabHeaderWrapper,
  MainTabHeaderDecorativeLine,
  MainTabHeaderContent
} from "./styles";

export class MainTabHeaderItem extends React.Component {
  render() {
    return (
      <MainTabHeaderWrapper className={this.props.isSelected ? "selected" : ""}>
        <MainTabHeaderDecorativeLine
          className={this.props.isSelected ? "selected" : ""}
        />
        <MainTabHeaderContent>{this.props.children}</MainTabHeaderContent>
      </MainTabHeaderWrapper>
    );
  }
}
