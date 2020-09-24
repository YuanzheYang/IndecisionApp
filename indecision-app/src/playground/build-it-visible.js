class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     buttonValue: ['Show details' , 'Hide details'],
//     details:['Hey. There are details you can now see!']
// };
// let index = 1;
// var appRoot = document.getElementById('app');

// const showOrHide = () => {
//     if(index == 0) {
//         index = 1;
//         render();
//     } else {
//         index = 0;
//         render();
//     }
// }
// const render = () => {
//     const template =(
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick = {showOrHide}>{app.buttonValue[index]}</button>
//             {index > 0 ? <p>{app.details[0]}</p>: ''}
//         </div>
        
//     );
//     ReactDOM.render(template, appRoot);
// }

// render();


