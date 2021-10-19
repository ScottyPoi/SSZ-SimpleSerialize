import React from "react";
import SerializeMod from "./SerializeMod";

type Props = {

};

type State = {
  serializeModeOn: boolean;
};

export default class TabsMod extends React.Component<Props, State> {
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
          {/* <div className="row justify-content-center">
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
                  autoComplete="off"
                  onClick={() => this.showSerialize()}
                  defaultChecked={serializeModeOn}
                />
                <label className="btn btn-outline-secondary" htmlFor="btnserialize">
                  Serialize
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btndeserialize"
                  onClick={() => this.showDeserialize()}
                  autoComplete="off"
                  defaultChecked={!serializeModeOn}
                />
                <label className="btn btn-outline-secondary" htmlFor="btndeserialize">
                  Deserialize
                </label>
            </div>
          </div> */}
          <br/>
        <SerializeMod serializeModeOn={serializeModeOn} />
        </div>
      </>
    );
  }
}
