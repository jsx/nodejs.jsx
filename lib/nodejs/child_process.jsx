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
import "tty.jsx";

/*
 * @see http://nodejs.org/api/child_process.html
 */
native class child_process {
	/**
	 * <p>Launches a new process with the given <code>command</code>,
	 * with command line arguments in <code>args</code>.</p>
	 *
	 * <p>options:</p>
	 * <ul>
	 *   <li>cwd : string</li>
	 *   <li>stdio : variant[] where each index corresponds to a fd in the child with values "pipe", "ic", "ignore", Stream object, positive int, null</li>
	 *   <li>env : Map.<string></li>
	 *   <li>detached : boolean</li>
	 *   <li>uid : int</li>
	 *   <li>gid : int</li>
	 * </ul>
	 */
	function spawn(command : string, args : string[], options : Map.<variant>) : ChildProcess;
	function spawn(command : string, args : string[]) : ChildProcess;

	/**
	 * <p>Runs a command in a shell and bufferes the output.</p>
	 *
	 * <p>options:</p>
	 * <ul>
	 *   <li>cwd : string</li>
	 *   <li>stdio : variant[] where each index corresponds to a fd in the child with values "pipe", "ic", "ignore", Stream object, positive int, null</li>
	 *   <li>env : Map.<string></li>
	 *   <li>encoding : string (default: "utf8")</li>
	 *   <li>timeout : int (default: 0 [ms])</li>
	 *   <li>maxBuffer : int (default: 200*1024)</li>
	 *   <li>killSignal : string (default: "SIGTERM")</li>
	 * </ul>
	 */
	function exec(command : string, options : Map.<variant>, callback : (Error, Buffer, Buffer) -> void) : ChildProcess;
	function exec(command : string, callback : (Error, Buffer, Buffer) -> void) : ChildProcess;

	/**
	 * <p>Similar to <code>exec()</code> exept it does not execute a subshell
	 * but rather the specified file directly. It has the same options as <code>exec().</code></p>
	 *
	 * <p>options:</p>
	 * <ul>
	 *   <li>cwd : string</li>
	 *   <li>stdio : variant[] where each index corresponds to a fd in the child with values "pipe", "ic", "ignore", Stream object, positive int, null</li>
	 *   <li>env : Map.<string></li>
	 *   <li>encoding : string (default: "utf8")</li>
	 *   <li>timeout : int (default: 0 [ms])</li>
	 *   <li>maxBuffer : int (default: 200*1024)</li>
	 *   <li>killSignal : string (default: "SIGTERM")</li>
	 * </ul>
	 */
	function execFile(file : string, args : string[], options : Map.<variant>, callback : (Error, Buffer, Buffer) -> void) : ChildProcess;
	function execFile(file : string, args : string[], callback : (Error, Buffer, Buffer) -> void) : ChildProcess;

	//function fork(modulePath : string, args : string[], options : Map.<variant>) : ChildProcess; // NodeJS specific
} = "require('child_process')";

native __fake__ class ChildProcess extends EventEmitter {
	__readonly__ var stdin : WriteStream;
	__readonly__ var stdout : ReadStream;
	__readonly__ var stderr : ReadStream;

	__readonly__ var pid : int;

	delete function constructor();

	function kill() : boolean;
	function kill(signal : string) : boolean;
}
