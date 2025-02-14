
import React, { useState } from 'react'

import { IconButton } from '@chakra-ui/react'

import { FiEye, FiEyeOff } from 'react-icons/fi';

const CustIconButton = (show, handleClick
) => {
    
    // const[show, setShow] = useState(false);

    // const handleClick = () =>
    // {
    //     setShow((prev) => !prev);
    // }
    return (

    <IconButton
        size="sm" 
        variant="ghost"
        onClick={handleClick}
    >
        {show ? <FiEyeOff size={20} /> : <FiEye size={20}/>}
    </IconButton>
  )
}

export default CustIconButton
