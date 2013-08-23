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

import "nodejs.jsx";
import "events.jsx";

native class http {
	function createServer(
		requestListener : function(:ServerRequest,:ServerResponse):void
	) : HTTPServer;

	function get(url : string, callback : function(:ClientResponse):void) : ClientRequest;
} = "require('http')";

native __fake__ class HTTPServer {
	function listen(port : int) : void;

	function close() : void;
}

native __fake__ class ServerRequest extends EventEmitter {
	__readonly__ var method          : string;
	__readonly__ var url             : string;
	__readonly__ var headers         : Map.<string>;
	__readonly__ var trailers        : Map.<string>;
	__readonly__ var httpVersin      : string;
	__readonly__ var httpVersinMajor : int;
	__readonly__ var httpVersinMinor : int;

	function setEncoding(encoding : string) : void;
}

native __fake__ class ServerResponse extends EventEmitter {
	function writeHead(status : int, headers : Map.<string>) : void;
	function writeHead(status : int, responsePhrase : string, headers : Map.<string>) : void;
	function write(content : string, encoding : string) : boolean;
	function write(content : Buffer) : boolean;
	function end() : boolean;
	function end(data : string, encoding : string) : boolean;
	function end(data : Buffer) : boolean;
}

native __fake__ class ClientRequest extends EventEmitter {
}
native __fake__ class ClientResponse extends EventEmitter {
	__readonly__ var statusCode      : int;
	__readonly__ var headers         : Map.<string>;
	__readonly__ var trailers        : Map.<string>;
	__readonly__ var httpVersin      : string;
	__readonly__ var httpVersinMajor : int;
	__readonly__ var httpVersinMinor : int;
}

native __fake__ class _https {
	// TODO
}

