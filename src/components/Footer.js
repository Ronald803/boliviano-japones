import React from 'react'

function Footer() {
  return (
    <footer class="bg-danger text-light card" style={{"marginTop":"10px"}}>
        <div class="container card-body" style={{"maxWidth": "1200px"}}>
            <div class="row">
                <div class="col-sm-6">
                    <h5>Visitanos</h5>
                    <p>Dirección: EL ALTO  3</p>
                    
                </div>
                <div class="col-sm-3">
                    <h5>Contactanos</h5>
                    <ul class="list-unstyled">
                        <li>Celular: 62568755</li>
                        <li>Teléfonos: 2 311775 - 2 312866</li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Enlaces útiles</h5>
                    <ul class="list-unstyled">
                        <li>Acerca de nosotros</li>
                        <li>Términos y condiciones</li>
                        <li>Política de privacidad</li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
  )
}

export default Footer