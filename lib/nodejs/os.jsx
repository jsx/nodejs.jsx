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

native class os {
	static function tmpDir() : string;
	static function hostname() : string;
	static function type() : string;
	static function platform() : string;
	static function arch() : string;
	static function release() : string;
	static function uptime() : number;
	static function loadavg() : number[];
	static function totalmem() : number;
	static function freemem() : number;
	static function cpus() : _CPUInfo[];
	static function networkInterfaces() : Map.<_IFInfo[]>;
	static __readonly__ var EOL : string;
} = "require('os')";

native __fake__ class _CPUInfo {
	__readonly__ var model : string;
	__readonly__ var speed : number;
	__readonly__ var times : _TimesInfo[];
}

native __fake__ class _TimesInfo {
	__readonly__ var user : number;
	__readonly__ var nice : number;
	__readonly__ var sys  : number;
	__readonly__ var idle : number;
	__readonly__ var irq  : number;
}

native __fake__ class _IFInfo {
	__readonly__ var address  : string;
	__readonly__ var family   : string;
	__readonly__ var internal : boolean;
}
