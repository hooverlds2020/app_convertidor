document.getElementById("form")
    .addEventListener('submit', function (e){
        let number = document.getElementById("arabigo").value
        // const decimal = document.getElementById('arabigo').value
        let hashRomans = {
                    M: 1000,
                    CM: 900,
                    D:  500,
                    CD: 400,
                    C:  100,
                    XC:  90,
                    L:   50,
                    XL:  40,
                    X:   10,
                    IX:   9,
                    V:    5,
                    IV:   4,
                    I:    1
                },
                endValue = ""
            for(i in hashRomans){ //O(n)
                while(number >= hashRomans[i]){//O(n)
                        endValue += i
                        number -= hashRomans[i]        
                }
            }
            alert(endValue)
            console.log(endValue)
            return endValue
            e.preventDefault()
               
        }   
);

// arabicToRoman(number)
