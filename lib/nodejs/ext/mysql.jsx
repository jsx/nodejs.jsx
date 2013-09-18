/*
 * Copyright (c) DeNA Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import "nodejs/events.jsx";

native class mysql {

	class Connection extends EventEmitter {

		delete function constructor();

		function connect() : void;

		function connect(cb : function (err : Error) : void) : void;

		function query(query : string, cb : function (err : Error, rows : Array.<Map.<variant>>, fields : Map.<variant>) : void) : void;

		function query(format : string, args : Array.<variant>, cb : function (err : Error, rows : Array.<Map.<variant>>, fields : Map.<variant>) : void) : void;

		function query(query : string, cb : function (err : Error, fields : Map.<variant>) : void) : void;

		function query(format : string, args : Array.<variant>, cb : function (err : Error, fields : Map.<variant>) : void) : void;

		function end(cb : function (err : Error) : void) : void;

		function destroy() : void;

		function release() : void;

		function changeUser(userInfo : Map.<variant>, cb : function (err : Error) : void) : void;

		function escape(value : variant) : string;

		function escapeId(sorter : string) : string;

	}

	class Pool extends EventEmitter {

		delete function constructor();

		function getConnection(cb : function (err : Error, conn : mysql.Connection) : void) : void;

	}

	delete function constructor();

	static function createConnection(opts : variant) : mysql.Connection;

	static function createPool(opts : Map.<variant>) : mysql.Pool;

} = "require('mysql')";
