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
          <div className="row justify-content-center">
            <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
            >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnserialize"
                  autocomplete="off"
                  onClick={() => this.showSerialize()}
                  defaultChecked={serializeModeOn}
                />
                <label className="btn btn-outline-secondary" for="btnserialize">
                  Serialize
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btndeserialize"
                  onClick={() => this.showDeserialize()}
                  autocomplete="off"
                  defaultChecked={!serializeModeOn}
                />
                <label className="btn btn-outline-secondary" for="btndeserialize">
                  Deserialize
                </label>
            </div>
          </div>
          <br/>
        <Serialize serializeModeOn={serializeModeOn} />
        </div>
      </>
    );
  }
}