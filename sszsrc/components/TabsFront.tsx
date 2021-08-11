import React from "react";
import SerializeFront from "./SerializeFront";

type Props = {};

type State = {
  serializeModeOn: boolean;
};

export default class TabsFront extends React.Component<Props, State> {
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
    return (
      <>
        <div className="container">
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
                  checked={serializeModeOn}
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
                  checked={!serializeModeOn}
                />
                <label className="btn btn-outline-secondary" for="btndeserialize">
                  Deserialize
                </label>
            </div>
          </div>
          <br/>
          <div className="row">
            <SerializeFront serializeModeOn={serializeModeOn} />
          </div>
        </div>
      </>
    );
  }
}
