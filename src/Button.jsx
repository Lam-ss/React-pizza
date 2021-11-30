import React from "react";
import classnames from 'classnames'

// class Button extends React.Component {


//     render() {
//         return <button className={classnames('button', {
//             'button--outline': this.props.outline,
//         })}>{this.props.children}</button>
//     }

// }

function Button(props) {
    return (
        <button className={classnames('button', props.className, {
            'button--outline': props.outline,
        })}>{props.children}</button>
    )
}


export default Button;