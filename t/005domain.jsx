import "test-case.jsx";
import "timer.jsx";
import "nodejs.jsx/domain.jsx";
import "nodejs.jsx/nodejs.jsx";
import "nodejs.jsx/fs.jsx";
import "nodejs.jsx/http.jsx";
import "nodejs.jsx/events.jsx";

class _TestAsync extends EventEmitter {
  function alwaysError(arg : string) : void {
    throw new Error("Always error " + arg);
  }
  function alwaysAsyncError(arg : string, callback : (Error, variant)->void) : void {
    process.nextTick(function() {
      try {
        this.alwaysError(arg);
        callback(null, "success");
      } catch (err : Error) {
        callback(err, "failed");
      }
    });
  }
}

class _Test extends TestCase {
	function testRun() : void {
		this.async((async) -> {
      var d = domain.create();
      d.on("error", function(err) {
        var error = err as Error;
        this.expect(error.message).toBe("getaddrinfo ENOTFOUND");
        async.done();
      });
      d.run(function() {
        var req = http.get("http://www.unreachable----------host.com/", function (res) {
          this.expect("should not be reached here.").toBe(null);
        });
        req.end();
      });
		}, 10000);
	}
	function testAdd() : void {
		this.async((async) -> {
      var d = domain.create();
      var timer = Timer.setTimeout(()->{
        throw new Error("abc");
      },100);
      d.add(timer);
      d.on("error", function(err) {
        var error = err as Error;
        this.expect(error.message).toBe("abc");
        log "done";
        async.done();
      });

		}, 10000);
	}
	function testBind() : void {
		this.async((async) -> {
      var d = domain.create();
      d.on("error", function(err) {
        var error = err as Error;
        this.expect(error.message).toBe("Always error bind");
        async.done();
      });
      var alwaysError = new _TestAsync();
      alwaysError.alwaysAsyncError("bind", d.bind((err, data) -> {
        throw err;
      }));
		}, 10000);
	}
	function testIntercept() : void {
		this.async((async) -> {
      var d = domain.create();
      d.on("error", function(err) {
        var error = err as Error;
        this.expect(error.message).toBe("Always error intercept");
        async.done();
      });
      var alwaysError = new _TestAsync();
      alwaysError.alwaysAsyncError("intercept", d.intercept((data) -> {
        //noop
      }));
		}, 10000);
	}
}
