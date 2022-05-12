package CursoJava;
import java.util.Scanner;

public class LoopsAula {
  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    
    // FOR
    /*
    for(int i = 1 ; i <= 5 ; i++){
      System.out.println(i + " - Oi ");
    }
    System.out.println("Fim do programa");
    */

    // WHILE
    /*
    int max = scan.nextInt();
    int i = 1;
    while(i <= max) {
      System.out.println(i + " - Teste");
      i++;
    }
    */
    // DO WHILE
    int i = 0;
    do {
      System.out.println(i + " - Teste");
      i++;
    }while(i <= 0);
  } 
}
