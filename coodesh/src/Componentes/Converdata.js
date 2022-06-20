import React from 'react'

const Convert = ({timezone}) => {
    const dia = new Date(timezone)
    const anotherday = "0" + (dia.getDate())
    const month =  "0" + (dia.getMonth())
    const years = (dia.getFullYear())

    return `${anotherday.substr(-2)}/${month.substr(-2)}/${years}  `
}

export default Convert
