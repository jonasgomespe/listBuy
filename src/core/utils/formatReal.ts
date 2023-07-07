
export const FormatReal = (price:number):string => {
    const formatReal = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency:'BRL'
    })

    return formatReal.format(price);
}