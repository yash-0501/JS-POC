interface TakePhoto{
    cameraMode: string
    filter: string
    burst: Number
}

interface Stories{
    createStory(): void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: Number,
    ){}
}

class youtube implements TakePhoto, Stories{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: Number,
        public shorts: string,
    ){}
    createStory(): void{
        console.log("Stories")
    }
    
}