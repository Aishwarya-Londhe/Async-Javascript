let cl = console.log;

// By Default JavaScript is
// Sync
// Single Threaded
// Non Blocking

function print10(){
    cl(10)
}

function print20(){
    setTimeout(() => {
        // API call to get data
        cl(20)
        print30()
    },1000)
}

function print30(){
    cl(30)
}

// print10()
// print20()
// print30()


function fetchdata(callBackFun){
    setTimeout(() => {
        cl(`data is fetched successfully`)
        // templatingLi();
        callBackFun()
    }, 2000);
}

// limitation on fetchdata is it will generate only one type of data templatingLi therefore we use callBackFun for generating multiple types data. So that function will become generic.

function templatingLi(){
    cl(`Lists are created successfully`)
}

function templatingCard(){
    cl(`Cards are created successfully`)
}

fetchdata(templatingLi);
fetchdata(templatingCard);
// templatingLi();

// To handle a Synchronus operations in javaScript, We use CallBack Functions.