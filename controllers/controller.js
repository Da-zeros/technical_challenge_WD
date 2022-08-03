const phonesData = require('../phonesData/phoneData.json')

function allPhones (req, res){
    res.status(200).send(phonesData)
}

function phone(req, res){

    const { id } = req.params 
    
    const filteredPhone = phonesData.find(element => element.id == id);

    console.log(filteredPhone)

    res.send(filteredPhone)
}

module.exports = {
    allPhones,
    phone
}