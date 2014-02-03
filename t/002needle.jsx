import "test-case.jsx";
import "nodejs.jsx/ext/needle.jsx";

class _Test extends TestCase {

	function testGet() : void {
		this.async((async) -> {
			needle.get("http://www.w3.org/", function (error, response, data) {
				if (error) {
					log error;
				} else {
					this.expect(response.statusCode).toBe(200);
					//log data;
				}
				async.done();
			});
		}, 10000);
	}

	function testPost() : void {
		this.async((async) -> {
			needle.post("http://www.google.com/search", "q=test", function (error, response, data) {
				if (error) {
					log error;
				} else {
					this.expect(response.statusCode).toBe(405);
					//log data;
				}
				async.done();
			});
		}, 10000);
	}

}
