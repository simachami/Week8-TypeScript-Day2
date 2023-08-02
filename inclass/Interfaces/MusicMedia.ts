// Create a Interface Of MusicMedia that states anything implementing it should be able to `play` and create Classes: CD, Tape, Record to implement your interface

// to implement play:

// CDs will print "Spins and read with Laser"

// Tapes will print "Magnetic Tape is read"

// Records will print "Needle reads grooves"

interface MusicMedia {

    play():void 

    
}

class CD implements MusicMedia {
    play() {
        console.log("Spins and read with Laser")
    }
}

class Tapes implements MusicMedia {
    play() {
        console.log("Magnetic Tape is read")
    }
}

class Records implements MusicMedia {
    play() {
        console.log("Needle reads grooves")
    }
}

const cdMedia = new CD()
cdMedia.play()

const tapesMedia = new Tapes()
tapesMedia.play()

const recordsMedia = new Records()
recordsMedia.play()