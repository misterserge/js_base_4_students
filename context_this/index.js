const obj = {
    a: 1,
    b: 2,
    print() {

        // setTimeout(
        //     function() {console.log(this)}, 1000
        // );
        setTimeout(
            () => {console.log(this)}, 1000
        );
        // console.log(this)
    },
}

obj.print()

