async function getContent(){
    try {
        const response = await fetch('http://localhost:4000/manager')
    } catch (error) {
        //alert(error)
        console.error("ERRO: " + error)        
    }
}

getContent()
