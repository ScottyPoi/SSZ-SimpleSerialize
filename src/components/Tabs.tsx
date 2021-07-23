import React from "react";
import Serialize from "./Serialize";

type Props = {

};

type State = {
  serializeModeOn: boolean;
};

export default class Tabs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      serializeModeOn: true,
    };
  }

  showSerialize(): void {
    this.setState({serializeModeOn: true});
  }

  showDeserialize(): void {
    this.setState({serializeModeOn: false});
  }

  render(): JSX.Element {
    const {serializeModeOn} = this.state;
    return (
      <>
        <div>
        <Serialize serializeModeOn={serializeModeOn} />
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button onClick={() => this.showSerialize()}>Serialize</button>
            </li>
            <li className="nav-item">
              <button onClick={() => this.showDeserialize()}>Deserialize</button>
          </li>
          </ul>
        </div>
      </>
    );
  }
}
