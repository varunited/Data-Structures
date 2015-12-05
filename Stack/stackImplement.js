function Stack() {
    this.list = [];
    this.top = -1;
}

Stack.prototype.sPush = function(num) {
    this.top++;
    this.list[this.top] = num;
}

Stack.prototype.sPop = function() {
    delete this.list[this.top];
    this.top--;
    }

Stack.prototype.sDisplay = function(tempTop) {
    console.log(this.list[tempTop]);
    tempTop--;
    if(tempTop >= 0) {
        return st1.sDisplay(tempTop);
    }
}

var st1 = new Stack();
st1.sPush(5);
st1.sPush(10);
st1.sPush(15);
st1.sPush(20);
st1.sDisplay(st1.top);
st1.sPop();
st1.sDisplay(st1.top);
