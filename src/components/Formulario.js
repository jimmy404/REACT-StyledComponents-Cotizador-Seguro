import React from 'react';

const Formulario = () => {
    return (
        <form>
            <div>
                <label>
                    <select>
                        <option value="">-- Seleccione --</option>
                        <option value="americano">-- Americano --</option>
                        <option value="europeo">-- Europeo --</option>
                        <option value="asiatico">-- Asiatico --</option>

                    </select>
                </label>
            </div>
        </form>
    );
}

export default Formulario;