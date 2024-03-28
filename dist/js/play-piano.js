/**
 * 渲染钢琴音
 */

// 为指定class的标签设置触摸事件
element_classname = ["site-title"];

// C大调钢琴音调
const pitch = [
    262, 294, 330, 349, 392, 440, 494,
    523, 587, 659, 698, 784, 880, 988,
    1046, 1175, 1318, 1397, 1568, 1760, 1976,
    2092, 2350, 2636, 2794, 3136, 3520, 3952,
    0
];

// 根据曲谱打歌
const tone = [
    7, 6, 7, 11, 12, 12, 12, 11, 8, 9, 10, 9, 9,
    7, 6, 7, 9, 10, 10, 5, 7, 7, 8, 7, 6,
    7, 6, 7, 11, 12, 12, 12, 11, 8, 9, 10, 9, 9,
    7, 6, 7, 7, 9, 8, 5, 8, 7, 7
];

// 将曲谱转换为钢琴音数组
let music_list = [];
for (let i = 0; i < tone.length; i++) {
    music_list.push(pitch[tone[i]]);
}
// console.log(music_list)

window.AudioContext = window.AudioContext || window.webkitAudioContext,
    function () {
        if (window.AudioContext) {
            let e = new AudioContext;
            let t = "880 987 1046 987 1046 1318 987 659 659 880 784 880 1046 784 659 659 698 659 698 1046 659 1046 1046 1046 987 698 698 987 987 880 987 1046 987 1046 1318 987 659 659 880 784 880 1046 784 659 698 1046 987 1046 1174 1174 1174 1046 1046 880 987 784 880 1046 1174 1318 1174 1318 1567 1046 987 1046 1318 1318 1174 784 784 880 1046 987 1174 1046 784 784 1396 1318 1174 659 1318 1046 1318 1760 1567 1567 1318 1174 1046 1046 1174 1046 1174 1567 1318 1318 1760 1567 1318 1174 1046 1046 1174 1046 1174 987 880 880 987 880".split(" "); //天空之城
            // let t = music_list;
            let i = 0;
            let o = 1;
            for (const item of element_classname) {
                document.getElementsByClassName(item)[0].addEventListener("mouseenter", function () {
                    let r = t[i];
                    r || (i = 0, r = t[i]), i += o;
                    let c = e.createOscillator();
                    let l = e.createGain();
                    c.connect(l);
                    l.connect(e.destination);
                    c.type = "sine";
                    c.frequency.value = r;
                    l.gain.setValueAtTime(0, e.currentTime);
                    l.gain.linearRampToValueAtTime(1, e.currentTime + .01);
                    c.start(e.currentTime);
                    l.gain.exponentialRampToValueAtTime(.001, e.currentTime + 1);
                    c.stop(e.currentTime + 1);
                    n = !1;
                });
            }
        }
    }();
