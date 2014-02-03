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

native class Memcached {

		function constructor(host : string);

		function constructor(hosts : Array.<string>);
    
		function constructor(host : Map.<variant>);
    
		function constructor(host : string, option : Map.<variant>);

		function constructor(hosts : Array.<string>, option : Map.<variant>);
    
		function constructor(host : Map.<variant>, option : Map.<variant>);

		function touch(key : string, lifetime : number, cb : function(err : Error) : void) : void;

		function get(key : string, cb : function(err : Error, data : Map.<variant>) : void) : void;
    
		function gets(key : string, cb : function(err : Error, data : Map.<variant>) : void) : void;

		function getMulti(keys : Array.<string>, cb : function(err : Error, data : Map.<variant>) : void) : void;

		function set(key : string, value : variant, lifetime : number, cb : function(err : Error) : void) : void;
    
		function replace(key : string, value : variant, lifetime : number, cb : function(err : Error) : void) : void;

		function add(key : string, value : variant, lifetime : number, cb : function(err : Error) : void) : void;

		function cas(key : string, value : variant, cas : string, lifetime : number, cb : function(err : Error) : void) : void;

		function append(key : string, value : variant, lifetime : number, cb : function(err : Error) : void) : void;

		function del(key : string, cb : function(err : Error) : void) : void;

		function flush(cb : function(err : Error) : void) : void;

		function end() : void;

} = "require('memcached')";

