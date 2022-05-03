import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export default function InputBox({
    placeholder='',
    value='',
    onChange=()=>{},
    Prefix='',
    ...props
}) {
    return <div>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={{color:'#868d94'}}>{Prefix}</InputGroup.Text>
            <FormControl
                placeholder={placeholder}
                aria-label={placeholder}
                aria-describedby="basic-addon1"
                value={value}
                onChange={onChange}
                {...props}
            />
        </InputGroup>
    </div>
}