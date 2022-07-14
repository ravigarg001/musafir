function addCssAndJs()
{
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'index.css';
    document.head.appendChild(link);

    function addNewJsFile(fileLocation)
    {
        let script = document.createElement('script');
        document.head.appendChild(script);
        script.src = fileLocation;
    }

    addNewJsFile('Revision/decreasing_order.js');
    addNewJsFile('Revision/increasing_order.js');
    addNewJsFile('Revision/recursiveFactorial.js');
    addNewJsFile('Revision/Sum_pair.js');
    addNewJsFile('Revision/Sum_of_2DArrays.js');
    addNewJsFile('Revision/Fibonnaci_series.js');
    addNewJsFile('Revision/Practicetest.js')
    
}
addCssAndJs();


/*1. call addNewJsFile(put location of the js file here) */
