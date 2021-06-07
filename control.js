
const ingresar = () => {

   
    const usuarioDOM = document.getElementById("nombre").value;
  
    const claveDOM = document.getElementById("clave").value;
    
    let miUsuario = "m@";
    let miClave = "1";
    
    let msg = comprobarvacio(usuarioDOM,claveDOM);
		if(msg!=''){
      alert(msg);
    }else{
      msg = comprobararroba(usuarioDOM); 
      if(msg!=''){
        alert(msg);
      }else{

        if ( usuarioDOM === miUsuario && claveDOM === miClave) {
          console.log(usuarioDOM);
          console.log(claveDOM);
        alert('Ingreso Correcto');
         } else {
           console.log(usuarioDOM);
           console.log(claveDOM);
          alert('Ingreso Incorrecto');
           
         }
      }
      
    }
    
      
    
    function comprobararroba(usuario){
      let msg = '';
      let hayArroba = false;
         
      for(var i=0; i<usuario.length; i++){					
        if(usuario[i]=='@'){hayArroba = true;}
      }

      if(hayArroba==false){
        msg = 'Faltan el símbolo \'@\' ';    
        
      }
      return msg;
    }
    
    function comprobarvacio (usuario,clave){
      let msg ="";
      if( usuario == "" || clave=="") {
        
         msg= 'Debe de rellenar todos los campos, no pueden estar vacios';
        
        
      }
      return msg;
    }

  }

 
  
  
  
 