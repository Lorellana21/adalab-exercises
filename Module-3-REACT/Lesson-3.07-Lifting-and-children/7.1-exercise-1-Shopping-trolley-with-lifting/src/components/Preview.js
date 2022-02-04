import React from "react-dom";

const Preview = (props) => {

    // Funciones que nos ayudan a renderizar
    const renderPaymentTypeText = () => {
        const paymentType = props.paymentType;

        if (paymentType === 'creditCard') {
            return 'Tarjeta de crédito';
        } else if (paymentType === 'cash') {
            return 'Efectivo';
        } else if (paymentType === 'cashOnDelivery') {
            return 'Contra reembolso';
        }
    };



    return (


        <div className="preview">
            <h2>Tus datos son:</h2>
            <ul>
                <li>Nombre: {props.name}</li>
                <li>Email: {props.email}</li>
                <li>Región: {props.region}</li>
                <li>Método de pago: {renderPaymentTypeText()}</li>
                <li>Has aceptado nuestros términos legales: {props.legalTerms === true ? 'Sí' : 'No'}</li>
            </ul>
        </div>


    );
};

export default Preview;