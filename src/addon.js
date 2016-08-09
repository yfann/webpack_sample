import * as React from 'react';
import {render} from 'react-dom';

var img1 = document.createElement("img");
img1.src = require("./pan.jpg");
document.body.appendChild(img1);

if(_DEV_){
    document.write('DEV');
}


render(
    <h1>Hello React</h1>,
    document.getElementById("container_1")
);