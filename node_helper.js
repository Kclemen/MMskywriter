'use strict';
const NodeHelper = require('node_helper');

const PythonShell = require('python-shell');
var pythonStarted = false

module.exports = NodeHelper.create({
  
	python_start: function () {
		const self = this;
		const pyshell = new PythonShell('modules/' + this.name + '/skywriter/magicmirror_skywriter.py', { mode: 'json', args: [JSON.stringify(this.config)]});

		pyshell.on('message', function (message) {
      
			if (message.hasOwnProperty('status')){
			console.log("[" + self.name + "] " + message.status);
			}
			
			if (message.hasOwnProperty('gesture')){
			console.log("[" + self.name + "] " + "gesture ");
			self.sendSocketNotification('gesture');
			}
		}
	}
}
