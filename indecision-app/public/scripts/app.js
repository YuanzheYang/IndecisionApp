'use strict';

console.log('App is running!');
// JSX - JavaScirpt XML
// var app = {
//     title : 'Indecision App1',
//     subtitle : 'This is some info',
//     options:['One', 'Two']
// };
// var template =
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length >0 ? 'Here are your options': 'No options'}</p>
//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>
//     </div>
// ;


// var user = {
//     name: 'Allen',
//     age: '22',
//     Location: 'Seattle'
// };
// function getLocation(Location){
//     if(Location){
//         return <p>Location: {Location}</p>;
//     }

// }
// var templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.Location)}
//     </div>
// );
var template = React.createElement(
    'p',
    null,
    'Does this change'
);
//ReactDOM.render(template);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
