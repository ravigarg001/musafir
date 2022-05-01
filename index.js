function addCssAndJs(){
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'index.css';
    document.head.appendChild(link);

    function addNewJsFile(fileLocation){
        let script = document.createElement('script');
        document.head.appendChild(script);
        script.src = fileLocation;
    }

    addNewJsFile('Recursion/decreasing_order.js');
    addNewJsFile('Recursion/increasing_order.js');
    addNewJsFile('Recursion/recursiveFactorial.js');
    
}
/*1. call addNewJsFile(put location of the js file here) */