/**
* Copyright (c) 2016-present, IBM Research
* Licensed under The MIT License [see LICENSE for details]
*/
import Node from "./node";
export = VirtualNode;
declare class VirtualNode extends Node {
    constructor(id: any, parent?: string);
    static isValid(entity: VirtualNode): boolean;
}
