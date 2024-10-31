function DayBefore(day) {
    const today=new Date()
    

    const pastDate=new Date(today)


    pastDate.setDate(pastDate.getDate()-day)
    return pastDate.toDateString()
}

console.log(DayBefore(45))