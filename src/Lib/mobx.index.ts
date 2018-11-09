
// import Mobx from 'Mobx';
// export const observer = Mobx.observer;
// export const observable = Mobx.observable;

import { observable as _observable } from 'mobx';
import { observer as _observer } from 'mobx-react';
export const observer: any = _observer;
export const observable: any = _observable;