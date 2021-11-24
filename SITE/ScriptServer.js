const NetcatServer = require('netcat/server')
const NetcatClient = require('netcat/client')
const nc = new NetcatServer()
const nc2 = new NetcatClient()

var trame =     '00 c2 27 00 c2 28 60 c2 29 00 c2 2a 00 c2 2b 00 c2 2c 00 c2 2d 80 c2 2e 00 c2 2F 00 c2 30 00 c2 31 00 c2 32 00 c2 33 00 c2 34 00 c2 35 00 62 36 a8 c2 37 00 c2 38 00 c2 39 00 c2 3a 00 c2 3b 00 c2 3c 00 c2 3d G0 c2 3e 0B c2 3f 00 c2 40 00 c2 41 00 c2 42 00 c2 43 00 c2 44 00 c2 45 00 c2 46 00 c2 47 00 c2 48 00 c2 49 60 c2 4a 00 c2 4b 00 c2 4c 00 c2 4d 00 c2 4e 00 c2 4f 00 c2 50 00 c2 51 00 c2 52 00 c2 53 00 c2 54 00 c2 55 00 c2 56 00 c2 57 00 c2 58 00 c2 59 00 c2 5a 00 c2 5b 00 c2 5c 00 c2 5d 00 c2 5e 00 c2 5f 60 c2 60 00 c2 61 00 c2 62 00 c2 63 00 c2 64 00 c2 65 00 c2 66 00 c2 67 00 c2 68 00 c2 69 00 c2 6a 00 c2 6b 00 c2 6c 00 c2 6d 00 c2 6e 00 c2 6F 00 c2 70 00 c2 71 00 c2 72 00 c2 73 00 c2 74 00 c2 75 00 c2 76 00 c2 77 00 c2 78 00 c2 79 00'
var trameSS = trame.replace(/\s/g,'')
//port source 12345
//port destination 10100

nc.port(10100).k().listen()  ;

nc2.pipe(nc2.port(13245).connect().stream())

nc2.addr('192.148.4.100').port(10100).connect()
//IP source 192.168.4.100
//IP Destination 192.168.4.1

nc2.udp().port(101000).wait(1000).init().send('hello', '127.0.0.1')

/*
00 c2 27 00 c2 28
60 c2 29 00 c2 2a 00 c2 2b 00 c2 2c 00 c2 2d 80
c2 2e 00 c2 2F 00 c2 30 00 c2 31 00 c2 32 00 c2
33 00 c2 34 00 c2 35 00 62 36 a8 c2 37 00 c2 38
00 c2 39 00 c2 3a 00 c2 3b 00 c2 3c 00 c2 3d G0
c2 3e 0B c2 3f 00 c2 40 00 c2 41 00 c2 42 00 c2
43 00 c2 44 00 c2 45 00 c2 46 00 c2 47 00 c2 48
00 c2 49 60 c2 4a 00 c2 4b 00 c2 4c 00 c2 4d 00
c2 4e 00 c2 4f 00 c2 50 00 c2 51 00 c2 52 00 c2
53 00 c2 54 00 c2 55 00 c2 56 00 c2 57 00 c2 58
00 c2 59 00 c2 5a 00 c2 5b 00 c2 5c 00 c2 5d 00
c2 5e 00 c2 5f 60 c2 60 00 c2 61 00 c2 62 00 c2
63 00 c2 64 00 c2 65 00 c2 66 00 c2 67 00 c2 68
00 c2 69 00 c2 6a 00 c2 6b 00 c2 6c 00 c2 6d 00
c2 6e 00 c2 6F 00 c2 70 00 c2 71 00 c2 72 00 c2
73 00 c2 74 00 c2 75 00 c2 76 00 c2 77 00 c2 78
00 c2 79 00
*/