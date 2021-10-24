let bag = {
    lipstick: true,
    hairbrush: true,
    wallet: true,
    rubber: true,
    socks: true,
    removeSmthFromBag: function (propName) {
        delete this[propName];
    },
    addSmthToBag: function (object) {
        Object.assign(this, object);
    }
}
bag.removeSmthFromBag('lipstick');
bag.addSmthToBag({bottleOfRum: true});
console.log(bag);