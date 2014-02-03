import "test-case.jsx";
import "nodejs.jsx/ext/mysql.jsx";

class _Test extends TestCase {

	function testConnection() : void {
		this.async(function (async) {
			var conn = mysql.createConnection({ host: "localhost", user: "root", database: "test" });
			// connect
			conn.connect(function (err) {
				this.expect(err).toBe(null);

				// select 1 as k
				conn.query("select 1 as k", function (err, rows, fields) {
					this.expect(err).toBe(null);
					this.expect(rows.length).toBe(1);
					this.expect(rows[0]["k"]).toBe(1);

					// create temporary table
					conn.query("create temporary table t (id int unsigned not null primary key auto_increment,value varchar(255) not null)", function (err, fields) {
						this.expect(err).toBe(null);

						// insert into table
						conn.query("insert into t (value) values (?)", ["abc"] : variant[], function (err, fields) {
							this.expect(err).toBe(null);
							this.expect(fields["insertId"]).toBe(1);

							// insert another row into table
							conn.query("insert into t (value) values (?)", ["xyz"] : variant[], function (err, fields) {
								this.expect(err).toBe(null);
								this.expect(fields["insertId"]).toBe(2);

								// select * from t
								conn.query("select * from t", function (err, rows, fields) {
									this.expect(err).toBe(null);
									this.expect(rows.length).toBe(2);
									this.expect(rows[0]["id"]).toBe(1);
									this.expect(rows[0]["value"]).toBe("abc");
									this.expect(rows[1]["id"]).toBe(2);
									this.expect(rows[1]["value"]).toBe("xyz");
									
									conn.end(function (err) {
										this.expect(err).toBe(null);
										async.done();

									});
								});
							});
						});
					});
				});
			});
		}, 10000);
	}

}
