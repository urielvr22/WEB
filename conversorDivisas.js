paises = ["Colombia","Costa Rica","España","Francia","Guatemala","Japon","Mexico","Reino Unido","Sudafrica","Estados Unidos"]
imagenes = ["banderas/COLOMBIA.jpg","banderas/CR.jpg","banderas/ESPANA.jpg","banderas/FRANCIA.jpg","banderas/GUATEMALA.jpg","banderas/JAPON.jpg","banderas/MEXICO.jpg","banderas/REINOUNIDO.jpg","banderas/SUDAFRICA.jpg","banderas/USA.jpg"]
nombre = ["Peso Colombiano","Colón","Euro","Euro","Quetzal","Yen","Peso Mexicano","Libra Esterlina","Rand Sudafrica","Dólar"]
iso = ["COP","CRC","EUR","EUR","GTQ","JPY","MXN","GBP","ZAR","USD"]
banderas = [0,0,0,0,0,0,0,0,0,0]
MCOP = [1, 0.17,0.00026, 0.00026, 0.0022, 0.031, 0.0058, 0.00024, 0.0044, 0.00029]
MCRC = [6.05, 1, 0.0016, 0.0016, 0.014, 0.19, 0.035, 0.0014, 0.027, 0.0018]
MEUR = [3811.93, 630.22, 1, 1, 8.54, 117.77, 22.13, 0.91, 16.93, 1.11]
MGTQ = [446.81, 73.17, 0.12, 0.12, 1, 13.80, 2.59, 0.11, 1.99, 0.13]
MJPY = [32.37, 5.35, 0.0085, 0.0085, 0.072, 1, 0.19, 0.0077, 0.14, 0.0094]
MMXN = [172.28, 28.48, 0.045, 0.045, 0.39, 5.32, 1, 0.041, 0.77, 0.050]
MGBP = [4193.84, 693.36, 1.10, 1.10, 9.39, 129.64, 24.35, 1, 18.66, 1.22]
MZAR = [224.75, 37.16, 0.059, 0.059, 0.50, 6.95, 1.31, 0.054, 1, 0.066]
MUSD = [3430.15, 567.08, 0.90, 0.90, 7.68, 105.99, 19.92, 0.82, 15.27, 1]

window.onload = function() {
    f0=document.getElementById("fila0");
    primeralinea();
    f1=document.getElementById("fila1");
    segundalinea()
    f2=document.getElementById("fila2");
    terceralinea();
    f3=document.getElementById("fila3");
    cuartalinea();
	M0=document.getElementById("M0");
	M1=document.getElementById("M1");
	M2=document.getElementById("M2");
	M3=document.getElementById("M3");
	M4=document.getElementById("M4");
	M5=document.getElementById("M5");
	M6=document.getElementById("M6");
	M7=document.getElementById("M7");
	M8=document.getElementById("M8");
	M9=document.getElementById("M9");
	cambio();
}

function marca0(){
	if(banderas[0] == 0){
		banderas[0] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[0] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca1(){
	if(banderas[1] == 0){
		banderas[1] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[1] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca2(){
	if(banderas[2] == 0){
		banderas[2] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[2] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca3(){
	if(banderas[3] == 0){
		banderas[3] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[3] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca4(){
	if(banderas[4] == 0){
		banderas[4] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[4] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca5(){
	if(banderas[5] == 0){
		banderas[5] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[5] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca6(){
	if(banderas[6] == 0){
		banderas[6] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[6] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca7(){
	if(banderas[7] == 0){
		banderas[7] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[7] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca8(){
	if(banderas[8] == 0){
		banderas[8] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[8] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function marca9(){
	if(banderas[9] == 0){
		banderas[9] = 1;
		//document.getElementById("M0").src = "dorada.png";
	}else{
		banderas[9] = 0;
		//document.getElementById("M0").src = "gris.png";
	}
	cambio();
}

function cambio() {
		if(banderas[0] == 1){
			M0.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M0.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[1] == 1){
			M1.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M1.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[2] == 1){
			M2.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M2.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[3] == 1){
			M3.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M3.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[4] == 1){
			M4.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M4.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[5] == 1){
			M5.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M5.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[6] == 1){
			M6.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M6.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[7] == 1){
			M7.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M7.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[8] == 1){
			M8.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M8.innerHTML="<img src=\""+"gris.png"+"\">"
		}
		if(banderas[9] == 1){
			M9.innerHTML="<img src=\""+"dorada.png"+"\">"
		}else{
			M9.innerHTML="<img src=\""+"gris.png"+"\">"
		}
}

function primeralinea() {
         for (i=0;i<10;i++) {
             celda0=f0.getElementsByTagName("th")[i];
             celda0.innerHTML="<img src=\""+imagenes[i]+"\">"
             }
         }

function segundalinea() {
         for (i=0;i<10;i++) {
             celda0=f1.getElementsByTagName("th")[i];
             celda0.innerHTML=paises[i]
             }
         }

function terceralinea() {
         for (i=0;i<10;i++) {
             celda0=f2.getElementsByTagName("th")[i];
             celda0.innerHTML=nombre[i]
             }
         }

function cuartalinea() {
         for (i=0;i<10;i++) {
             celda0=f3.getElementsByTagName("th")[i];
             celda0.innerHTML=iso[i]
             }
         }
		 
function miconversion(){
		valor0=document.buscar.valor0.value;
		valor1=document.buscar.valor1.value;
		valor2=document.buscar.valor2.value;
		valor3=document.buscar.valor3.value;
		valor4=document.buscar.valor4.value;
		valor5=document.buscar.valor5.value;
		valor6=document.buscar.valor6.value;
		valor7=document.buscar.valor7.value;
		valor8=document.buscar.valor8.value;
		valor9=document.buscar.valor9.value;
		//valores = [valor0,valor1,valor2,valor3,valor4,valor5,valor6,valor7,valor8,valor9]
		valores = [document.buscar.valor0.value, document.buscar.valor1.value, document.buscar.valor2.value, document.buscar.valor3.value, document.buscar.valor4.value, document.buscar.valor5.value, document.buscar.valor6.value, document.buscar.valor7.value, document.buscar.valor8.value, document.buscar.valor9.value]
		contieneTexto = 10;
		cantidad = 0;
		//estrella = 2;
		//texto = 1;
		for (i=0;i<10;i++) {
			if(valores[i]!=""){
				if (!/^\d*(\.\d{1})?\d{0,1}$/.test(valores[i])){
					alert("Los valores ingresados solo deben ser numeros, use puntos para decimales");
					return;
				}
				if(valores[i] < 0){
					alert("Los valores deben ser enteros no negativos");
					return;
				}
				if(contieneTexto != 10){
					alert("2 o mas campos poseen valores, imposible realizar la conversion");
					return;
				}
				contieneTexto = i;
				cantidad = valores[i];
				if(banderas[i]==0){
					return;
				}
			}
		}
		if(contieneTexto != 10){
			monedas = [MCOP, MCRC, MEUR, MEUR, MGTQ, MJPY, MMXN, MGBP, MZAR, MUSD];
			//monedas = new Array(MCOP, MCRC, MEUR, MEUR, MGTQ, MJPY, MXN, MGBP, MZAR, MUSD);
			for (i=0;i<10;i++) {
				if(banderas[i] == 1){
					//valores[i] = monedas[contieneTexto][i] * cantidad;
					switch (i){
						case 0:
							document.buscar.valor0.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 1:
							document.buscar.valor1.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 2:
							document.buscar.valor2.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 3:
							document.buscar.valor3.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 4:
							document.buscar.valor4.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 5:
							document.buscar.valor5.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 6:
							document.buscar.valor6.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 7:
							document.buscar.valor7.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 8:
							document.buscar.valor8.value = monedas[contieneTexto][i] * cantidad;
							break;
						case 9:
							document.buscar.valor9.value = monedas[contieneTexto][i] * cantidad;
							break;
					}
				}
			}
		}
}
function limpiar(){
		document.buscar.valor0.value = "";
		document.buscar.valor1.value = "";
		document.buscar.valor2.value = "";
		document.buscar.valor3.value = "";
		document.buscar.valor4.value = "";
		document.buscar.valor5.value = "";
		document.buscar.valor6.value = "";
		document.buscar.valor7.value = "";
		document.buscar.valor8.value = "";
		document.buscar.valor9.value = "";
}	
		 
		 
		 