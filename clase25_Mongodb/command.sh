db.createCollection("clientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre",
        "apellido",
        "estado",
      ],
      properties: {
        nombre: {
          bsonType: "string",
          description: "nombre del cliente",
        },
        apellido: {
          bsonType: "string",
          description: "apellido del cliente",
        },
        estado: {
          bsonType: "bool",
          description: "estado del cliente",
        },
      },
    }
  }
})

db.animales.insertOne({
  nombre: "Tigre",
  tipo: "Salvaje",
  cliente: "Heracles",
  fecha: new Date()
})















db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre",
        "edad",
        "especialidad",
        "añosExperiencia",
      ],
      properties: {
        nombre: {
          bsonType: "string",
          description: "nombre del cliente",
          minimum: 2,
        },
        edad: {
          bsonType: "int",
          description: "edad del cliente",
          minimum: 25,
          maximum: 70,
        },
        especialidad: {
          bsonType: "string",
          description: "especialidad del cliente",
          minimum: 1,
        },
        añosExperiencia: {
          bsonType: "int",
          description: "estado del cliente",
          minimum: 0,
        },
      },
    }
  }
})

db.profesores.insertOne({
  nombre: "James Sunderland",
  edad: 29,
  especialidad: "Ofimatica",
  añosExperiencia: 5,
  email: "mary_lake@hotmail.com",
  departamento: "Programacion",
  salario: 2000000,
})

db.profesores.insertMany({[
  {
    nombre: "Ryoichi Yamada",
    edad: 25,
    especialidad: "Calculo Integral",
    añosExperiencia: 2,
    email: "ryoichi_yama@yahoo.com",
    departamento: "Matematicas",
    salario: 1500000,
  },
  {
    nombre: "John Lydon",
    edad: 50,
    especialidad: "C/C++",
    añosExperiencia: 30,
    email: "nora1979@hotmail.com",
    departamento: "Programacion",
    salario: 5000000,
  }
]})


db.profesores.find({ añosExperiencia: { $gt: 15 } })

db.profesores.aggregate{[
  { $match: { activo: true } },
  { $group: { _id: null, promedioEdad: { $avg: "$edad" } } }
]}

db.profesores.aggregate{[
  { $match: { activo: true } },
  { $group: { _id: null, promedioExperiencia: { $avg: "$añosExperiencia" } } }
]}

db.profesores.aggregate([
  { $match: { activo: true } },
  { $group: { _id: null, promedioSalario: { $avg: "$salario"} } }
])






