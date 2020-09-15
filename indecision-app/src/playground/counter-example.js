let count = 0;
const addOne = () => {
    count ++;
    renderCounterApp();
}
const renderCounterApp = () => {
    var templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick= {() => {
                count --;
                renderCounterApp();
            }}>-1</button>
            <button id = "id" className="button" onClick = {() =>{
                count = 0;
                renderCounterApp();
            }}>reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);

}
renderCounterApp();