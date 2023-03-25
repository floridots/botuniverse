taxas_adsense = {
    "Sem Adsense": 50,
    "Adsense Médio": 250,
    "Adsense Alto": 500
}

def calcular_orcamento(nivel_adsense, visualizacoes_desejadas):
    if nivel_adsense not in taxas_adsense:
        raise ValueError("Nível de Adsense inválido. Por favor, selecione 'Sem Adsense', 'Adsense Médio' ou 'Adsense Alto'.")
    
    return visualizacoes_desejadas * taxas_adsense[nivel_adsense]

def obter_entrada(mensagem, tipo=int):
    while True:
        entrada = input(mensagem)
        try:
            valor = tipo(entrada)
            return valor
        except ValueError:
            print(f"Entrada inválida. Por favor, insira um valor {tipo.__name__} válido.")

def main():
    print("Níveis de Adsense: Sem Adsense, Adsense Médio, Adsense Alto")
    
    while True:
        nivel_adsense = input("Digite o nível de Adsense desejado: ")
        if nivel_adsense not in taxas_adsense:
            print("Nível de Adsense inválido. Por favor, selecione 'Sem Adsense', 'Adsense Médio' ou 'Adsense Alto'.")
            continue
        
        visualizacoes_desejadas = obter_entrada("Digite o número desejado de visualizações: ", int)
        
        if visualizacoes_desejadas < 0:
            print("O número de visualizações deve ser maior ou igual a zero.")
            continue
        
        orcamento = calcular_orcamento(nivel_adsense, visualizacoes_desejadas)
        print(f"Custo total para {visualizacoes_desejadas} visualizações com {nivel_adsense} é: {orcamento}")
        break

if __name__ == "__main__":
    main()
