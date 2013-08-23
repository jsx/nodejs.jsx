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

import "events.jsx";

native class Readable extends EventEmitter {
	function constructor();
	function constructor(options : Map.<variant>);
	function read() : variant; // returns string|Buffer|null or other types if in object mode
	function read(size : number) : variant;
	function setEncoding(encoding : string) : void;
	function resume() : void;
	function pause() : void;
	function pipe(destination : variant) : void;
	function pipe(destination : variant, options : Map.<variant>) : void;
	function unpipe() : void;
	function unpipe(destination : variant) : void;
	function unshift(chunk : variant) : void;
	function wrap(stream : Readable) : void;
	function _read(size : number) : void;
	function push(chunk : variant, encoding : string) : boolean;
} = "require('stream').Readable";

native class Writable extends EventEmitter {
	function constructor();
	function constructor(options : Map.<variant>);
	function write(chunk : variant) : boolean;
	function write(chunk : variant, encoding : string) : boolean;
	function write(chunk : variant, encoding : string, callback : (Error) -> void) : boolean;
	function end() : void;
	function end(chunk : variant) : void;
	function end(chunk : variant, encoding : string) : void;
	function end(chunk : variant, encoding : string, callback : (Error) -> void) : void;
	function _write(chunk : variant, encoding : string, callback : (Error) -> void) : boolean;
} = "require('stream').Writable";

// looking at the implementation, this is the way
native class Duplex extends Readable {
	function constructor();
	function constructor(options : Map.<variant>);
	// copied from writable
	function write(chunk : variant) : boolean;
	function write(chunk : variant, encoding : string) : boolean;
	function write(chunk : variant, encoding : string, callback : (Error) -> void) : boolean;
	function end() : void;
	function end(chunk : variant) : void;
	function end(chunk : variant, encoding : string) : void;
	function end(chunk : variant, encoding : string, callback : (Error) -> void) : void;
	function _write(chunk : variant, encoding : string, callback : (Error) -> void) : boolean;
} = "require('stream').Duplex";
