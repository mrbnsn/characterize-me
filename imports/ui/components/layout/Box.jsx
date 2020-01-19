import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * A basic flex container.
 * 
 */
const Box = (props) => {

    const classMap = {
        direction: {
            row: 'flex-row',
            column: 'flex-column',
        },
        justify: {
            center: 'justify-center',
            between: 'justify-between',
            around: 'justify-around',
            evenly: 'justify-evenly',
            baseline: 'justify-baseline',
            start: 'justify-start',
            end: 'justify-end',
        },
        align: {
            center: 'align-center',
            baseline: 'align-baseline',
            start: 'align-start',
            end: 'align-end',
        },
        wrap: {
            wrap: 'flex-wrap',
            noWrap: 'flex-no-wrap',
        }
    }

    return (
        <div className={getClassNames()}>
            {props.children}
        </div>
    );

    /**
     * Build className string from passed props and
     * classMap.
     * 
     * @return {array}
     */
    function getClassNames() {
        const { className, direction, justify, align } = props;
        return [ 
            className, 
            "flex", 
            classMap.direction[direction],
            classMap.justify[justify],
            classMap.align[align],
        ].join(" ");
    }
    
}

/**
 * Register PropTypes and default props for component.
 * 
 */
Box.propTypes = {
    className: PropTypes.string,
    direction: PropTypes.string.isRequired,
    justify: PropTypes.string.isRequired,
    align: PropTypes.string.isRequired,
}
Box.defaultProps = {
    className: "",
    direction: 'row',
    justify: 'center',
    align: 'center'
}

export default Box;