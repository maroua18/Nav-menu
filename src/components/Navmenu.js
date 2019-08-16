
import React from  'react';
import './style.css';


const Nav=(props)=>{
  
    return (
<ul className="navitem">{
      props.navItem.map(el => <li className="title">{el.title}
      {!el.sousitem ? null :
        <ul className='sousitems'> {el.sousitem.map(el => <li>{el}</li>)}
        </ul>
      }</li>

      )}
    </ul>
    );
}


export default Nav ;