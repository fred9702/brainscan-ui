import React from 'react';
import { Gradient } from 'react-gradient';

export default function GradientBackground(props) {

    return (
        <Gradient
            gradients={[
            ['#FFFD00', '#9CA2FF'],
            ['#FF47F4', '#6DFF5C'],
            ]}
            property="background"
            angle="30deg"
            duration="4500"
            className="App-header"
        >
            {props.children}
        </Gradient>
    );
}