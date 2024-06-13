//Navigation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircleFill , JournalText} from 'react-bootstrap-icons';
import logo from './logo.png';


const Navigation = () => {
const nav = useNavigate();
//route for home page
const gotoHome = ()=>{
	nav('/');
}

//route for add address page
const gotoAdd = ()=>{
	nav('/add'); 
}

return (
	<>
	<div className='container d-flex align-items-center flex-row m-3'>
	<div><img src={logo} className="App-logo p-2 m-1" alt="logo" /> </div>
	<h5>My Address-Book</h5> 
	</div>
	
	<nav className='container d-flex align-items-center flex-row m-3'>
		
		
		<h2 className='p-2 m-1' onClick={gotoHome}><JournalText /></h2>
		<h2 className='p-2 m-1' onClick={gotoAdd}><PlusCircleFill /></h2>
	</nav>
	</>
);
};

export default Navigation;
