
class Race {
    constructor() {
    }
   
    static go(cars) {
        {
            let racelist = cars.sort((a, b) => b.count - a.count)
            console.log(racelist)
            for(let i=0; i< racelist.length; i++) {
                    console.log(`${i+1}. ${racelist[i].name}`,)
            }
        }
        
    }

}

class Car extends Race {
    constructor(name, nitro=false, fueltank=false, tyres=0) {
        super()
        this.name = name;
        this.nitro = nitro;
        this.fueltank = fueltank;
        this.tyres = tyres
        this.count = 0
        this.count += this.tyres
        if (this.nitro) {
            this.count += 40
        }
        if (this.fueltank) {
            this.count += 20
    }
        this.count += Math.floor(Math.random() *100)}
   }

let ferrari = new Car('Ferrari', true);
let bugatti = new Car('Bugatti')
let toyota = new Car ('Toyota', true, true, 20)
//console.log(ferrari.count())
Race.go([bugatti, ferrari, toyota])

