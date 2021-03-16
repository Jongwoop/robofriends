import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('Noooo')
	// }
    return (
        <div>
            {
							robots.map((user,i) => {
									return (
									<Card 
									key = {robots[i].id} 
									id = {robots[i].id} 
									name={robots[i].name} 
									email = {robots[i].email}
									/>);
							})
            }
        </div>
    );
}

export default CardList;


// Step 2.
// const CardList = ({ robots }) => {
//     const robotComponent = robots.map((user,i) => {
//         return (
//         <Card 
//         key = {robots[i].id} 
//         id = {robots[i].id} 
//         name={robots[i].name} 
//         email = {robots[i].email}
//         />);
//     })
//     return (
//         <div>
//             {robotComponent}
//         </div>


// Step 1.

// const CardList = ({ robots }) => {
//     return (
//         <div>
//             <Card id = {robots[0].id} name={robots[0].name} email = {robots[0].email}/>
//             <Card id = {robots[1].id} name={robots[1].name} email = {robots[1].email}/>
//             <Card id = {robots[2].id} name={robots[2].name} email = {robots[2].email}/>
//         </div>
//     );
// }