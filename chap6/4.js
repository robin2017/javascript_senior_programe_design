var book = {
    _year: 2004,//数据属性
    edition: 1
};
Object.defineProperty(book, "year", { //访问器属性
    enumerable: true,
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
console.log(book);
//{ _year: 2005, edition: 2, year: [Getter/Setter] }




