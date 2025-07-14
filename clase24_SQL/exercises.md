# Ejercicios

A partir de la base de datos suministrada y mediante DQL,  
hacer las siguientes consultas (queries):

---

### 1. Contar cuántas películas empiezan con la letra S.

```sql
SELECT COUNT(*) FROM film
WHERE title
LIKE 'S%'
```

**Resultado:** `119`

---

### 2. Sumar la duración en minutos de todas las películas clasificadas para PG-13.

```sql
SELECT SUM(length) 
FROM film
WHERE rating = 'PG-13'
```

**Resultado:** `26859`

---

### 3. Mostrar todos los emails de los clientes junto con la suma de todas las películas que rentaron.

```sql
SELECT 
    c.customer_id AS id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer,
    c.email AS email,
    COUNT(r.inventory_id) AS total_rent
FROM customer AS c
JOIN rental AS r ON c.customer_id = r.customer_id
GROUP BY c.customer_id
ORDER BY c.customer_id ASC
```

---

### 4. Mostrar el número de teléfono de la dirección que tiene el código postal más grande.

```sql
SELECT *
FROM address
WHERE postal_code = (
    SELECT MAX(postal_code)
    FROM address
);
```

**Otra forma tambien puede ser:**

```sql
SELECT phone, address, postal_code
FROM address
ORDER BY postal_code desc
LIMIT 1
```

**Resultado:**
| phone        | address           | postal_code |
|--------------|-------------------|-------------|
| 934730187245 | 96 Tafuna Way     | 99865       |

---

### 5. Mostrar la dirección, el distrito y el nombre de la ciudad del primer cliente inactivo.

```sql
SELECT 
    CONCAT(c.first_name, ' ', c.last_name) AS name, 
    a.address,
    a.district,
    ci.city,
    c.last_update -- last_update es el mismo valor para todos
FROM customer AS c
JOIN address AS a ON c.address_id = a.address_id
JOIN city AS ci ON a.city_id = ci.city_id
WHERE active = 0
LIMIT 1
```

**Resultado:**
| name        | address               | district | city             |
|--------------|------------------------|----------|------------------|
| Sandra Martin | 360 Toulouse Parkway  | England  | Southend-on-Sea  |