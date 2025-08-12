const input = document.getElementById("input");
const frontward = document.getElementById("front");
const backward = document.getElementById("back");
const pauseBtn = document.getElementById("pause");
const lyricsBox = document.getElementById("lyrics");
const progress = document.getElementById("progress");
const musicPlayer = document.querySelector('.music-player');

const playlist = [
    {
        name: "Lovers Rock",
        artist: "TV Girl",
        img: "images/loversrock.jpeg",
        alt: "LoversRock",
        src: "music/Lovers Rock - TV Girl.mp3",
        lyrics: [

            { time: 10.60, text: "Are you sick of me?" },
            { time: 15.24, text: "Would you like to be?" },
            { time: 17.82, text: "I'm trying to tell you something" },
            { time: 21.57, text: "Something that I already said" },
            { time: 26.00, text: "..." },
            { time: 28.61, text: "You like a pretty boy" },
            { time: 33.53, text: "With a pretty voice" },
            { time: 36.12, text: "Who is trying to sell you something" },
            { time: 39.73, text: "Something that you already have" },
            { time: 45.71, text: "But if you're too drunk to drive, and the music is right" },
            { time: 51.04, text: "She might let you stay, but just for the night" },
            { time: 55.08, text: "And if she grabs for your hand, and drags you along" },
            { time: 59.90, text: "She might want a kiss before the end of this song" },
            { time: 64.28, text: "Because love can burn like a cigarette" },
            { time: 72.78, text: "And leave you with nothing" },
            { time: 77.35, text: "And leave you with nothing" },
            { time: 81.00, text: "..." },
            { time: 83.74, text: "While the others talked" },
            { time: 87.29, text: "We were listenin' to Lover's Rock" },
            { time: 91.64, text: "In her bedroom" },
            { time: 96.41, text: "In her bedroom" },
            { time: 101.89, text: "And if you start to kiss" },
            { time: 106.65, text: "And the record skips" },
            { time: 110.12, text: "Flip it over" },
            { time: 113.72, text: "And sit a little closer" },
            { time: 118.94, text: "But if you're too drunk to drive, and the music is right" },
            { time: 124.08, text: "She might let you stay, but just for the night" },
            { time: 128.04, text: "And if she grabs for your hand, and drags you along" },
            { time: 133.28, text: "She might want a kiss before the end of this song" },
            { time: 137.34, text: "Because love can burn like a cigarette" },
            { time: 145.84, text: "And leave you with nothing" },
            { time: 150.39, text: "And leave you with nothing" },
            { time: 152.89, text: "Now, how many men have you kissed?" },
            { time: 155.15, text: "Very few" },
            { time: 156.35, text: "But you offered me a kiss, why?" },
            { time: 160.01, text: "Such a foolish reason, I'm afraid" },
            { time: 163.13, text: "I just wanted to kiss you" },
            { time: 166.16, text: "Do-do, do-do-do-do-do" },
            { time: 170.55, text: "Do-do, do-do-do-do-do" },
            { time: 174.85, text: "Do-do, do-do-do-do-do" },
            { time: 179.50, text: "Do-do, do-do-do-do-do" },
            { time: 182.86, text: "Because love can burn like a cigarette (do-do, do-do-do-do-do)" },
            { time: 191.50, text: "And leave you alone with nothing (do-do, do-do-do-do-do)" },
            { time: 196.19, text: "And leave you alone with nothing (do)" }
        ],
        gradient: "linear-gradient(to top, #0a0414ff, #c22424ff)"
    },
    {
        name: "Let It Happen",
        artist: "Tame Impala",
        img: "images/LetitHappen.jpeg",
        alt: "LetItHappen",
        src: "music/letithappen.mp3",
        lyrics: [
            { time: 28.36, text: "It's always around me, all this noise" },
            { time: 34.02, text: "But not nearly as loud as the voice saying" },
            { time: 39.32, text: "\"Let it happen, let it happen\" (it's gonna feel so good)" },
            { time: 45.23, text: "\"Just let it happen, let it happen\"" },
            { time: 50.32, text: "..." },
            { time: 57.31, text: "All this running around" },
            { time: 61.07, text: "Tryin' to cover my shadow" },
            { time: 64.82, text: "A notion growing inside" },
            { time: 68.73, text: "Now all the others seem shallow" },
            { time: 72.43, text: "All this running around" },
            { time: 76.68, text: "Bearing down on my shoulders" },
            { time: 80.45, text: "I can hear an alarm" },
            { time: 84.29, text: "Must be a morning" },
            { time: 88.40, text: "..." },
            { time: 105.04, text: "I heard about a whirlwind that's coming 'round" },
            { time: 110.59, text: "It's gonna carry off all that isn't bound" },
            { time: 116.37, text: "And when it happens, when it happens (I won't be holding on)" },
            { time: 121.88, text: "So let it happen, let it happen" },
            { time: 126.59, text: "..." },
            { time: 130.18, text: "All this running around" },
            { time: 133.91, text: "I can't fight it much longer" },
            { time: 138.23, text: "Something's tryin' to get out" },
            { time: 141.67, text: "And it's never been closer" },
            { time: 145.66, text: "If my take-off fails" },
            { time: 149.67, text: "Make up some other story" },
            { time: 153.21, text: "If I never come back" },
            { time: 156.74, text: "Tell my mother I'm sorry" },
            { time: 161.03, text: "..." },
            { time: 329.32, text: "I cannot vanish, you will not scare me" },
            { time: 332.87, text: "Try to get through it, try to push through it" },
            { time: 336.61, text: "You were not thinking that I will not do it" },
            { time: 340.65, text: "They be lovin' someone and I'm another story" },
            { time: 343.88, text: "Take the next ticket, get the next train" },
            { time: 347.83, text: "Why would I do it? Anyone'd think that" },
            { time: 352.29, text: "I cannot vanish, you will not scare me" },
            { time: 355.75, text: "Try to get through it, try to push through it" },
            { time: 359.76, text: "You were not thinking that I will not do it" },
            { time: 363.71, text: "They be lovin' someone and I'm another story" },
            { time: 367.48, text: "Take the next ticket, get the next train" },
            { time: 371.07, text: "Why would I do it? Anyone'd think that" },
            { time: 375.67, text: "..." },
            { time: 402.09, text: "Try to get through it, try to push through it" },
            { time: 405.51, text: "You were not thinking that I will not do it" },
            { time: 409.50, text: "They be lovin' someone and I'm another story" },
            { time: 413.22, text: "Take the next ticket, get the next train" },
            { time: 417.29, text: "Why would I do it? Anyone'd think that" },
            { time: 421.26, text: "Baby now I'm ready, moving on" },
            { time: 426.12, text: "Oh, but maybe I was ready all along" },
            { time: 431.83, text: "Oh, I'm ready for the moment and the sound" },
            { time: 437.55, text: "Oh, but maybe I was ready all along" },
            { time: 443.70, text: "Baby, now I'm ready, moving on" },
            { time: 449.31, text: "Oh, but maybe I was ready all along" },
            { time: 455.14, text: "Oh, I'm ready for the moment and the sound" },
            { time: 461.40, text: "Oh, but maybe I was ready all along" }
        ],
        gradient: "linear-gradient(to right, #00c3ff38, #012222ff)"
    },
    {
        name: "505",
        artist: "Arctic Monkeys",
        img: "images/505.jpeg",
        alt: "505",
        src: "music/505.mp3",
        lyrics: [
            { time: 12.11, text: "I'm going back to 505" },
            { time: 16.51, text: "If it's a seven-hour flight or a 45-minute drive" },
            { time: 23.78, text: "In my imagination, you're waiting lying on your side" },
            { time: 30.20, text: "With your hands between your thighs" },
            { time: 34.17, text: "..." },
            { time: 40.85, text: "Stop and wait a sec" },
            { time: 43.85, text: "Oh, when you look at me like that, my darling, what did you expect?" },
            { time: 51.05, text: "I'd probably still adore you with your hands around my neck" },
            { time: 57.85, text: "Or I did last time I checked" },
            { time: 62.05, text: "..." },
            { time: 68.29, text: "Not shy of a spark" },
            { time: 71.52, text: "The knife twists at the thought that I should fall short of the mark" },
            { time: 78.42, text: "Frightened by the bite, though it's no harsher than the bark" },
            { time: 85.23, text: "The middle of adventure is such a perfect place to start" },
            { time: 94.18, text: "I'm going back to 505" },
            { time: 98.44, text: "If it's a seven-hour flight or a 45-minute drive" },
            { time: 105.80, text: "In my imagination, you're waiting lying on your side" },
            { time: 112.52, text: "With your hands between your thighs" },
            { time: 116.62, text: "..." },
            { time: 148.53, text: "But I crumble completely when you cry" },
            { time: 153.68, text: "It seems like once again you've had to greet me with goodbye" },
            { time: 160.57, text: "I'm always just about to go and spoil a surprise" },
            { time: 167.15, text: "Take my hands off of your eyes too soon" },
            { time: 172.61, text: "..." },
            { time: 176.39, text: "I'm going back to 505" },
            { time: 180.53, text: "If it's a seven-hour flight or a 45-minute drive" },
            { time: 187.87, text: "In my imagination, you're waiting lying on your side" },
            { time: 194.36, text: "With your hands between your thighs and a smile" }
        ],
        gradient: "linear-gradient(to right, #e52d27, #b31217)"
    },
    {
        name: "Dream On",
        artist: "Aerosmith",
        img: "images/Aerosmith - Dream on.jpeg",
        alt: "Aerosmith",
        src: "music/dreamon.mp3",
        lyrics: [
            { time: 37.96, text: "Every time when I look in the mirror" },
            { time: 42.07, text: "..." },
            { time: 44.28, text: "All these lines on my face getting clearer" },
            { time: 46.89, text: "..." },
            { time: 51.67, text: "The past is gone" },
            { time: 55.72, text: "It went by like dusk to dawn" },
            { time: 62.42, text: "Isn't that the way?" },
            { time: 65.27, text: "Everybody's got their dues in life to pay, yeah" },
            { time: 74.96, text: "I know nobody knows" },
            { time: 77.45, text: "Where it comes and where it goes" },
            { time: 80.66, text: "I know and everybody sin" },
            { time: 83.71, text: "You got to lose to know how to win" },
            { time: 88.52, text: "..." },
            { time: 100.16, text: "Half my life's in books' written pages" },
            { time: 106.18, text: "Live and learn from fools and from sages" },
            { time: 113.46, text: "You know it's true" },
            { time: 118.75, text: "All the feelings come back to you" },
            { time: 124.43, text: "Sing with me, sing for the year" },
            { time: 126.54, text: "Sing for the laughter and sing for the tear" },
            { time: 130.41, text: "Sing it with me, if it's just for today" },
            { time: 133.29, text: "Maybe tomorrow, the good Lord will take you away" },
            { time: 138.82, text: "..." },
            { time: 164.24, text: "Well, sing with me, sing for the year" },
            { time: 166.79, text: "Sing for the laughter and sing for the tear" },
            { time: 170.33, text: "Sing it with me, if it's just for today" },
            { time: 172.88, text: "Maybe tomorrow, the good Lord will take you away" },
            { time: 178.36, text: "..." },
            { time: 182.31, text: "Dream on, dream on, dream on" },
            { time: 186.46, text: "Dream until your dream come true" },
            { time: 191.76, text: "..." },
            { time: 193.95, text: "Dream on, dream on, dream on" },
            { time: 198.16, text: "Dream until your dream come true" },
            { time: 201.98, text: "..." },
            { time: 205.82, text: "Dream on, dream on, dream on, dream on" },
            { time: 211.65, text: "Dream on, dream on, dream on, ah!" },
            { time: 223.63, text: "Sing with me, sing for the year" },
            { time: 226.02, text: "Sing for the laughter and sing for the tear" },
            { time: 229.24, text: "Sing it with me, if it's just for today" },
            { time: 231.80, text: "Maybe tomorrow, the good Lord will take you away" },
            { time: 235.30, text: "Sing with me, sing for the year" },
            { time: 237.71, text: "Sing for the laughter and sing for the tear" },
            { time: 241.22, text: "Sing it with me, if it's just for today" },
            { time: 243.53, text: "Maybe tomorrow the good Lord will take you away" }
        ],
        gradient: "linear-gradient(to right, #2c3e50, #fd746c)"
    }
];


let currentIndex = 0;
const audio = new Audio();

function loadSong({ name, artist, img, alt, src, lyrics, gradient }) {
    input.innerHTML = "";

    const div = document.createElement("div");
    div.className = "song";
    div.innerHTML = `
    <h2>${name}</h2>
    <p>${artist}</p><br>
    <img src="${img}" alt="${alt}" style="width:200px;"><br>`;
    input.appendChild(div);

    musicPlayer.style.background = gradient;

    const lyricsBox = document.getElementById("lyrics");
    lyricsBox.textContent = lyrics[0]?.text || "...";
    lyricsBox.scrollTop = 0;

    audio.src = src;
    audio.play();
}


frontward.addEventListener("dblclick", () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadSong(playlist[currentIndex]);
});


backward.addEventListener("dblclick", () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadSong(playlist[currentIndex]);
});


pauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});


audio.addEventListener("timeupdate", () => {
    if (progress) {
        progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    }
});


if (progress) {
    progress.addEventListener("input", () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
}


loadSong(playlist[currentIndex]);

audio.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audio.currentTime);
    const currentSong = playlist[currentIndex];
    const lyrics = currentSong.lyrics;

    const currentLyric = lyrics.find((line, index) => {
        const nextTime = lyrics[index + 1]?.time || Number.MAX_VALUE;
        return currentTime >= line.time && currentTime < nextTime;
    });

    if (currentLyric) {
        lyricsBox.innerText = currentLyric.text;
        lyricsBox.scrollTop = lyricsBox.scrollHeight; // auto scroll
    }
});


