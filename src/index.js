module.exports =
    function reverse(n) {
        let arrNumb = n.toString().split('');
        if (arrNumb[0] == '-') {
            let result = +('-' + arrNumb.slice(1).reverse().join(''));
            return result;
        } else {
            return arrNumb.reverse().join('');
        }
    };
