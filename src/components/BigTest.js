import React from "react";

class BigTest extends React.Component{
    render() {
        return (
            <div className={'red'}>
                This is a bigTest component {this.props.name}
            </div>
        );
    }
}

export default BigTest;