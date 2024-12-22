// import welcome, { sayHello as hello, greeting } from './hello';
import * as hello from './hello';

import('./bye').then((module) => console.log(module));

hello.welcome();