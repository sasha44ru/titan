import './style/app.scss';
import React from "react";
import ReactDOM from "react-dom";
import Сontent from "./components/Сontent";
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

ReactDOM.render(<Сontent />, document.getElementById("content"));