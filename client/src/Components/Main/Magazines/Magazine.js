import React from 'react'
import {DivMagazine, Picture} from '../MainStyled'

const Magazine = ({pics}) => {
    return (
        <DivMagazine>
            <Picture src={pics} />
        </DivMagazine>
    )
}

export default Magazine
