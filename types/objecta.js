var obj = {
    a: 1,
    b: 2,
    addAndPrint() {
        let result = this.a + this.b
        console.log(result)
    }
}

obj.addAndPrint() 