import React from "react";

import CreateImage from "./CreateImage";
import Buttons from '../buttons/Buttons'
import "./Images.css";

interface IProps {
  isCat: boolean;
}
interface IState {
  images: React.ReactElement[];
}
class AddImage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      images: []
    };
  };

  componentDidUpdate(prevProps: IProps): void {
    if (this.props.isCat !== prevProps.isCat) {
      this.resetHandler();
      this.updateBodyColor();
    }
  }

  updateBodyColor = (): void => {
    this.props.isCat ? document.body.style.backgroundColor = '#47737c' : document.body.style.backgroundColor = '#557f86';
  }

  moveHandler = (class_name: string): void => {

    let url: string = this.props.isCat === false ? 'https://api.thedogapi.com/v1/images/search' : 'https://api.thecatapi.com/v1/images/search';

    this.setState(
      {images: [...this.state.images, <CreateImage url={url} className={class_name} key={Math.random()} />]}
      );
  };

  resetHandler = (): void => {
    this.setState({images: []})
  };

  render () {
    return (
      <div className="container">
      {this.state.images}
      <Buttons reset={this.resetHandler} move={this.moveHandler} />
    </div>
    )
  }
}

export default AddImage