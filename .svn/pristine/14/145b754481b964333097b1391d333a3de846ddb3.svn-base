/***
DOMminator
- Returns an array of React elements from an object and their references

```
let example = {
key: ['type', value]
}

let result = DOMinator.dominate(example)
```

img  : <img class='d-img d-{key}'  src={value} ref={key}/>
bg   : <img class='d-img d-background d-{key}'  src={value} ref={key}/>
text : <div class='d-text d-{key}' ref={key}>{value}</div>
***/

import { Component } from 'react'
let R = React.createElement // Render Element
let ref = {}; // Children lookup

export class DOMinator
{
    static dominate = (elements) =>
    {
        let children = []
        for (let [key, obj] of Object.entries(elements))
        {
            let type = obj[0]
            let value = obj[1]

            // Condensed Switch for rendering children based on type
            let typeSwitch = (type) => ({
                // Images
                img: R('img',
                {
                className: 'd-img dn-' + key,
                key:key, src:value,
                ref: (n) => ref[key] = n
                }),

                // Background
                bg: R('img',
                {
                className: 'd-img d-bg dn-' + key,
                key:key, src:value,
                ref: (n) => ref[key] = n
                }),

                // Basic Text Elements
                text: R('div',
                {
                className: 'd-text dn-' + key,
                key:key,
                ref: (n) => ref[key] = n
                }, value),
            })[type]

            let el = typeSwitch(type)
            children.push(el)
        }
        return {
            result: children,
            references: ref
        };
    }
}
