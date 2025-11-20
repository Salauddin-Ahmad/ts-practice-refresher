// interface Mediaplayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// // implementation
// class MusicPlayer implements Mediaplayer{
//     play(): void {
//         console.log(`playing music`)
//     }

//     pause(): void {
//         console.log(`Paused music`)
//     }

//     stop(): void {
//         console.log(`Stopped music`)
//     }
// }


// const Mezplayer = new MusicPlayer();
// Mezplayer.play()

abstract class Mediaplayer {
   abstract play(): void;
   abstract pause(): void;
   abstract stop(): void;
}


class Mexba extends Mediaplayer{
    play(): void {
        console.log(`playing`)
    }

    pause(): void {
        console.log(`stop`)
    }

    stop(): void {
        console.log(`stop`)
    }
}


const Mezplayer = new Mexba();

Mezplayer.pause()
