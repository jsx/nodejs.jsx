nodejs.jsx - node.js binding for JSX
====================================

Usage
-----

```
$ cat > myapp.jsx
import "nodejs/*.jsx";

class _Main {
    static main(args : string[]) : void {
        log "hello node.js!";
    }
}
^D
$ jsx --include-path <path-of-nodejs.jsx>/lib myapp.jsx
```

Notes to Committers
-------------------

- file layout should be the same as node.js
  - e.g. definitions in the ```fs``` module are bound in ```nodejs/fs.jsx```
- preloaded globals should go into ```nodejs.jsx```
  - e.g. the ```process``` and ```module``` objects
- inheritance at the binding level should be the reflection of the node.js implementation
-- e.g. ```stream.Writable``` is a sub-class of ```stream.Readable``` (not ```stream.Writable```)

Please feel free to contact Kazuho if you are still not sure how you should add bindings after reading the rules above.
