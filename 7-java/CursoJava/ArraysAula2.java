package CursoJava;

import java.util.Arrays;
import java.util.Scanner;

public class ArraysAula2 {
  public static void main(String[] args) {

    final int tam = 10;
    int[] num = { 9, 2, 7, 1, 8, 5, 3, 4, 0, 6 };
    int[] numeros = new int[tam];
    int pesquisa = 7;
    int pos;
    // Arrays.sort(num); - Ordernar Arrays
    // Arrays.fill(numeros, 20); - Preencher o Array com o valor
    // System.arraycopy(num, 0, numeros, 0, tam);
    // Arrays.equals(num, numeros);
    // System.out.printf("Arrays são iguais? %s", Arrays.equals(num, numeros) ? "Sim, são iguais" : "Não, são diferentes");

    Arrays.sort(num);
    pos = Arrays.binarySearch(num, pesquisa);
    System.out.printf("O elemento %d está no array ? %s", pesquisa, pos > 0 ? "Sim" : "Não");

    /*
     * for (int n : numeros) {
     * System.out.println(n);
     * }
     */
  }
}
