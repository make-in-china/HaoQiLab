
import * as mobxReact from 'mobx-react';
import * as mobx from 'mobx';
const mymobx = { ...mobxReact, ...mobx };
(window as any).Mobx = mymobx;