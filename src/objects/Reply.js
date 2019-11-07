import File from './File'

export default class Reply<T> {

    succeed : boolean;
    object : T;
    message : string;

    constructor(succeed : boolean, object : T, message? : string) {
        let file = new File();
        file.stats()
        this.succeed = succeed;
        this.object = object;
        this.message = message;
    }
}
