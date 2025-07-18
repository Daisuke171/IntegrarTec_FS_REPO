# Ejercicios Prácticos
## Ejercicio 1: Crear un Sistema de Gestión Académica
Crea una base de datos académica para gestionar la información de profesores.

---

### Requisitos:
1) Crear una colección llamada profesores con validación 
   de esquema que incluya los siguientes campos requeridos:
    - nombre (string, mínimo 2 caracteres)
    - edad (entero, entre 25 y 70)
    - especialidad (string)
    - añosExperiencia (entero, mínimo 0)

**Codigo:**
```mongodb
db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre",
        "edad",
        "especialidad",
        "añosExperiencia",
        "activo",
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
          description: "años de experiencia del cliente",
          minimum: 0,
        },
        activo: {
          bsonType: "bool",
          description: "estado del cliente",
        },}
      },
    }
  }
})
```
---

2) Insertar al menos tres documentos de ejemplo que contengan 
   también los siguientes campos adicionales:
    - email
    - departamento
    - salario
    - activo (booleano)

**Codigo:**
```mongodb
db.profesores.insertOne({
  nombre: "James Sunderland",
  edad: 29,
  especialidad: "Ofimatica",
  añosExperiencia: 5,
  email: "mary_lake@hotmail.com",
  departamento: "Programacion",
  salario: 2000000,
  activo: false,
})

db.profesores.insertMany([
    {
    nombre: "Ryoichi Yamada",
    edad: 25,
    especialidad: "Calculo Integral",
    añosExperiencia: 2,
    email: "ryoichi_yama@yahoo.com",
    departamento: "Matematicas",
    salario: 1500000,
    activo: true,
    },
    {
    nombre: "John Lydon",
    edad: 50,
    especialidad: "C/C++",
    añosExperiencia: 30,
    email: "nora1979@hotmail.com",
    departamento: "Programacion",
    salario: 5000000,
    activo: true,
    }
])
```
---

3) Realizar las siguientes consultas:
    - Buscar todos los profesores 
      con más de 15 años de experiencia.
    - Calcular el promedio de edad, experiencia 
      y salario de los profesores activos.
    - Generar estadísticas por departamento: número de profesores, 
      experiencia total, salario promedio y listado de nombres.

**Codigo:**
```mongodb
db.profesores.find({ añosExperiencia: { $gt: 15 } })

db.profesores.aggregate([
  { $match: { activo: true } },
  { $group: { _id: null, promedioEdad: { $avg: "$edad"} } }
])

db.profesores.aggregate([
  { $match: { activo: true } },
  { $group: { _id: null, promedioExperiencia: { $avg: "$añosExperiencia"} } }
])

db.profesores.aggregate([
  { $match: { activo: true } },
  { $group: { _id: null, promedioSalario: { $avg: "$salario"} } }
])
```
