import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (

            <div className="container">
                <div class="row">
                    <div className="col-12 mx-auto text-center text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h3>page not found</h3>
                        <h3>
                            the requested URL 
                            <span>
                                {this.props.location.pathname}
                            </span>{" "} 
                             was not found
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;
