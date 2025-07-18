# Ejercicio 2: Sistema de Cursos y Matriculaciones
## Diseña una colección para administrar los cursos y su proceso de inscripción.
---

### Requisitos:
1. Crear una colección llamada cursos e insertar al menos dos documentos 
    con los siguientes campos:
    - codigo (ej. "MAT101")
    - nombre
    - creditos
    - profesorId (relación con la colección profesores)
    - horario: un objeto con los días y el horario del curso.
    - cupoMaximo
    - inscritos: un arreglo inicialmente vacío.

**Codigo para la colección:**
```mongodb
db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "codigo",
        "nombre",
        "creditos",
        "profesorId",
        "horario",
        "cupoMaximo",
        "inscriptos"
      ],
      properties: {
        codigo: {
          bsonType: "string",
          description: "codigo del curso",
          minLength: 4
        },
        nombre: {
          bsonType: "string",
          description: "nombre del curso",
          minLength: 1
        },
        creditos: {
          bsonType: "int",
          description: "creditos del curso",
          minimum: 1
        },
        profesorId: {
          bsonType: "objectId",
          description: "profesor del curso"
        },
        horario: {
          bsonType: "object",
          required: ["dias", "hora"],
          properties: {
            dias: { bsonType: "array", items: { bsonType: "string" } },
            hora: { bsonType: "string" }
          }
        },
        cupoMaximo: {
          bsonType: "int",
          description: "cupo maximo del curso",
          minimum: 1
        },
        inscriptos: {
          bsonType: "array",
          description: "inscriptos del curso",
          items: {
            bsonType: "object",
            required: ["alumnoId", "fechaInscripcion", "estado"],
            properties: {
              alumnoId: { bsonType: "objectId" },
              fechaInscripcion: { bsonType: "date" },
              estado: { bsonType: "string" }
            }
          }
        }
      }
    }
  }
})
```

**Codigo para los documentos:**
```mongodb
db.cursos.insertMany([
  {
    codigo: "MAT101",
    nombre: "Calculo II",
    creditos: 6,
    profesorId: ObjectId("687805fb306954376232a041"),
    horario: {
      dias: ["Lunes", "Viernes"],
      hora: "9:30 PM"
    },
    cupoMaximo: 30,
    inscriptos: []
  },
  {
    codigo: "MAT102",
    nombre: "Programacion II",
    creditos: 5,
    profesorId: ObjectId("687805fb306954376232a042"),
    horario: {
      dias: ["Martes", "Jueves"],
      hora: "16:30 PM"
    },
    cupoMaximo: 40,
    inscriptos: []
  }
])
```

---
2. Matricular un alumno en un curso 
    agregando al arreglo inscritos un objeto con:
    - alumnoId
    - fechaInscripcion (fecha actual)
    - estado (ej. "activo")

```mongodb
db.cursos.updateOne(
  { codigo: "MAT101" },
  { 
    $push: { 
      inscriptos: {
        alumnoId: ObjectId(),
        fechaInscripcion: new Date(),
        estado: "activo"
      }
    }
  }
)
```

---

3. Consultar los cursos con cupos disponibles, calculando el número de cupos restantes y mostrando solo aquellos con disponibilidad.

**Codigo para la consulta:**
```mongodb
db.cursos.aggregate([
  {
    $addFields: {
      cuposRestantes: { $subtract: ["$cupoMaximo", { $size: "$inscriptos" }] }
    }
  },
  {
    $match: {
      cuposRestantes: { $gt: 0 }
    }
  },
  {
    $project: {
      _id: 0,
      codigo: 1,
      nombre: 1,
      cupoMaximo: 1,
      cuposRestantes: 1,
      cantidadInscriptos: { $size: "$inscriptos" }
    }
  }
])
```


