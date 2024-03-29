import React from 'react';

class Registro extends React.Component {
    constructor(args) {
        super(args);
        this.state = {  
            username: '',
            mail: '',
            password: '',
            rpassword: '',
            message: ''
        }
    }

    onChange(e){
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    save(e){
        this.setState({
            message: 'Guardado correctamente'
        })

    }
    render() { 
        return ( 
        <div>
                <h1>Registro</h1>
            
           <form >
                <label htmlFor="username">Nombre de usuario</label><br/>
                <input value={this.state.username} onChange={this.onChange.bind(this)} 
                name="username" id="username" type="text"/> <br/><br/>
                
                <label htmlFor="mail">Correo</label><br/>
                <input value={this.state.mail} onChange={this.onChange.bind(this)} 
                name="mail" id="mail" type="text"/> <br/><br/>

                <label htmlFor="password">Contraseña</label><br/>
                <input value={this.state.password} onChange={this.onChange.bind(this)}
                name="password" id="password" type="password"/> <br/> <br/>

                <label htmlFor="rpassword">Repetir Contraseña</label><br/>
                <input value={this.state.rpassword} onChange={this.onChange.bind(this)}
                name="rpassword" id="rpassword" type="password"/> 

            </form> <br/>

            <div>
                <button onClick={this.save.bind(this)} > <a href="https://biologicplastic.netlify.com/">
                    Aceptar
                    </a></button>
                <span style={{color: 'green'}}>{this.state.message}</span>

               
            </div>
        </div>

         );
    }
}
 
export default Registro;