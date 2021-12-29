/// <reference types="@zyllio/zy-sdk" />

'use strict'

import { h, Component, render } from 'https://unpkg.com/preact?module'
import register  from 'https://unpkg.com/preact-custom-element?module'

 console.log("register ", register);

const app = h('h1', null, 'Hello World!');

// render(app, document.body)
register(app, 'x-app');
