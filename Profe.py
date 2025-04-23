def infija_a_posfija(expresion):
    precedencia = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    pila = []
    salida = []

    def es_operador(c):
        return c in precedencia

    for c in expresion:
        if c.isalnum():
            salida.append(c)
        elif c == '(':
            pila.append(c)
        elif c == ')':
            while pila and pila[-1] != '(':
                salida.append(pila.pop())
            pila.pop()
        else:
            while pila and pila[-1] != '(' and precedencia[c] <= precedencia.get(pila[-1], 0):
                salida.append(pila.pop())
            pila.append(c)

    while pila:
        salida.append(pila.pop())

    return salida


def infija_a_prefija(expresion):
    # Paso 1: Invertimos la expresión
    expresion = expresion[::-1]

    # Paso 2: Invertir paréntesis
    for i in range(len(expresion)):
        if expresion[i] == '(':
            expresion[i] = ')'
        elif expresion[i] == ')':
            expresion[i] = '('

    # Paso 3: Aplicamos posfija
    posfija_invertida = infija_a_posfija(expresion)

    # Paso 4: Invertimos el resultado
    return posfija_invertida[::-1]


# Lista de expresiones infijas
expresiones = [
    ['15', '/', '2', '/', '1', '-', '3', '*', '(', '14', '*', '9', ')'],
    ['(', '3', '-', '7', '/', '2', ')', '+', '8', '*', '12'],
    ['1', '*', '13', '*', '(', '15', '-', '3', ')'],
    ['2', '+', '(', '13', '/', '14', '*', '3', ')'],
    ['6', '*', '(', '14', '+', '13', ')', '+', '6', '/', '11', '*', '(', '9', '/', '4', ')'],
    ['2', '/', '12', '-', '13', '*', '(', '6', '+', '11', '/', '1', ')'],
    ['9', '/', '1', '*', '11', '+', '(', '14', '/', '10', ')', '-', '5', '+', '(', '3', '-', '8', ')'],
    ['(', '11', '-', '8', '-', '11', ')', '*', '12'],
    ['(', '1', '/', '4', ')', '-', '8', '+', '(', '10', '+', '10', ')', '-', '5'],
    ['9', '-', '(', '8', '-', '2', ')', '+', '(', '9', '*', '14', '-', '5', ')'],
    ['(', 'a', '-', 'b', ')', '*', 'c', '/', 'd', '/', 'e', '+', 'f'],
    ['a', '-', 'b', '+', '(', 'c', '*', 'd', ')', '+', 'e', '/', 'f'],
    ['a', '/', 'b', '+', '(', 'c', '+', 'd', ')'],
    ['(', 'a', '/', 'b', '*', 'c', '*', '(', 'd', '-', 'e', '*', 'f', ')', '+', 'g', ')', '*', 'h'],
    ['(', 'a', '+', 'b', ')', '-', 'c', '-', '(', 'd', '*', 'e', ')', '*', 'f'],
    ['(', 'a', '+', 'b', ')', '-', '(', 'c', '/', '(', 'd', '+', 'e', ')', '+', 'f', '-', 'g', ')', '-', 'h'],
    ['a', '*', 'b', '/', 'c', '-', 'd', '-', 'e', '-', '(', 'f', '/', 'g', ')'],
    ['a', '+', '(', 'b', '+', 'c', ')', '/', 'd'],
    ['a', '+', '(', 'b', '+', 'c', ')', '+', 'd', '/', 'e', '+', 'f'],
    ['a', '/', '(', 'b', '-', '(', 'c', '+', 'd', ')', '/', 'e', ')']
]

# Procesar y mostrar todas
for i, expr in enumerate(expresiones, start=1):
    posfija = infija_a_posfija(expr)
    prefija = infija_a_prefija(expr)

    print(f"Expresión {i}:")
    print("  Infija:  ", ' '.join(expr))
    print("  Posfija: ", ' '.join(posfija))
    print("  Prefija: ", ' '.join(prefija))
    print()