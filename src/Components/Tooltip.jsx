import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const LinkWithTooltip = ({ id, children, tooltip }) => {

    return (
        <OverlayTrigger
            className='tooltip'
            overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
            delayShow={300}
            delayHide={150}
            placement='right'
        >
            <span
                className='tooltipText'
            >
                {children}
            </span>
        </OverlayTrigger>
    );

};

export default LinkWithTooltip;