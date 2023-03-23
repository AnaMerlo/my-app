import { useState } from 'react'

const Form = () => {
    
    const [buyerPhone, setBuyerPhone] = useState('')
    const [buyerName, setBuyerName] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    


    return (
        <div>
        <h1>Formulario</h1>
            
            {/* <section className="container w-50 mg"> */}
                <form action="" id="miForm" className="form" > 
                        {/* <!-- campo para nombre --> */}
                    <div>
                        <label for="nombreApellido"></label>
                        <input type="text"  required placeholder="Ingresa tu Nombre*" className="input" value={buyerName} onChange = {(e) => setBuyerName(e.target.value)}/>
                    </div>
                    {/* <!-- campo para telefono --> */}
                    <div>
                        <div> 
                            <label for="telefono"></label>
                            <input type="tel" placeholder="Ingresa tu Teléfono*" className="input" value={buyerPhone} onChange = {(e) => setBuyerPhone(e.target.value)}/>  
                        </div>
                        {/* <!-- campo para correo --> */}
                        <div>
                            <label for="correoElectronico" ></label>
                            <input type="email"  required placeholder="Ingresa tu Email"  className="input" value={buyerEmail} onChange = {(e) => setBuyerEmail(e.target.value)}/>
                        </div>
                    </div>
                    {/* <!-- campo para boton enviar --> */}
                    <div class="form__flex ">
                        <input type="submit" value="Enviar"/>
                    </div>
                </form>
            {/* </section> */}
        </div>
    )
}

export default Form
