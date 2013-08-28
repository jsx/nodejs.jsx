/*
 * Copyright (c) Co., Ltd.
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

import "js.jsx";
import "tty.jsx";

native __fake__ class node {
	static const __dirname : string;
	static const __filename : string;
	static function require(name : string) : variant;

	delete function constructor() {}
} = "{ __dirname: __dirname, __filename: __filename, require: require }";

native class module {
	static __readonly__ var id : string;
	static __readonly__ var paths : string[];
}

/**
 * @see http://nodejs.org/api/process.html
 */
native class process {
	static var argv : string[];

	static __readonly__ var stdin  : ReadStream;
	static __readonly__ var stdout : WriteStream;
	static __readonly__ var stderr : WriteStream;

	static __readonly__ var execPath : string;
	static __readonly__ var env : Map.<string>;
	static __readonly__ var pid : int;
	static __readonly__ var arch : string;
	static __readonly__ var platform : string;
	static __readonly__ var version : string;
	static __readonly__ var versions : Map.<string>;
	static __readonly__ var title : string; // process name

	/*
	 * events:
	 *  drain:             (data:Buffer)
	 *  exit:              (exitStatus:number)
	 *  uncaughtException: (error:Error)
	 */
	static function on(event : string, listener : () -> void) : void;
	static function on(event : string, listener : (variant) -> void) : void;

	static function chdir(directory : string) : void;
	static function cwd() : string;
	static function exit() : void;
	static function exit(status : int) : void;

	static function getgid() : int;
	static function setgid(id : int) : void;
	static function getuid() : int;
	static function setuid(id : int) : void;

	static function kill(pid : int) : void;
	static function kill(pid : int, signal : string) : void;

	static function memoryUsage() : _MemoryUsage;

	static function nextTick(callback : function():void) : void;

	static function umask(mask : int) : int;
	static function uptime() : int;

	/**
	 * Returns the current high-resolution real time.
	 * @return [seconds, nanoseconds]
	 */
	static function hrtime() : number[];
	/**
	 * Returns the difference from previousTime in high-resolution real time.
	 *
	 * @param previousTime a result of a previous call to <code>process.hrtime()</code>.
	 * @return [seconds, nanoseconds]
	 */
	static function hrtime(previousTime : number[]) : number[];
}

native __fake__ class _MemoryUsage {
	__readonly__ var rss : number;
	__readonly__ var heapTotal : number;
	__readonly__ var heapUsed : number;
}

/**
 * Fixed-sized binary buffer, built in NodeJS.
 */
native class Buffer {
	static function byteLength(str : string, encoding : string) : number;
	static function concat(list : Buffer[]) : Buffer;
	static function concat(list : Buffer[], totalLength : number) : Buffer;

	__readonly__ var length : number;

	function constructor(size : number);
	function constructor(array : int[]);
	function constructor(array : number[]);
	function constructor(array : Uint8Array);
	function constructor(str : string, encoding : string);

	function write(str : string, offset : number, length : number, encoding : string) : number;

	function toString(encoding : string) : string;
	function toString(encoding : string, start : number) : string;
	function toString(encoding : string, start : number, end : number) : string;

	function copy(targetBuffer : Buffer) : void;
	function copy(targetBuffer : Buffer, targetStart : number) : void;
	function copy(targetBuffer : Buffer, targetStart : number, sourceStart : number) : void;
	function copy(targetBuffer : Buffer, targetStart : number, sourceStart : number, sourceEnd : number) : void;

	function slice(start : number) : Buffer;
	function slice(start : number , end : number) : Buffer;

	function readUInt8(offset : number) : number;
	function readUInt16LE(offset : number) : number;
	function readUInt16BE(offset : number) : number;
	function readUInt32LE(offset : number) : number;
	function readUInt32BE(offset : number) : number;
	function readInt8(offset : number) : number;
	function readInt16LE(offset : number) : number;
	function readInt16BE(offset : number) : number;
	function readInt32LE(offset : number) : number;
	function readInt32BE(offset : number) : number;
	function readFloatLE(offset : number) : number;
	function readFloatBE(offset : number) : number;
	function readDoubleLE(offset : number) : number;
	function readDoubleBE(offset : number) : number;

	function writeUInt8(value : number, offset : number) : void;
	function writeUInt16LE(value : number, offset : number) : void;
	function writeUInt16BE(value : number, offset : number) : void;
	function writeUInt32LE(value : number, offset : number) : void;
	function writeUInt32BE(value : number, offset : number) : void;
	function writeInt8(value : number, offset : number) : void;
	function writeInt16LE(value : number, offset : number) : void;
	function writeInt16BE(value : number, offset : number) : void;
	function writeInt32LE(value : number, offset : number) : void;
	function writeInt32BE(value : number, offset : number) : void;
	function writeFloatLE(value : number, offset : number) : void;
	function writeFloatBE(value : number, offset : number) : void;
	function writeDoubleLE(value : number, offset : number) : void;
	function writeDoubleBE(value : number, offset : number) : void;

	function fill(value : number) : void;
	function fill(value : number, offset : number) : void;
	function fill(value : number, offset : number, end : number) : void;
}

