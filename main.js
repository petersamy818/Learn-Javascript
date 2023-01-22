window.onload = function () {

    // classes from 1 - 9

    // document.querySelector("h1").style.color = "blue";
    // window.alert("Hello From JS File");
    // document.write("<h1>Hello <span>Page</Span></h1>");
    // console.log("Hello From %cJS %cFile", "color: red; Font-size: 40px", "color: blue; Font-size: 40px");


    // assignments Solution

    // document.querySelector("h1").style.fontWeight = "bold";
    // document.querySelector("h1").style.fontSize = "80px";
    // document.querySelector("h1").style.fontFamily = "arial";
    // document.querySelector("h1").style.color = "blue";
    // document.querySelector("h1").style.textAlign = "center";

    // console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;", "color: green; font-size: 40px; font-weight: bold", "background-color: blue; color: white; font-size: 40px;");

    // console.group("Group 1");
    // console.log("Message 1");
    // console.log("Message 2");
    // console.group("Child Group");
    // console.log("Message 1");
    // console.log("Message 2");
    // console.group("Grand Child Group");
    // console.log("Message 1");
    // console.log("Message 2");
    // console.groupEnd();
    // console.groupEnd();
    // console.groupEnd();
    // console.group("Group 2");
    // console.log("Message 1");
    // console.log("Message 2");

    // console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);


    // classes from 10 - 17

    // var user = "peter",
    //     age = 37;
    // console.log(user);
    // console.log(age);
    // console.log(hello);
    // hello.innerHTML = "Option";

    // console.log("Elzero\n Web School");

    // let a = "We Love";
    // let b = "JavaScript";
    // let c = "and";
    // let d = "Programming";
    // console.log(a + " " + b + "\n" + c + " " + d);
    // console.log(`${a} ${b}
    // ${c} ${d}`);


    // assignments Solution
    // let numberOne = 10;
    // let numberTwo = 20;
    // console.log(typeof numberOne + typeof numberTwo);
    // console.log(typeof`${numberOne}${numberTwo}`);


    // console.log((100).toString());
    // console.log(100.10.toString());
    // console.log(100.56564454.toFixed(2));
    // console.log(Number("100 osama"))
    // console.log(+("100 osama"));
    // console.log(parseInt("100 osama"));
    // console.log(parseInt("osama 100 osama"));
    // console.log(parseInt("100.55 osama"));
    // console.log(parseFloat("100.500 osama"));
    // console.log(Number.isInteger("100"));
    // console.log(Number.isInteger(100));
    // console.log(Number.isInteger(100.500));
    // console.log(Number.isNaN("osama" / 20));

    // console.log(Math.round(99.2));
    // console.log(Math.round(99.8));
    // console.log(Math.ceil(99.2));
    // console.log(Math.floor(99.9));
    // console.log(Math.min(10, 20, 100, -100, 150, -200));
    // console.log(Math.max(10, 20, 100, -100, 150, -200));
    // console.log(Math.pow(2, 2));
    // console.log(Math.random());
    // console.log(Math.trunc(99.9));

    // let theName = "  Ahmed  ";
    // console.log(theName);
    // console.log(theName[1]);
    // console.log(theName[5]);
    // console.log(theName[10]);
    // console.log(theName.charAt(3));
    // console.log(theName.charAt(10));
    // console.log(theName.length);
    // console.log(theName.trim());
    // console.log(theName.toLowerCase());
    // console.log(theName.toUpperCase());
    // console.log(theName.trim().charAt(0).toLowerCase());

    // let a = "Elzero Web School";
    // console.log(a.length);
    // console.log(a.substring(2, 6));
    // console.log(a.substring(6, 2));
    // console.log(a.substring(-100, 6));
    // console.log(a.substring(a.length - 6, a.length - 3));
    // console.log(a.substr(2,4)); // this feature (substr) is deprecated now
    // console.log(a.includes("Web"));
    // console.log(a.includes("Web", 8));
    // console.log(a.startsWith("z"));
    // console.log(a.startsWith("z", 2));
    // console.log(a.startsWith("zero", 2));
    // console.log(a.endsWith("o", 6));


    // assignments Solution
    // let word = "Elzero";
    // let letterz = "z";
    // let letterE = "e";
    // let letterO = "o";
    // console.log(word.includes(letterz));

    
    // let price = 200;
    // let discount = true;
    // let discountAmount = 0.3;
    // if (discount = true) {
    //     price -= price * discountAmount;
    // }
    // console.log(price);

    let name = "peter";
    let gender = "female";
    let age = 30;
    if (gender === "male") {
        console.log("mr");
    } else {
        console.log("mrs");
    }
    gender === "male" ? console.log("Mr") : console.log("Mrs");
};