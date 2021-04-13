import React from 'react';
import  Button  from 'react-bootstrap/Button';


export default function MenuButton({ ...args })  {
    return <Button>{args.foo}</Button>
}