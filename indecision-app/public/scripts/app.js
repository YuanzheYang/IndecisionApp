'use strict';

var app = {
    title: 'Visibility Toggle',
    buttonValue: ['Show details', 'Hide details'],
    details: ['Hey. There are details you can now see!']
};
var index = 1;
var appRoot = document.getElementById('app');

var showOrHide = function showOrHide() {
    if (index == 0) {
        index = 1;
        render();
    } else {
        index = 0;
        render();
    }
};
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: showOrHide },
            app.buttonValue[index]
        ),
        index > 0 ? React.createElement(
            'p',
            null,
            app.details[0]
        ) : ''
    );
    ReactDOM.render(template, appRoot);
};

render();
