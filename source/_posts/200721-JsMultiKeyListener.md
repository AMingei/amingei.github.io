---
title: 基于JavaScript的多按键检测
date: 2021-07-21 18:34:50
tags:
---
基于JavaScript的多按键检测
```
(੭ ᐕ)੭ 阿巴阿巴。。。

源于某 有生之年 前端小游戏开发途中遇到的坑，
查了些资料发现这是大佬们懒得整的 简单 问题，
对于小菜鸡（菜鸡本菜）来说还是记录一下开发过程的好，
遂 出现了这篇笔记。
```
# 关于成品
```javascript
setKeyListener()
keyDown(key, callback_1, callback_2)
```
| 参数 | 必需 | 格式 | 描述 |
| - | - | - | - |
| key | true | Int or Array | 指定按键的keyCode或keyCode数组 |
| callback_1 | true | function(event) | keyDown响应函数 |
| callback_2 | false | function(event) | keyUp响应函数 |
# 关于源码
## 提要
对于原生的```addEventListener('keydown', listener, options)```，只能监听单一按键，实现多按键通常有两个思路：
- 记录每次 keydown/keyup 信息，每次触发 keydown 时判断是否有按键已经按下，执行相应动作
- 记录每次 keydown/keyup 信息，设置循环，循环触发相应动作

ps：以下代码依照前者实现
## 代码
### 初始化
```javascript
class Key {
    constructor(keyCode) {
        this.keyCode = keyCode;
        this.isDown = false;
        this.keyGroup = [];
        // 存储关联按键组合
        // 格式[{[keyCode1, keyCode2, ...], function(){}}, {}, ...]
        this.callback_1 = function() {};
        this.callback_2 = function() {};
    }
    keyDown() {
        this.callback_1();
    }
    keyUp() {
        this.callback_2();
    }
}
```
```javascript
var keys = [],          // 记录已绑定事件的按键，数组元素为 Key，数组序号同 keyCode
    remainKeys = [],    // 记录 keyup 后剩余的按键
    lastKey;            // 记录 latest keydown
```
```javascript
// 设置按键监听器
export function setKeyListener() {

    addEventListener('keydown', function(event) {

        var val = event.keyCode;

        // 判断该按键是否绑定事件
        if(keys[val] === undefined)
            return;

        keys[val].isDown = true;
        lastKey = keys[val];
        var tempKey = keys[val];
        // 多按键检测
        mutiKeyJudge(tempKey, val);
    })

    addEventListener('keyup', function(event) {
        var val = event.keyCode;

        if(keys[val] === undefined)
            return;

        keys[val].isDown = false;
        keys[val].keyUp();

        var flag = 0;

        // 每次有按键松开，更新剩余未松开按键
        for(var i of keys) {
            if(i != undefined && i.isDown) {
                flag++;
                remainKeys.push(i);
            }
        }

        // 所有按键松开后，清空数组
        if(flag == 0 || val != lastKey.keyCode) 
            remainKeys = [];
    })

    // 循环执行循环
    setInterval(keyDownAuto, 30);
}
```
### 关于循环执行
对于```addEventListener()```如果在每次 keydown 时判断要执行的动作，则后触发的事件会覆盖之前的事件。  
面对同时多按键 keydown 的情况，  
若 1st/2nd/... key keyup， keydown 监听器依旧被 latest key 触发，根据 remainKeys 的变化匹配触发的动作，正常运行；  
若 latest key keyup， 由于先前按键的触发事件被 latest key 覆盖， latest key keyup 后， keydown 监听器结束运行，先前按键尽管处于 keydown 状态，但无法被监听。此时借助循环模拟执行按压动作。
```javascript
function keyDownAuto() {
    // 判断单一/多按键
    if(remainKeys.length == 1) {
        remainKeys[0].keyDown();
    } else if(remainKeys.length > 1) {
        mutiKeyJudge(remainKeys[0], remainKeys[0].keyCode)
    }
}
```
### 关于多按键判断
```javascript
function mutiKeyJudge(tempKey, val) {
    var tempKeyGroup = JSON.parse(JSON.stringify(tempKey.keyGroup));
        // 不严谨
            // console.log(tempKeyGroup)
            // console.log(tempKey.keyGroup[0].callback)
    // Record for Muti-key-pressed status
    var flag = 0;
    for(var i of keys) {
        if(i != undefined && i.isDown && i.keyCode != val) {
            flag = 1;
            for(var j of tempKeyGroup) {
                var group = j.groupCode;
                if(group.findIndex(item => item === i.keyCode) != -1) {
                    group.splice(group.findIndex(item => item === i.keyCode), 1);
                }
            }
        }
    }
    if(flag == 0) {
        tempKey.keyDown();
    } else {
        for(var i in tempKeyGroup) {
            if(tempKeyGroup[i].groupCode.toString() == [val].toString()) {
                // console.log(tempKey.keyGroup[i].callback)
                tempKey.keyGroup[i].callback();
                // 多按键组合只用一个，
                break;
            }
        }
    }
}
```
### 关于事件绑定
```javascript
export function keyDown(keyCode, callback_1, callback_2=function(){}) {
    if(typeof keyCode == 'number') {
        if(keys[i] == undefined) {
            var key = new Key(keyCode);
            key.callback_1 = callback_1;
            key.callback_2 = callback_2;
            keys[keyCode] = key;
        } else {
            keys[i].callback_1 = callback_1;
            keys[i].callback_2 = callback_2;
        }
    } else {
        for(var i of keyCode) 
            if(keys[i] == undefined) 
                keys[i] = new Key(i);
        for(var i of keyCode) {
            keys[i].keyGroup.push({groupCode: keyCode, callback: callback_1})
        }
    }
}

export function keyUp(keyCode, callback) {
    if(keys[i] == undefined) {
        var key = new Key(keyCode);
        key.callback_2 = callback;
        keys[keyCode] = key;
    } else {
        keys[i].callback_2 = callback_2;
    }
}
```