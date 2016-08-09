import * as React from 'react';
import {render} from 'react-dom';

var style=require('./app.css');

render(
    <h1 className={style.h1}>Hello World</h1>,
    document.getElementById("container")
);