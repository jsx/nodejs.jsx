import "test-case.jsx";
import "nodejs.jsx/http.jsx";

class _Test extends TestCase {

	function testGet() : void {
		this.async((async) -> {
			var req = http.get("http://www.w3.org/", function (res) {
				this.expect(res.statusCode).toBe(200);
				res.setEncoding("utf8");
				var data = "";
				res.on("data", function (chunk) {
					data += chunk as string;
				});
				res.on("end", function () {
					//log data;
					async.done();
				});
			});
			req.end();
		}, 10000);
	}

	function testPost() : void {
		this.async((async) -> {
			var req = http.request({
				method: "POST",
				hostname: "www.google.com",
				port: 80,
				path: "/search",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}, function (res) {
				this.expect(res.statusCode).toBe(405);
				res.setEncoding("utf8");
				var data = "";
				res.on("data", function (chunk) {
					data += chunk as string;
				});
				res.on("end", function () {
					log data;
					async.done();
				});
			});
			req.write("q=test");
			req.end();
		}, 10000);
	}

}
