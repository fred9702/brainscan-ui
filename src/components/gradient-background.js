import React from 'react';
import { Gradient } from 'react-gradient';

export default function GradientBackground(props) {

    return (
        <Gradient
            gradients={[
                ['#FFFFFF', '#E64C00'],
                ['#E64C00', '#FFFFFF']
            ]}
            property="background"
            angle="30deg"
            duration="4500"
            className="App-header"
            gradientType="radial"
        >
            {props.children}
        </Gradient>
    );
}