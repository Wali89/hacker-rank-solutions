function catAndMouse(x, y, z) {
    if (Math.abs(x - z) < Math.abs(y - z)) {
        return("Cat A")
    } else if (Math.abs(x - z) > Math.abs(y - z)) {
        return("Cat B")
    } else {
        return("Mouse C")
    }

}
