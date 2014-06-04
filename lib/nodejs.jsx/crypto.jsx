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

import "./nodejs.jsx";
import "./stream.jsx";

native __fake__ class crypto {

	static function getCiphers() : string[];

	static function getHashes() : string[];

	static function createHash(algorithm : string) : Hash;
	static function createHmac(algorithm : string, key : string) : Hmac;
	static function createHmac(algorithm : string, key : Buffer) : Hmac;

	static function randomBytes(size : number) : Buffer;
	static function randomBytes(size : number, callback : function (ex : variant, buf : Buffer) : void) : void;

	static function pseudoRandomBytes(size : number) : Buffer;
	static function pseudoRandomBytes(size : number, callback : function (ex : variant, buf : Buffer) : void) : void;

} = "require('crypto')";

native class Hash extends Duplex {
	function update(data : variant) : void;
	function update(data : variant, input_encoding : string) : void;
	function digest() : Buffer;
	function digest(encoding : string) : variant;
}

native class Hmac extends Duplex {
	function update(data : variant) : void;
	function update(data : variant, input_encoding : string) : void;
	function digest() : Buffer;
	function digest(encoding : string) : variant;
}
