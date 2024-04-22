import { useNavigate } from "react-router";
import { useClickOutside } from "../hooks/useClickOutside"
import { useEffect } from "react";

const homePath = '/'

function Modal({children}) {
    const handleNavBack = () => {
        navigate(homePath)
    }
    const ref = useClickOutside(handleNavBack);
    const navigate = useNavigate();


    
    useEffect(() => {
        // Función para deshabilitar el desplazamiento del cuerpo del documento cuando el modal está abierto
        const handleStopScroll = () => {
            document.body.style.overflow = 'hidden';
        };
        // Aplica la función cuando el modal se monta
        handleStopScroll();
        // Limpia el efecto cuando el modal se desmonta
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);


    return (
        <div style={{ position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Fondo oscuro semi-transparente */
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            }}>
            <div ref={ref} style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',/* Sombra para resaltar el modal */
            }} >
                    {children}
            </div>
        </div>
    )
}

export default Modal
