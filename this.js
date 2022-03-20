function defaultBinding() {
    function foo() {
        console.log(this.a);
    }

    a = 1;

    foo();
}

function implictBinding() {

    function foo() {
        console.log(this.a);
    }


    const obj = {
        a: 2,
        foo: foo
    }

    const obj2 = {
        a: 3,
        foo: obj.foo
    }

    // obj.foo(); // call site
    obj2.foo();

    // lost this

    const bar = obj2.foo;

    bar();

    setTimeout(obj2.foo, 1000);

    // function setTimeout(callback, delay) {
    //     // delay...
    //     callback();
    // }

    setTimeout(() => {obj2.foo()}, 1000);
}

function explictBinding() {
    function foo(b='') {
        console.log(this.a + ' ' + b);
    }


    const obj = {
        a: 2,
        foo: foo
    }

    const obj2 = {
        a: 3
    }

    const bar = function() {
        foo.call(obj);
    }

    bar();
    setTimeout(bar, 1000);
    bar.call(globalThis);


    const baz = foo.bind(obj, 3).bind(obj2, 2);

    baz();
}

const obj1 = {
    funcArr(){
        return () => {
            console.log(this)
        }
    }
}
obj1.funcArr()() // obj1

// defaultBinding();
// implictBinding();
// explictBinding();