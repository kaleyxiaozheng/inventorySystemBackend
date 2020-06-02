import React from 'react';

export class Header extends Comment {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="App-title">
                        <h3>Inventory Management</h3>
                    </div>
                    <div className="Access-app">
                        <LabelButtonRouter label={this.props.label} path='/{this.props.label}'></LabelButtonRouter>
                        <LabelButtonRouter label={this.props.label} path='/{this.props.label}'></LabelButtonRouter>
                    </div>
                </div>
            </div>
        );
    }
}