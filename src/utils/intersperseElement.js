import forEach from "lodash/forEach";
import React from "react";

export default function intersperseElements(Wedge, elements) {
    const ret = [];
    forEach(elements, element => {
        ret.push(element, <Wedge key={`wedge-after-${element.key}`} />);
    });
    return ret.slice(0, -1);
}
