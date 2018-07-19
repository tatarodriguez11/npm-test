#Platzom

Platzom es un dioma inventado para el curso de fundamentos de javascript de platzi
##Descripcion del idioma
- Si la palabra termina en ar, se le quitan esos dos caracteres
- si la palabra inicia con z, se le añade pe al final
- si la palabra tiene 10 o mas letras se debe partir a la mtad y unir con un guion medio
- si la palabra original es un palindromo, ninguna regla anterior aplica y se devuelve la misma palabra pero intercalando mayusculas y minusculas

## Instalación
```
npm install platzom
```
##Uso
```
import platzom from 'platzom'

platzom("programar")// program
platzom("Zorro")// Zorrope
platzom("zarpar")// zarppe
platzom("sometemos")//SoMeTeMoS
platzom("abecedario")// abece-dario
```

##Creditos
- Jessica Rodriguez

##Licencia
[MIT]
