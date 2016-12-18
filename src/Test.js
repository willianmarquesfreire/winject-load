@Injectable()
class Teste1 {
    constructor() {
        console.log("Classe 1 = Construiu")
    }
    method(ola) {
        console.log(ola)
    }
    get testegetter() {
        return "Classe 1 = Teste do Getter"
    }
}

@Injectable()
class Teste2 {
    constructor() {
        console.log("Classe 2 = Construiu")
    }
    get teste2getter() {
        return "Classe 2 = Teste do Getter - Classe 2"
    }
}

@Injectable()
@Inject('Teste1', 'Teste2')
class TesteInject {

    constructor() {
        console.log(this.Teste1.testegetter)
        console.log(this.Teste2.teste2getter)
        console.log('iniciou e injetou tudo')
    }
}


console.log('Pool de Injeções: ', InjectionPool.list())
@InjectLoader('TesteInject')
class load {

    constructor() {
        console.log('Iniciou todas, inclusive eu =D')
    }
}