package CursoJava;
import java.util.Scanner;

public class ArraysAula {
  public static void main(String[] args) {
    
    Scanner scan = new Scanner(System.in);
    int[] num = new int[5];
    int[] numeros = {10, 20, 30, 40, 50};

    /*
    for (int i = 0; i < num.length ; i++) {
      System.out.println("Digite um valor: ");
      num[i] = scan.nextInt();
    }
    for (int i = 0; i < num.length ; i++) {
      System.out.println("Valor da posição " + i + ": " + num[i]);
    } 
    */
    final int tam = 5;
    char[] gabarito = new char[tam];
    char[] respostas = new char[tam];
    int nota = 0;

    respostas[0] = 'A';
    respostas[1] = 'B';
    respostas[2] = 'C';
    respostas[3] = 'B';
    respostas[4] = 'E';

    for (int i = 0 ; i < tam ; i++) {
      System.out.print("Informe a resposta " + i + ": ");
      gabarito[i] = scan.nextLine().charAt(0);
    }

    for (int i = 0 ; i < tam ; i++){
      if(respostas[i] == gabarito[i]){
        nota++;
      }
    }

    if (nota == 5) {
      System.out.println("Respostas acertadas: " + nota + " - Parabéns você gabaritou a prova !");
    } else {
      System.out.println("Respostas acertadas: " + nota);
    }

  }

}
