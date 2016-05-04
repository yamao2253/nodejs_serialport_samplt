var serialport = require('serialport');

// - [ ] portNameは環境に合わせて修正するべし
var portName = "/dev/cu.usbmodem141321";
var sp = new serialport.SerialPort(portName, {
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false,
  parser: serialport.parsers.readline("\n")
});

sp.on('data', function(input) {
  var buffer = new Buffer(input, 'utf8');

  console.log(buffer.toString());
});
