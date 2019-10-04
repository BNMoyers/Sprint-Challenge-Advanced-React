import React from 'react';
import { shallow } from 'enzyme';
import PlayerCard from './PlayerCard';

it('renders without crashing', ()=>{
   const player = {name:'name', country:'country',searches:'num'}
    shallow(<PlayerCard player={player}/>)
});