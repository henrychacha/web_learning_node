//events事件触发器模块：用户自己注册并触发事件

const eventsEmiter = require('events');
const events = new eventsEmiter();

//注册事件： events.on('事件名',回调函数);
//          events.once('事件名',回调函数);  //只能触发一次

//触发事件： events.emit('事件名');

events.on('cctv1', () => {
    console.log('cctv1...');
});

function mydemo() {
    setTimeout(() => {
        console.log('Hello web');
    }, 2000);
}

events.on('tv', mydemo);

events.once('tv13', () => {
    console.log('cctv13...');
});


//触发事件：
events.emit('cctv1');
events.emit('cctv1');
events.emit('cctv1');

events.emit('tv');

events.emit('tv13');
events.emit('tv13');