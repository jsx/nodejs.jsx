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
