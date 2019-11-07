export function copy(object : any, protoType : any) {
    if (!object) {
        return object;
    }
    if (object.constructor.name === 'Array') {
        const newObject = object.slice();
        newObject.__proto__ = protoType;
        return newObject;
    }
    if (object.constructor.name === 'ArrayList') {
        const newObject = object.slice();
        newObject.__proto__ = protoType;
        return newObject;
    }
    const newObject = { ...object };
    newObject.__proto__ = protoType;
    return newObject;
}