def posfija2codigo(posfija):
    intermedio = []
    codigo = []
    pila = []
    cont = 1

    for e in posfija:
        if e in '+-*/':  # Es operador
            op2 = pila.pop()
            op1 = pila.pop()
            destino = f't{cont}'
            cad = f'{destino} = {op1} {e} {op2}'
            intermedio.append(cad)
            
            if e == '+':
                cad2 = f'ADD {destino}, {op1}, {op2}'
            elif e == '-':
                cad2 = f'SUB {destino}, {op1}, {op2}'
            elif e == '*':
                cad2 = f'MUL {destino}, {op1}, {op2}'
            elif e == '/':
                cad2 = f'DIV {destino}, {op1}, {op2}'
            
            codigo.append(cad2)
            pila.append(destino)
            cont += 1
        else:  # Es un operando
            pila.append(e)

    return intermedio, codigo

posfija = ['15','/','2','/','1','-','3','*','14','9','*','+']
posfija = ['2','3','*','4','5','*','+']
15/2/1-3*(14*9)

inter, codigo = posfija2codigo(posfija)

for i in inter:
    print(i)

for e in codigo:
    print(e)