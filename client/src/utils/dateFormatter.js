export function formatDate(date, withDateTime) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses comienzan en 0
    const year = date.getFullYear();

    // Agregar un 0 delante si el día o el mes es menor que 10
    const formattedDay = day < 10 ? "0" + day : day;

    let formattedMonth;
    switch (month) {
        case 1:
            formattedMonth = "Enero";
            break;
        case 2:
            formattedMonth = "Febrero";
            break;
        case 3:
            formattedMonth = "Marzo";
            break;
        case 4:
            formattedMonth = "Abril";
            break;
        case 5:
            formattedMonth = "Mayo";
            break;
        case 6:
            formattedMonth = "Junio";
            break;
        case 7:
            formattedMonth = "Julio";
            break;
        case 8:
            formattedMonth = "Agosto";
            break;
        case 9:
            formattedMonth = "Septiembre";
            break;
        case 10:
            formattedMonth = "Octubre";
            break;
        case 11:
            formattedMonth = "Noviembre";
            break;
        case 12:
            formattedMonth = "Diciembre";
            break;
    }

    let formattedDate = `${formattedDay} de ${formattedMonth} del ${year}`;

    if (withDateTime) {
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Agregar un 0 delante si la hora o los minutos son menores que 10
        const formattedHours = hours < 10 ? "0" + hours : hours;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

        formattedDate += ` ${formattedHours}:${formattedMinutes}`;
    }

    return formattedDate;
}
