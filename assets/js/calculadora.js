document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#final').onclick = function() {
        if (isNaN(document.querySelector('#electricidad').value)
            || isNaN(document.querySelector('#gas').value)
            || isNaN(document.querySelector('#gasolina').value)
            || isNaN(document.querySelector('#carne').value)) {
                let mensaje = document.querySelector('#resultado');
                mensaje.innerHTML = 'Los valores deben ser numéricos';
                mensaje.style.color = '#FF3333';
        }
        else if (document.querySelector('#electricidad').value < 0
                || document.querySelector('#gas').value < 0
                || document.querySelector('#gasolina').value < 0
                || document.querySelector('#carne').value < 0) {
                    let mensaje = document.querySelector('#resultado');
                    mensaje.innerHTML = 'Los valores deben ser positivos';
                    mensaje.style.color = '#FF3333';
        }
        else {
            let suma = +document.querySelector('#electricidad').value * 164.38 / 1000000;
            suma = suma + (+document.querySelector('#gas').value * 37258.9465 * 0.185 / 3600000)
            + (+document.querySelector('#gasolina').value * 8.89 / 8800000)
            + (+document.querySelector('#carne').value * 0.027 / 19000);
            let mensaje= document.querySelector('#resultado');
            mensaje.innerHTML = 'Tu huella de carbono es de ' + suma.toFixed(3) + ' toneladas de CO₂ mensuales';
            mensaje.style.color = '#3c3c3c';
            document.querySelector('#averigua').style.visibility = 'visible';
        }
    };
});