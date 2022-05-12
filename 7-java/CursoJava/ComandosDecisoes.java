package CursoJava;

public class ComandosDecisoes {
  public static void main(String[] args) {
    // IF
    // IF ELSE
    // ? Ternário
    // SWITCH CASE

    int nota = 5;
    int media = 7;
    int res;
    res = (nota > media ? 1 : 0);
    System.out.println("Resultado: " + (res == 1 ? "Aprovado" : "Reprovado"));


    
    int pos = 7;
    switch (pos) {
      case 1:
        System.out.println("Primeiro Lugar!");
        break;
      case 2:
        System.out.println("Segundo Lugar!");
        break;
      case 3:
        System.out.println("Terceiro Lugar!");
        break;
      case 4: case 5: case 6:
        System.out.println("Prêmio de participação");
        break;
      default:
        System.out.println("Não recebeu prêmio de participação");
        break;
    }
  }
}
