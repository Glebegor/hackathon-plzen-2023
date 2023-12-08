class PatientModel {
  constructor(id, name, surname, date, birth_certificate_number, email, telephone, insurance_number, problems, reason_id, place, isDoctor, emoji_id) {
    this.id = id 
    this.name = name 
    this.surname = surname 
    this.date = date 
    this.birth_certificate_number = birth_certificate_number 
    this.email = email 
    this.telephone = telephone 
    this.insurance_number = insurance_number 
    this.problems = problems 
    this.reason_id = reason_id 
    this.place = place 
    this.isDoctor = isDoctor 
    this.emoji_id = emoji_id 
  }
}

module.exports = PatientModel;
