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

import "nodejs/nodejs.jsx";
import "nodejs/events.jsx";
import "nodejs/stream.jsx";

native class http {
	static function createServer(
		requestListener : function(:ServerRequest,:ServerResponse):void
	) : HTTPServer;

	static function request(url : string, callback : function(:ClientResponse):void) : ClientRequest;
	static function request(options : Map.<variant>, callback : function(:ClientResponse):void) : ClientRequest;
	static function get(url : string, callback : function(:ClientResponse):void) : ClientRequest;
} = "require('http')";

native __fake__ class HTTPServer {
	function listen(port : int) : void;

  // event : "request", "checkContinue"
	function on(event : string, callback : function(:ServerRequest, :ServerResponse):void) : void;
  // event : "close"
	function on(event : string, callback : function():void) : void;

	function close() : void;
}

native __fake__ class ServerRequest extends Readable {
	__readonly__ var method           : string;
	__readonly__ var url              : string;
	__readonly__ var headers          : Map.<string>;
	__readonly__ var trailers         : Map.<string>;
	__readonly__ var httpVersion      : string;
	__readonly__ var httpVersionMajor : int;
	__readonly__ var httpVersionMinor : int;
}

native __fake__ class ServerResponse extends EventEmitter {
	function writeHead(status : int, headers : Map.<string>) : void;
	function writeHead(status : int, responsePhrase : string, headers : Map.<string>) : void;
	function write(content : string) : boolean;
	function write(content : string, encoding : string) : boolean;
	function write(content : Buffer) : boolean;
	function end() : boolean;
	function end(data : string, encoding : string) : boolean;
	function end(data : Buffer) : boolean;
}

native class ClientRequest extends EventEmitter {
	// copied from writable
	function write(chunk : variant) : boolean;
	function write(chunk : variant, encoding : string) : boolean;
	function write(chunk : variant, encoding : string, callback : (Error) -> void) : boolean;
	function end() : void;
	function end(chunk : variant) : void;
	function end(chunk : variant, encoding : string) : void;
	function end(chunk : variant, encoding : string, callback : (Error) -> void) : void;
	function _write(chunk : variant, encoding : string, callback : (Error) -> void) : boolean;
}

native __fake__ class ClientResponse extends Readable {
	__readonly__ var statusCode       : int;
	__readonly__ var headers          : Map.<string>;
	__readonly__ var trailers         : Map.<string>;
	__readonly__ var httpVersion      : string;
	__readonly__ var httpVersionMajor : int;
	__readonly__ var httpVersionMinor : int;
}

native __fake__ class _https {
	// TODO
}

