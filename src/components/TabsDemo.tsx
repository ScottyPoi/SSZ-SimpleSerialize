import React from "react";
import DemoInputGroup from "./DemoInputGroup";

type Props = {};

type State = {
  serializeModeOn: boolean;
};

export default class TabsDemo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      serializeModeOn: true,
    };
  }

  showSerialize(): void {
    this.setState({ serializeModeOn: true });
  }

  showDeserialize(): void {
    this.setState({ serializeModeOn: false });
  }

  render(): JSX.Element {
    const { serializeModeOn } = this.state;
    return <DemoInputGroup serializeModeOn={serializeModeOn} />;
  }
}
