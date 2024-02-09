abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getPhoto(): void
}

// const ya = new TakePhoto("ya", "ya")

class Insta extends TakePhoto{
    getPhoto(): void{
        console.log("Photo!")
    }
}

const i = new Insta("Panaroma", "False");
i.getPhoto()

console.log(i)