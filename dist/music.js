const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    listFolded: true,
    audio: [{
        name: '出山',
        artist: '花粥&王胜男',
        url: '/media/music_01.mp3',
        cover: '/media/img_01.jpg',
        lrc: '/media/lrc_01.lrc'
    },
    {
        name: '琵琶行',
        artist: '奇然&沈谧仁',
        url: '/media/music_02.mp3',
        cover: '/media/img_02.jpg',
        lrc: '/media/lrc_02.lrc'
    },
    {
        name: '广寒宫',
        artist: '丸子哟',
        url: '/media/music_03.mp3',
        cover: '/media/img_03.jpg',
        lrc: '/media/lrc_03.lrc'
    },
    {
        name: '卡布奇诺',
        artist: '6诗人',
        url: '/media/music_04.mp3',
        cover: '/media/img_04.jpg',
        lrc: '/media/lrc_04.lrc'
    },
    {
        name: '红昭愿',
        artist: '音阙诗听',
        url: '/media/music_05.mp3',
        cover: '/media/img_05.jpg',
        lrc: '/media/lrc_05.lrc'
    }]
});
