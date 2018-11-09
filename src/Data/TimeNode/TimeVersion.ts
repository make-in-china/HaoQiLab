import { TimeNodeVersion } from './TimeNodeVersion';

export class TimeVersion<T> {

    autoCommit: boolean = true;
    version = 0;

    createTimeNodeVersion(): TimeNodeVersion<T> {
        return new TimeNodeVersion(this);
    }

}