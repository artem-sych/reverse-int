module.exports =
    function reverse(n) {
        let arrNumb = n.toString().split('');
        if (arrNumb[0] == '-') {
            return +arrNumb.slice(1).reverse().join('');
        } else {
            return arrNumb.reverse().join('');
        }
    };
