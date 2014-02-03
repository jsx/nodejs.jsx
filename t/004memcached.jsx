import "test-case.jsx";
import "nodejs.jsx/ext/memcached.jsx";

class _Test extends TestCase {

	function testSetAndGet() : void {
    var memcached = new Memcached("localhost:11211");
    memcached.set('test:test_key', 'test_value', 10000, function (err) {
      this.expect(err).toBe(null);
      memcached.get('test:test_key', function (err, data) {
        this.expect(err).toBe(null);
        this.expect(data).toBe('test_value');
        memcached.del('test:test_key', function(err) { 
          this.expect(err).toBe(null);
          memcached.get('test:test_key', function (err, data) {
            this.expect(data).toBe(false);
          });
        });
      });
    });
	}
	function testGetsAndCas() : void {
    var memcached = new Memcached("localhost:11211");
    memcached.set('test:test_key_cas', 'test_value', 10000, function (err) {
      this.expect(err).toBe(null);
      memcached.gets('test:test_key_cas', function (err, data) {
        this.expect(err).toBe(null);
        this.expect(data['test:test_key_cas']).toBe('test_value');
        this.expect(data['cas'] as string).notToBe(null);
        memcached.cas('test:test_key_cas', 'test_value_cas', data['cas'] as string, 10000, function (err) {
          this.expect(err).toBe(null);
          memcached.get('test:test_key_cas', function (err, data) {
            this.expect(err).toBe(null);
            this.expect(data).toBe('test_value_cas');
            memcached.del('test:test_key_cas', function(err) { 
              this.expect(err).toBe(null);
              memcached.get('test:test_key_cas', function (err, data) {
                this.expect(data).toBe(false);
              });
            });
          });
        });
      });
    });
	}

}
