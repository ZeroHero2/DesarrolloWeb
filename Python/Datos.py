print("Hola esto es python")
my_name = input("¿Cual es tu nombre?")
print("Un gusto conocerte", my_name)

# Tipos de datos 
# String 
my_name = 'Jesus'
print(my_name)

# Int 
my_age = 24
print (my_age)

# Boolean
is_single = True
print (is_single)

# ---- Union de Strings ----- 
name = "Jafeth"
last_name = "Sanchez"
print(name + " " + last_name)

# Segunda opcion 
name = "Eduardo"
last_name= "Dominguez"
age = 22

impresion = f"Hola {name} {last_name}, tu edad es {age}"
print(impresion)

# ---- Numeros  ----- 
calificacion1 = 10
calificacion2 = 6
calificacion3 = 7

promedio = f"Tu promedio es: ({calificacion1} + {calificacion2} + {calificacion3} ) / 3"
print(promedio)

# ---- Transformar datos ----- 
age = 15
saludo = "Hola tengo "
salida = saludo + str (age)
print(salida)
print (f" Mi edad es {age} años")

# Comparar datos 
x = 3.3
y = 2.1 + 1.2
print (y)
print(x)
print (x == y)