function Start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yju3PdZmJ/model.json", Mod)
}

function Mod() {
    console.log("model load!")
    classifier.classify(pegarResultado)
}

function pegarResultado(error, results) {
    if (error){
    console.log("Algo de errado ocorreu")
    alert("algo de errado aconteceu, tente de novo")
    } else {
        console.log(results)
        elemento("Ouvir").innerHTML = results[0].label
        num = results[0].confidence

        num2 = num.toFixed(2);



        elemento("Precisao").innerHTML = num2

        random_number_r = Math.floor(Math.random() * 255) + 1;  
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        

        document.getElementById("corTexto2").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("corTexto").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = elemento("Images");
        img2 = elemento("Images");
        img3 = elemento("Images");
        img4 = elemento("Images");
        img5 = elemento("Images");
    
        if(results[0].label == "Mugido") {
            img1.src = "CACHORRO.jpg".remove
            img2.src="GATINHO.jpg".remove
            img3.src="LEAAO.jpg".remove
            img5.src="SUS.gif".remove
            img4.src="VACA.jpg"
   
        } else if(results[0].label == "Ruído de fundo") {
            img1.src = "CACHORRO.jpg".remove
            img2.src="GATINHO.jpg".remove
            img3.src="LEAAO.jpg".remove
            img4.src="VACA.jpg".remove
            img5.src="SUS.gif"
          
        } else if(results[0].label == "Latido") {
            img2.src="GATINHO.jpg".remove
            img3.src="LEAAO.jpg".remove
            img4.src="VACA.jpg".remove
            img5.src="SUS.gif".remove
            img1.src = "CACHORRO.jpg"
          
        } else if(results[0].label == "Miado") {
            img1.src = "CACHORRO.jpg".remove
            img3.src="LEAAO.jpg".remove
            img4.src="VACA.jpg".remove
            img5.src="SUS.gif".remove
            img2.src="GATINHO.webp"
           
        }
        else {
            img1.src = "CACHORRO.jpg".remove
            img2.src="GATINHO.jpg".remove
            img4.src="VACA.jpg".remove
            img5.src="SUS.gif".remove
            img3.src="LEAAO.jpg"
            
        }
        
        
    }
    
}

   
function elemento(nome) {
    return document.getElementById(nome)
}
