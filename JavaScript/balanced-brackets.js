function isBalanced(s) {

    var stack = [];

    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(var i=0;i<s.length;i++){

        if(s[i]== '{'||s[i]=='['||s[i]=='(') {
            stack.push(s[i])
        } else {
            let last = stack.pop();
            if(s[i] !== map[last]){
                return 'NO'
            }
        }
    }
    if(stack.length !== 0 ){
        return 'NO'
    }

    return 'YES'
}
