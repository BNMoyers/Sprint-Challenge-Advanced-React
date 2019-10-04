import React from 'react';
import { shallow } from 'enzyme';
import PlayerList from './PlayerCard';

it('renders without crashing', ()=>{
   const player = {name:'name', country:'country',searches:'num'}
    shallow(<PlayerList player={player}/>)
});