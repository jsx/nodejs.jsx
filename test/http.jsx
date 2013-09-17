import "test-case.jsx";
import "nodejs/http.jsx";

class _Test extends TestCase {

	function testGet() : void {
		this.async((async) -> {
			var req = http.get("http://www.yahoo.com/", function (res) {
				this.expect(res.statusCode).toBe(200);
				var data = "";
				res.on("data", function (chunk) {
					data += chunk as string;
				});
				res.on("end", function () {
					async.done();
				});
			});
			req.end();
		}, 10000);
	}

}
