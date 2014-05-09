/*
 * Copyright (c)  DeNA Co., Ltd.
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

import "./nodejs.jsx";
import "./events.jsx";

/**
 * @see http://nodejs.org/api/fs.html
 */
native class fs {
	static function stat(path : string, callback : (Error, Stats) -> void) : void;
	static function statSync(path : string) : Stats;

	static function existsSync(path : string) : boolean;

	static function mkdir(path : string, callback : (Error) -> void) : void;
	static function mkdirSync(path : string) : void;
	static function mkdir(path : string, mode : string, callback : (Error) -> void) : void;
	static function mkdirSync(path : string, mode : string) : void;

	static function rmdir(path : string, callback : (Error) -> void) : void;
	static function rmdirSync(path : string) : void;

	static function readdir(path : string, callback : (Error, string[]) -> void) : void;
	static function readdirSync(path : string) : string[];

	static function unlink(path : string, callback : (Error) -> void) : void;
	static function unlinkSync(path : string) : void;

	static function chmod(path : string, mode : string, callback : (Error) -> void) : void;
	static function chmodSync(path : string, mode : string) : void;

	static function open(path : string, flags : string, callback : (Error, int) -> void) : void;
	static function openSync(path : string, flags : string) : int;
	static function open(path : string, flags : string, mode : int, callback : (Error, int) -> void) : void;
	static function openSync(path : string, flags : string, mode : int) : int;

	static function close(fd : int, callback : (Error) -> void) : void;
	static function closeSync(fd : int) : void;

	static function read(fd : int, buffer : Buffer, offset : int, length : int, position : int, callback : (Error, int, Buffer) -> void) : void;
	static function readSync(fd : int, buffer : Buffer, offset : int, length : int) : int;
	static function readSync(fd : int, buffer : Buffer, offset : int, length : int, position : int) : int;

	static function readFile(filename : string, callback : (Error, Buffer) -> void) : void;
	static function readFileSync(filename : string) : Buffer;
	static function readFile(filename : string, encoding : string, callback : (Error, string) -> void) : void;
	static function readFileSync(filename : string, encoding : string) : string;

	static function write(fd : int, buffer : Buffer, offset : int, length : int, callback : (Error, int, Buffer) -> void) : void;
	static function writeSync(fd : int, buffer : Buffer, offset : int, length : int) : int;
	static function write(fd : int, buffer : Buffer, offset : int, length : int, position : int, callback : (Error, int, Buffer) -> void) : void;
	static function writeSync(fd : int, buffer : Buffer, offset : int, length : int, position : int) : int;

	static function writeFile(filename : string, data : Buffer, callback : (Error) -> void) : void;
	static function writeFileSync(filename : string, data : Buffer) : void;
	static function writeFile(filename : string, data : string, callback : (Error) -> void) : void;
	static function writeFileSync(filename : string, data : string) : void;
	static function writeFile(filename : string, data : string, encoding : string, callback : (Error) -> void) : void;
	static function writeFileSync(filename : string, data : string, encoding : string) : void;

	static function appendFile(filename : string, data : Buffer, callback : (Error) -> void) : void;
	static function appendFileSync(filename : string, data : Buffer) : void;
	static function appendFile(filename : string, data : string, callback : (Error) -> void) : void;
	static function appendFileSync(filename : string, data : string) : void;
	static function appendFile(filename : string, data : string, encoding : string, callback : (Error) -> void) : void;
	static function appendFileSync(filename : string, data : string, encoding : string) : void;

	static function watch(filename : string, listener : function(event:string,filename:Nullable.<string>):void) : FSWatcher;
	static function watch(filename : string, options : Map.<variant>, listener : function(event:string,filename:Nullable.<string>):void) : FSWatcher;
} = "require('fs')";

native __fake__ class Stats {
	function isFile() : boolean;
	function isDirectory() : boolean;
	function isBlockDevice() : boolean;
	function isCharacterDevice() : boolean;
	function isSymbolicLink() : boolean;
	function isFIFO() : boolean;
	function isSocket() : boolean;
}

native __fake__ class FSWatcher extends EventEmitter {
	function close() : void;
}
