const man = {
    name: 1,
    surname: 2,
    thirdname: 3,
    hobby: 4
}


const countProps = function(obj) {
    const keys = Object.keys(obj);

    return keys.length;
}
console.log(countProps(man));
