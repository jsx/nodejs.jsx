nodejs.jsx - node.js binding for JSX
====================================

Usage
-----

```
$ cat > package.json
{
  "dependencies": {
    "nodejs.jsx": "~ 0.1.1"
  }
}
^D
$ npm install
$ cat > myapp.jsx
import "nodejs.jsx/*.jsx";

class _Main {
    static main(args : string[]) : void {
        log "hello node.js!";
    }
}
^D
$ jsx myapp.jsx
```

Notes to Committers
-------------------

Please feel free to contact Kazuho if you are still not sure how you should add bindings after reading the rules below.

- file layout should be the same as node.js
  - e.g. definitions in the ```fs``` module should be bound to ```nodejs/fs.jsx```
- preloaded globals should go into ```nodejs.jsx```
  - e.g. the ```process``` and ```module``` objects
- inheritance at the binding level should reflect those of the node.js implementation
-- e.g. ```stream.Writable``` is a sub-class of ```stream.Readable``` (not ```stream.Writable```)
