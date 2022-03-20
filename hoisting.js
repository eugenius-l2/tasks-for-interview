function workWithVarDeclartion() {
    // the compiler sees it like:
    // var foo = undefined;
    // console.log(foo); // undefined
    // foo = 'abc';
    console.log(foo);

    var foo = 'abc';
}

function workWithLetDeclartion() {
    // the compiler sees it like:
    // let bar;
    // console.log(bar); // ReferenceError: bar is not defined
    // bar = 'abc';

    console.log(bar); // ReferenceError: bar is not defined

    let bar = 'abc';
}

function workWithFunctionExpression() {
    // the compiler sees it like:
    // var bar = undefined;
    // bar(); // TypeError: bar is not a function
    // bar = function () ...

    bar(); // TypeError: bar is not a function

    var bar = function () {
        console.log('I am bar');
    }
}

function workWithWhoIsFirst() {
    // the compiler sees it like:
    // function foo(){}
    // console.log(typeof foo); // function
    // var foo = 'abc';
    // console.log(typeof foo); // string

    console.log(typeof foo);

    var foo = 'abc';

    function foo(){}

    console.log(typeof foo); 

}

function workWithTrap() {
    // the compiler sees it like:
    // function foo(){
    //     console.log(bar);
    // }
    // var bar = undefined;
    // foo(); // undefined
    // bar = 'abc';
    // foo(); // abc
    foo(); // undefined

    var bar = 'abc';

    foo();  // abc

    function foo(){
        console.log(bar);
    }
}

// workWithVarDeclartion();
// workWithLetDeclartion();
// workWithFunctionExpression();
// workWithWhoIsFirst();
// workWithTrap();