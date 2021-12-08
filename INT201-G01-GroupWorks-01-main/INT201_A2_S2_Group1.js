function menu(word , num){
    switch(num){
        case 1:
            reverse(word);
            break;
        case 2:
            replace(word);
            break;
        case 3:
            getVowels(word);
            break;
    }
}

function reverse(word){
    var str = String(word);
    let new_text = '';
    for (let i = str.length - 1; i >= 0; i--) {
        new_text += str[i];
    }
    console.log(new_text);
}

function replace(word){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var str = String(word);
    let new_text = '';
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            new_text += '*';
        }else
            new_text += str[i];
    }
    console.log(new_text);
}

function getVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var str = String(word);
    let vowelsCount = 0;
    for (let i = 0; i < str.length ; i++) {
      if (vowels.includes(str[i])) {
        vowelsCount += 1;
      }
    }
    console.log(vowelsCount);
}

menu('Hello World' , 1);
menu('Javascript' , 2);
menu('Umaporn' , 3);