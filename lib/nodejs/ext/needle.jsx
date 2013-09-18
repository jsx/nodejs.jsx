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

native class needle {

	static function get(url : string, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;
	static function get(url : string, options: Map.<variant>, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;
	static function head(url : string, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;
	static function head(url : string, options: Map.<variant>, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;
	static function post(url : string, data : variant, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;
	static function post(url : string, data : variant, options: Map.<variant>, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;
	static function put(url : string, data : variant, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;
	static function put(url : string, data : variant, options: Map.<variant>, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;

	static function request(method : string, url : string, data : variant, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;
	static function request(method : string, url : string, data : variant, options: Map.<variant>, callback : function (: Nullable.<string>, : _NeedleResponse, : string) : void) : void;

} = "require('needle')";

native __fake__ class _NeedleResponse {
	var statusCode : number;
	var headers : Map.<string>;
}
