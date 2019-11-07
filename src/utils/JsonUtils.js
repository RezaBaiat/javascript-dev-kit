    /**
     *
     * @param text
     * @param protoType like EventMessage.prototype;
     */
    export function fromJson(text : string, protoType: any) {
        if (!text) {
            return null;
        }
        const object = JSON.parse(text);
        object.__proto__ = protoType;

        // return Object.assign(JSON.parse(text),newInstanceOfObject);
        return object;
    }

    export function  cast(object : any, protoType : any) {
        if (!object) {
            return object;
        }
        if (typeof object === 'string') {
            object = JSON.parse(object);
        }
        object.__proto__ = protoType;
        return object;
    }

    export function  castArrayChilds(list : ArrayList<any>, protoType : any) : ArrayList<any> {
        if (!list) {
            return list;
        }
        list = this.cast(list, ArrayList.prototype);
        for (const child of list) {
            child.__proto__ = protoType;
        }
        return list;
    }

    export function  castHashmapChilds(map : HashMap<any, any>, protoType : any) : HashMap<any, any> {
        if (!map) {
            return map;
        }
        map = this.cast(map, HashMap.prototype);
        for (const child of map.values()) {
            child.__proto__ = protoType;
        }
        return map;
    }
