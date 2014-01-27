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

import "./events.jsx";
import "timer.jsx";

native class domain {
	static function create() : Domain;
} = "require('domain')";

native class Domain extends EventEmitter {
	__readonly__ var members : Array.<variant>;
  function run(callback : ()->void) : void;
  function add(emitter : EventEmitter) : void;
  function add(timer : TimerHandle) : void;
  
  function remove(emitter : EventEmitter) : void;
  function remove(timer : TimerHandle) : void;

  function bind(callback : (Error)->void) : (Error)->void;
  function bind(callback : (Error, variant)->void) : (Error, variant)->void;
  function bind(callback : (Error, variant, variant)->void) : (Error, variant, variant)->void;

  function intercept(callback : ()->void) : (Error)->void;
  function intercept(callback : (variant)->void) : (Error, variant)->void;
  function intercept(callback : (variant, variant)->void) : (Error, variant, variant)->void;

}

