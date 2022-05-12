package CursoJava;
import java.util.Scanner;

public class ScannerAula {
  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);

    int n1 = 0,
        n2 = 0,
        n3 = 0,
        n4 = 0;
    final int MEDIA = 7;
    float soma = 0;
    String res = "";
    String nome = "";

    System.out.print("Digite o seu nome: ");
    nome = scan.next();
    System.out.print("\nDigite a nota 1: ");
    n1 = scan.nextInt();
    System.out.print("Digite a nota 2: ");
    n2 = scan.nextInt();
    System.out.print("Digite a nota 3: ");
    n3 = scan.nextInt();
    System.out.print("Digite a nota 4: ");
    n4 = scan.nextInt();

    soma = (n1 + n2 + n3 + n4) / 4;
    System.out.println("Olá " + nome + ", a média das notas são: " + soma);
    res = soma >= MEDIA ? "Aprovado" : "Reprovado";
    System.out.println("Você está: " + res);
  }
}
