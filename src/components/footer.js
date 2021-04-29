import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().getFullYear()
        }
    }
    render() {
        return (
            <div>Copyright {this.state.date}</div>
        )
    }
}

export default Footer;