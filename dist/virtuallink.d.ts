/**
* Copyright (c) 2016-present, IBM Research
* Licensed under The MIT License [see LICENSE for details]
*/
import Link from "./link";
export = VirtualLink;
declare class VirtualLink extends Link {
    constructor(id: any, parent?: string);
    static isValid(entity: VirtualLink): boolean;
}
