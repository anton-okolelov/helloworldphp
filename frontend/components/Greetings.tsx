import * as React from 'react';

export interface GreetingsProps {
    text: string;
    isReady: boolean;
    onMount();
}

class Greetings extends React.Component<GreetingsProps, undefined> {

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return (
            <h1>{this.props.text}</h1>
        );
    }
}

export default Greetings;